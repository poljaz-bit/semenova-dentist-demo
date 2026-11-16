/* ---------- icons ---------- */
const ICONS = {
  tooth:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5c-1.2-1.2-3-1.6-4.4-.8C6 5.6 5.4 7.4 5.7 9.4c.3 1.8.7 2.6.9 4.4.2 1.7.3 4 1.6 4.6 1 .5 1.5-.6 1.8-2 .3-1.3.6-2.4 2-2.4s1.7 1.1 2 2.4c.3 1.4.8 2.5 1.8 2 1.3-.6 1.4-2.9 1.6-4.6.2-1.8.6-2.6.9-4.4.3-2-.3-3.8-1.9-4.7-1.4-.8-3.2-.4-4.4.8z"/></svg>',
  crown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8l3 3 5-6 5 6 3-3v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8z"/></svg>',
  smile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 10.5h.01M15.5 10.5h.01"/><path d="M8 14.5c1 1.3 2.4 2 4 2s3-.7 4-2"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9z"/></svg>',
  calc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18h4"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z"/></svg>',
  wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 0 1 0 16.4 8.1 8.1 0 0 1-4.2-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 0 1 12 3.8zm-3 4c-.2 0-.5 0-.7.3-.3.3-.9.9-.9 2s.9 2.3 1 2.4c.1.2 1.6 2.6 4 3.5 2 .8 2.4.6 2.8.6.4 0 1.3-.5 1.5-1 .2-.6.2-1 .2-1.1l-.4-.2-1.4-.7c-.2 0-.3-.1-.5.1-.2.3-.6.7-.7.9-.1.1-.3.2-.5.1-.2-.1-1-.4-2-1.3a7 7 0 0 1-1.3-1.7c-.2-.3 0-.4.1-.5l.4-.5c.1-.1.1-.3.2-.4v-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4z"/></svg>',
  tg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3 18.9 19c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.4-4.9 8.9-8c.4-.3-.1-.5-.6-.2L7.3 12.8l-4.7-1.5c-1-.3-1-1 .2-1.5l18.4-7.1c.8-.3 1.6.2 1.3 1.6z"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5.5c0 4.3-2.9 7.9-7 9.5-4.1-1.6-7-5.2-7-9.5V6l7-3z"/><path d="M9.5 12l1.8 1.8 3.5-3.6"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/></svg>',
  sparkle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8.5" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2 2 0 0 1 6 3.5h13v17H6a2 2 0 0 0-2 2v-17z"/><path d="M4 18.5h15"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.6l2.7 5.9 6.4.7-4.8 4.3 1.3 6.3L12 16.6l-5.6 3.2 1.3-6.3-4.8-4.3 6.4-.7z"/></svg>'
};
const ic = (k) => ICONS[k] || ICONS.check;

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const bySlug = (slug) => SERVICES.find(s => s.slug === slug);
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- shared blocks ---------- */
const headerHTML = () => `
<header class="header" id="header">
  <div class="wrap header-in">
    <a href="#/" class="brand" aria-label="На главную">
      <span class="brand-mark">ЕС</span>
      <span class="brand-txt">
        <span class="brand-name">Семёнова Елена</span>
        <span class="brand-sub">стоматолог · Москва</span>
      </span>
    </a>
    <nav class="nav" id="mainNav">
      <a href="#/o-vrache">О враче</a>
      <a href="#/uslugi">Услуги</a>
      <a href="#/do-posle">До / после</a>
      <a href="#/otzyvy">Отзывы</a>
      <a href="#/ceny">Цены</a>
      <a href="#/faq">Вопросы</a>
      <a href="#/kontakty">Контакты</a>
    </nav>
    <div class="header-cta">
      <a class="header-phone" href="${DOCTOR.phoneHref}">
        <span class="hp-top">ежедневно 10–22</span>
        <span class="hp-num">${DOCTOR.phone}</span>
      </a>
      <button class="btn btn-primary btn-sm" data-book>Записаться</button>
      <button class="burger" id="burger" aria-label="Меню"><i></i></button>
    </div>
  </div>
</header>

<div class="mobile-menu" id="mobileMenu">
  <div class="mm-top">
    <a href="#/" class="brand"><span class="brand-mark">ЕС</span>
      <span class="brand-txt"><span class="brand-name">Семёнова Елена</span>
      <span class="brand-sub">стоматолог · Москва</span></span></a>
    <button class="mm-close" id="mmClose" aria-label="Закрыть">×</button>
  </div>
  <a class="mm-link" href="#/o-vrache">О враче <small>о подходе</small></a>
  <a class="mm-link" href="#/pervyj-vizit">Первый визит <small>что будет</small></a>
  <a class="mm-link" href="#/uslugi">Услуги <small>терапия · ортопедия</small></a>
  <a class="mm-link" href="#/do-posle">До / после <small>кейсы</small></a>
  <a class="mm-link" href="#/otzyvy">Отзывы <small>пациенты</small></a>
  <a class="mm-link" href="#/ceny">Цены <small>прайс</small></a>
  <a class="mm-link" href="#/standarty">Стандарты <small>Минздрава</small></a>
  <a class="mm-link" href="#/faq">Вопросы <small>FAQ</small></a>
  <a class="mm-link" href="#/kontakty">Контакты <small>как добраться</small></a>
  <div class="mm-foot">
    <button class="btn btn-primary btn-block" data-book>Записаться на консультацию</button>
    <a class="btn btn-ghost btn-block" href="${DOCTOR.phoneHref}">Позвонить ${DOCTOR.phone}</a>
    <div class="mm-note">${DOCTOR.address} · ${DOCTOR.hours}</div>
  </div>
</div>`;

const footerHTML = () => `
<footer class="footer">
  <div class="wrap">
    <div class="footer-top">
      <div class="f-brand">
        <span class="brand-mark">ЕС</span>
        <div class="footer-name">Семёнова Елена Вячеславовна</div>
        <p style="font-size:.84rem;max-width:32ch">Врач-стоматолог терапевт и ортопед. Терапия, эндодонтия, эстетика и ортопедия — бережно и с понятным планом.</p>
        <p class="f-clinic">Принимаю в клинике<br><b>«Моя Улыбка»</b></p>
        <a class="f-license" href="${DOCTOR.licenseHref}" target="_blank" rel="noopener">${DOCTOR.license}</a>
      </div>
      <div>
        <h4>Разделы</h4>
        <a href="#/o-vrache">О враче</a>
        <a href="#/pervyj-vizit">Первый визит</a>
        <a href="#/uslugi">Услуги</a>
        <a href="#/do-posle">До / после</a>
        <a href="#/otzyvy">Отзывы</a>
        <a href="#/ceny">Цены</a>
        <a href="#/standarty">Стандарты лечения</a>
        <a href="#/faq">Вопросы и ответы</a>
      </div>
      <div>
        <h4>Клиника</h4>
        <p style="margin-bottom:10px">${DOCTOR.address}<br>${DOCTOR.metro.join(' · ')}</p>
        <a href="${DOCTOR.phoneHref}" style="font-weight:700;color:#fff;font-size:1rem">${DOCTOR.phone}</a>
        <p style="margin-top:8px">${DOCTOR.hours}</p>
        <p style="margin-top:8px"><a href="mailto:${DOCTOR.email}" style="display:inline;padding:0">${DOCTOR.email}</a></p>
        <a href="${DOCTOR.yandex}" target="_blank" rel="noopener">Яндекс Профиль клиники ↗</a>
      </div>
      <div class="f-docs">
        <h4>Документы</h4>
        <a href="${DOCTOR.licenseHref}" target="_blank" rel="noopener">Лицензия ↗</a>
        <a href="#/politika">Политика конфиденциальности</a>
        <a href="#/pravila">Правила обработки персональных данных</a>
        <a href="#/pravovaya">Правовая информация</a>
        <a href="#/garantii">Государственные гарантии</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© ${new Date().getFullYear()} Семёнова Е.В. · Услуги оказываются в клинике «Моя Улыбка» (ООО «ИмпроДент») · Информация не является публичной офертой.</div>
      <div>
        <a href="#/politika">Политика</a> ·
        <a href="#/pravila">Правила обработки данных</a>
      </div>
    </div>
    <p style="font-size:.8rem;color:rgba(255,255,255,.62);margin-top:16px;max-width:52ch">
      Сайт носит информационный характер и не заменяет очную консультацию врача. Имеются противопоказания,
      необходима консультация специалиста. Стоимость указана ориентировочно, итоговая определяется после диагностики.
    </p>
  </div>
</footer>
<div class="mob-bar">
  <a class="btn btn-ghost" href="${DOCTOR.phoneHref}">Позвонить</a>
  <button class="btn btn-primary" data-book>Записаться</button>
</div>`;

/* modal */
const modalHTML = () => `
<div class="modal" id="bookModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="bmt">
  <div class="modal-card">
    <div class="modal-head">
      <div>
        <h3 id="bmt">Записаться на консультацию</h3>
      </div>
      <button class="modal-close" id="modalClose" aria-label="Закрыть">×</button>
    </div>
    <p class="modal-sub">Оставьте номер — перезвоню в течение рабочего дня и подберём удобное время. Ежедневно 10:00–22:00.</p>
    ${bookFormHTML('modal')}
  </div>
</div>
<div class="modal" id="videoModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="vt">
  <div class="modal-card video-modal-card">
    <div class="modal-head">
      <div><h3 id="vt">Видео-приветствие</h3></div>
      <button class="modal-close" id="videoClose" aria-label="Закрыть">×</button>
    </div>
    <div class="video-frame">
      <video controls playsinline poster="assets/photo/doctor.jpg" aria-label="Видео-приветствие врача">
        <source src="" type="video/mp4">
      </video>
    </div>
    <p class="form-note" style="margin-top:12px">Демо-блок: вместо этого плеера будет видео врача (40–60 секунд,
    снимается один раз). Пациент слышит голос и видит живую речь до визита — для тревожных пациентов
    это работает лучше любого текста.</p>
  </div>
</div>`;

const bookFormHTML = (id) => `
<form class="book-form" data-form="${id}" novalidate>
  <div class="form-grid">
    <div class="field"><label for="${id}-name">Имя</label>
      <input id="${id}-name" name="name" placeholder="Как к вам обращаться" required></div>
    <div class="field"><label for="${id}-phone">Телефон</label>
      <input id="${id}-phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required></div>
    <div class="field full"><label for="${id}-svc">Что беспокоит</label>
      <select id="${id}-svc" name="service">
        <option>Просто консультация</option>
        ${SERVICES.map(s=>`<option>${s.title}</option>`).join('')}
        <option>Острая боль — срочно</option>
      </select></div>
    <div class="field full"><label for="${id}-time">Удобное время</label>
      <select id="${id}-time" name="time">
        <option>Любое время</option>
        <option>10:00 – 13:00</option>
        <option>13:00 – 17:00</option>
        <option>17:00 – 20:00</option>
        <option>20:00 – 22:00</option>
      </select></div>
    <div class="field full"><label for="${id}-c">Комментарий (необязательно)</label>
      <textarea id="${id}-c" name="comment" placeholder="Например: боюсь лечения, нужен первый визит без вмешательства"></textarea></div>
  </div>
  <label class="wl-check" style="margin:2px 0 12px">
    <input type="checkbox" name="waitlist">
    <span>Удобное время занято — запишите в лист ожидания: приеду раньше, как только освободится окно</span>
  </label>
  <label class="consent" style="margin:14px 0 16px">
    <input type="checkbox" required>
    <span>Согласен на обработку персональных данных в соответствии с <a href="#/pravila" style="text-decoration:underline">правилами</a> и <a href="#/politika" style="text-decoration:underline">политикой конфиденциальности</a>.</span>
  </label>
  <button class="btn btn-primary btn-block" type="submit">Отправить заявку</button>
  <p class="form-note" style="margin-top:12px;text-align:center">Перезвоню в течение рабочего дня и подберём удобное время.</p>
  <div class="form-ok" data-ok data-ok-wl="Спасибо! Вы в листе ожидания: как только время освободится, вам позвонят в первую очередь.">Спасибо, заявка принята! Перезвоню в течение рабочего дня, чтобы согласовать время визита.</div>
</form>`;

/* ---------- shared: star rating ---------- */
const starsHTML = (n = 5) => `<span class="stars" aria-label="Оценка ${n} из 5">${ic('star').repeat(n)}</span>`;

/* ---------- page: home ---------- */
const homePage = () => `
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <div class="hero-badge"><span class="dot"></span> Принимаю ежедневно · 10:00–22:00</div>
      <h1>Стоматолог, к которому <span class="hl">возвращаются</span></h1>
      <p class="lead hero-sub">Елена Вячеславовна Семёнова — терапевт и ортопед с опытом более 30 лет.
      Диагностика, письменный план лечения и стоимость, которая не меняется в процессе.</p>
      <div class="hero-actions">
        <button class="btn btn-primary" data-book>${ic('calendar')} Записаться на консультацию</button>
        <a class="btn btn-ghost" href="${DOCTOR.phoneHref}">${ic('phone')} ${DOCTOR.phone}</a>
      </div>
      <div class="hero-facts">
        <div class="fact"><b>30 лет</b><span>стажа: терапия и ортопедия</span></div>
        <div class="fact"><b>Высшая</b><span>категория врача</span></div>
        <div class="fact"><b>1 000 ₽</b><span>консультация с письменным планом</span></div>
      </div>
    </div>
    <div class="hero-media">
      <div class="hero-photo"><img src="assets/photo/doctor.jpg" alt="Врач-стоматолог Елена Вячеславовна Семёнова"></div>
      <div class="hero-note">
        <div class="stars-row">${ic('shield')}<span>Врач высшей категории · стаж 30 лет</span></div>
        <b>«Сначала объясняю, потом лечу»</b>
      </div>
    </div>
  </div>
</section>

<div class="strip">
  <div class="wrap strip-in">
    <div class="strip-i">${ic('shield')}<div><b>Письменный план</b><span>этапы, сроки и смета до начала</span></div></div>
    <div class="strip-i">${ic('clock')}<div><b>Без спешки</b><span>приём с запасом времени</span></div></div>
    <div class="strip-i">${ic('pin')}<div><b>Удальцова 5к1</b><span>7 минут от м. Проспект Вернадского</span></div></div>
    <div class="strip-i">${ic('heart')}<div><b>Работа со страхом</b><span>первый визит может быть без лечения</span></div></div>
  </div>
</div>

<section class="section">
  <div class="wrap">
    <div class="section-head rv">
      <span class="eyebrow">С чем приходят</span>
      <h2>Знакомая ситуация?</h2>
      <p class="lead">Пять самых частых поводов записаться. Если вашего случая нет — напишите, разберёмся.</p>
    </div>
    <div class="problem-grid">
      ${PROBLEMS.map(p=>`
        <a class="problem rv" href="${p.href}">
          <span class="ic">${ic(p.icon)}</span>
          <span class="q">${p.q}</span>
          <span class="a">${p.a}</span>
          <span class="tick">Что делаем ${ic('arrow')}</span>
        </a>`).join('')}
    </div>
  </div>
</section>

<section class="section sand">
  <div class="wrap about-teaser">
    <div class="at-ava rv">
      <img src="assets/photo/doctor.jpg" alt="Врач-стоматолог Елена Вячеславовна Семёнова">
      <div class="at-exp"><b>30</b><span>лет практики</span></div>
    </div>
    <div class="rv">
      <span class="eyebrow">О враче</span>
      <h2>Лечу не «зуб номер 26»,<br>а человека с тревогой</h2>
      <p class="lead" style="margin-top:16px">За 30 лет практики я поняла: люди боятся не бормашины, а неопределённости.
      Непонятно, что будут делать, сколько это стоит и не станет ли хуже. Поэтому первая встреча — про разговор.</p>
      <div class="about-list">
        <div class="about-item"><b>образование</b><span>МГМСУ им. А.И. Евдокимова</span></div>
        <div class="about-item"><b>специальности</b><span>стоматология терапевтическая, ортопедическая</span></div>
        <div class="about-item"><b>специализация</b><span>гигиена и отбеливание (ZOOM, Klox Fast&Mild), эндодонтия, реставрация, микропротезирование</span></div>
        <div class="about-item"><b>стаж</b><span>более 30 лет клинической практики</span></div>
        <div class="about-item"><b>подход</b><span>минимальное вмешательство, сохранение своих тканей</span></div>
      </div>
      <a class="btn btn-ghost" href="#/o-vrache">Подробнее обо мне ${ic('arrow')}</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap video-split">
    <div class="rv">
      <span class="eyebrow">Видео-знакомство</span>
      <h2>40 секунд — и вы уже знакомы</h2>
      <p class="lead" style="margin-top:16px">Пока страница «Первый визит» рассказывает детали,
      видео даёт главное: голос, лицо и манеру говорить врача, к которому вы идёте.
      Для многих это спокойнее любого текста.</p>
      <ul class="checklist">
        <li>${ic('check')} кто я и где принимаю</li>
        <li>${ic('check')} как проходит первая встреча</li>
        <li>${ic('check')} почему на первом визите не лечат</li>
      </ul>
      <button class="btn btn-primary" data-video>${ic('sparkle')} Смотреть видео-приветствие</button>
    </div>
    <figure class="video-card rv">
      <img src="assets/photo/doctor.jpg" alt="Видео-приветствие врача — Елена Вячеславовна Семёнова">
      <button class="video-play" data-video aria-label="Смотреть видео-приветствие">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>
      </button>
      <figcaption class="video-badge">Демо-блок · видео заменяется после съёмки</figcaption>
    </figure>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="split-head">
      <div class="section-head rv">
        <span class="eyebrow">Услуги</span>
        <h2>Что я делаю</h2>
        <p class="lead">Терапия и ортопедия — полный цикл в одних руках: не нужно ходить по кабинетам.</p>
      </div>
      <a class="link-arrow" href="#/uslugi">Все услуги и цены ${ic('arrow')}</a>
    </div>
    <div class="svc-grid">
      ${SERVICES.slice(0,6).map(s=>`
        <a class="svc rv" href="#/uslugi/${s.slug}">
          <div class="svc-img"><img src="${s.img}" alt="${s.h1}"></div>
          <div class="svc-body">
            <span class="svc-kicker">${s.kicker}</span>
            <h3>${s.title}</h3>
            <p>${s.short}</p>
            <div class="svc-meta"><span>${s.duration}</span><b>${s.price}</b></div>
            <span class="svc-more">Подробнее ${ic('arrow')}</span>
          </div>
        </a>`).join('')}
    </div>
  </div>
</section>

<section class="section tight">
  <div class="wrap">
    <div class="section-head rv" style="margin-bottom:34px">
      <span class="eyebrow">Как это работает</span>
      <h2>Пять шагов от звонка до результата</h2>
    </div>
    <div class="steps rv">
      <div class="step"><span class="step-n">01</span><b>Заявка</b><p>Пишете или звоните. Отвечаю в течение дня, при острой боли — ищу окно сегодня.</p></div>
      <div class="step"><span class="step-n">02</span><b>Разговор</b><p>Что беспокоит и чего опасаетесь. Это часть диагностики, а не формальность.</p></div>
      <div class="step"><span class="step-n">03</span><b>Диагностика</b><p>Осмотр всех зубов, снимки по показаниям. Показываю на экране, что вижу.</p></div>
      <div class="step"><span class="step-n">04</span><b>План и смета</b><p>Этапы, сроки, приоритеты и стоимость — письменно, чтобы можно было подумать.</p></div>
      <div class="step"><span class="step-n">05</span><b>Лечение и поддержка</b><p>Работаем по плану. После — контроль и ответы на вопросы, не только в кабинете.</p></div>
    </div>
  </div>
</section>

<section class="section sand">
  <div class="wrap clinic-split">
    <div class="rv">
      <span class="eyebrow">Клиника</span>
      <h2>Принимаю в клинике<br>«Моя Улыбка» на Удальцова</h2>
      <p class="lead" style="margin-top:16px">Кабинет с микроскопом, рядом — КЛКТ-томограф и интраоральный сканер:
      снимки и цифровые слепки делаю на месте, за один визит, без поездок по другим клиникам.</p>
      <p style="margin-top:14px;font-size:.98rem;color:var(--ink-78);line-height:1.6;max-width:52ch">Клиника работает
      с 2012 года — лицензия ЛО-77-41-004821 от 11.04.2012. Все виды лечения здесь проходят с микроскопом,
      диагностика — на КТ и 3D-сканере.</p>
      <div class="clinic-actions">
        <a class="btn btn-ghost" href="#/kontakty">Как добраться ${ic('arrow')}</a>
        <a class="link-arrow" href="${DOCTOR.yandex}" target="_blank" rel="noopener">Яндекс Профиль клиники ${ic('arrow')}</a>
      </div>
    </div>
    <div class="clinic-collage rv">
      <figure class="cl-main">
        <img src="assets/img/clinic/kabinet-1.webp" alt="Кабинет клиники «Моя Улыбка» — стоматологическая установка и микроскоп">
        <figcaption>кабинет</figcaption>
      </figure>
      <figure>
        <img src="assets/img/clinic/mikroskop.webp" alt="Медицинский микроскоп для лечения каналов">
        <figcaption>микроскоп</figcaption>
      </figure>
      <figure>
        <img src="assets/img/clinic/kt.webp" alt="КЛКТ-томограф для 3D-снимков">
        <figcaption>КЛКТ-томограф</figcaption>
      </figure>
      <figure>
        <img src="assets/img/clinic/reseption.webp" alt="Ресепшн клиники «Моя Улыбка»">
        <figcaption>ресепшн</figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="split-head">
      <div class="section-head rv">
        <span class="eyebrow">До / после</span>
        <h2>Результаты, которые можно увидеть</h2>
        <p class="lead">Клинические случаи с описанием ситуации, сроков и использованных материалов.</p>
      </div>
      <a class="link-arrow" href="#/do-posle">Все кейсы ${ic('arrow')}</a>
    </div>
    <div class="case-grid">
      ${CASES.slice(0,3).map(c=>`
        <article class="case rv">
          <div class="case-pair">
            <figure><img src="${c.before}" alt="${c.title} — до"><figcaption>до</figcaption></figure>
            <figure><img src="${c.after}" alt="${c.title} — после"><figcaption>после</figcaption></figure>
            <span class="split"></span>
          </div>
          <div class="case-body">
            <b>${c.title}</b>
            <p>${c.desc}</p>
            <div class="case-tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}<span class="tag">${c.term}</span></div>
          </div>
        </article>`).join('')}
    </div>
    <p class="form-note" style="margin-top:16px">Все кейсы публикуются с письменного согласия пациентов. Результат зависит от клинической ситуации.</p>
  </div>
</section>

<section class="section sand">
  <div class="wrap">
    <div class="split-head">
      <div class="section-head rv">
        <span class="eyebrow">Отзывы</span>
        <h2>Отзывы — только настоящие</h2>
      </div>
    </div>
    <div class="info-grid">
      <div class="info-box rv"><b>Где читать</b>
        <p>Своей стены отзывов на сайте нет — все отзывы о приёме живут на независимых
        площадках, где их нельзя отредактировать или удалить.</p></div>
      <div class="info-box rv"><b>Как помочь</b>
        <p>Были на приёме — расскажите о нём другим пациентам. Для меня это лучший способ
        узнать, что делать лучше.</p></div>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:26px" class="rv">
      <a class="btn btn-primary" href="${DOCTOR.prodoctorov}" target="_blank" rel="noopener">${ic('star')} Отзыв на ПроДокторов</a>
      <a class="btn btn-ghost" href="${DOCTOR.yandex}" target="_blank" rel="noopener">${ic('pin')} Отзыв на Яндекс Картах</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head rv"><span class="eyebrow">Вопросы</span><h2>Честные ответы на неудобные вопросы</h2></div>
    <div class="two-col">
      <div class="acc rv">
        ${FAQ.slice(0,4).map(([q,a])=>accItem(q,a)).join('')}
      </div>
      <div class="acc rv">
        ${FAQ.slice(4,8).map(([q,a])=>accItem(q,a)).join('')}
      </div>
    </div>
    <div style="margin-top:24px"><a class="link-arrow" href="#/faq">Все вопросы ${ic('arrow')}</a></div>
  </div>
</section>

<section class="section tight">
  <div class="wrap">
    <div class="cta-band rv">
      <div>
        <h2>Первый визит — это разговор, а не лечение</h2>
        <p>Осмотр, снимки при необходимости, письменный план и смета. Если решите не лечиться сейчас — это нормальный исход.</p>
      </div>
      <div class="cta-actions">
        <button class="btn btn-light" data-book>${ic('calendar')} Записаться</button>
        <a class="btn btn-ghost" style="border-color:rgba(255,255,255,.3);color:#fff" href="${DOCTOR.phoneHref}">${DOCTOR.phone}</a>
        <span class="cta-alt"><a href="#/pervyj-vizit" style="color:#fff;text-decoration:underline;text-underline-offset:3px">Подробно о первом визите</a> · ${DOCTOR.hours} · ${DOCTOR.address}</span>
      </div>
    </div>
  </div>
</section>`;

const accItem = (q,a) => `
<div class="acc-item">
  <button class="acc-btn">${esc(q)}<span class="pm"></span></button>
  <div class="acc-panel"><div class="acc-panel-in">${esc(a)}</div></div>
</div>`;
