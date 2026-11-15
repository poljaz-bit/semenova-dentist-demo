/* Маячок открытий — уведомление в Telegram.
   Настройка (см. трекинг/README-трекинг.md): вписать BOT_TOKEN и CHAT_ID.
   Пока они пустые — скрипт бездействует.
   Приватность: уходят только метка страницы, время и тип устройства. */
(function () {
  "use strict";
  var BOT_TOKEN = ""; // токен бота от @BotFather, вида 123456789:AA...
  var CHAT_ID = "";   // ваш chat_id; его печатает получить-chat_id.py
  if (!BOT_TOKEN || !CHAT_ID) return;

  var s = document.currentScript;
  var label = (s && s.getAttribute("data-label")) || "страница";

  try {
    var key = "trk:" + label;
    var st = JSON.parse(localStorage.getItem(key) || '{"n":0,"t":0}');
    var now = Date.now();
    if (now - st.t < 10 * 60 * 1000) return; // дедупликация: одно сообщение в 10 минут
    st.n += 1; st.t = now;
    localStorage.setItem(key, JSON.stringify(st));

    var ua = navigator.userAgent;
    var dev = /iPhone|iPad|iPod/.test(ua) ? "iPhone/iPad"
            : /Android/.test(ua) ? "Android"
            : /Windows|Macintosh|Linux/.test(ua) ? "компьютер" : "другое устройство";
    var text = "Открыто: " + label + " • " + new Date().toLocaleString("ru-RU") +
               " • " + dev + " • открытие №" + st.n;

    var url = "https://api.telegram.org/bot" + BOT_TOKEN +
              "/sendMessage?chat_id=" + CHAT_ID + "&text=" + encodeURIComponent(text);
    fetch(url, { mode: "no-cors" }).catch(function () { new Image().src = url; });
  } catch (e) { /* молча: сбой трекинга не должен ломать страницу */ }
})();
