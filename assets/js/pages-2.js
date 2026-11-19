/* ---------- page: about ---------- */
const aboutPage = () => `
<section class="page-head">
  <div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a><span>/</span> О враче</div>
    <h1>Елена Вячеславовна Семёнова</h1>
    <p class="lead">Врач-стоматолог терапевт, врач-стоматолог ортопед. Высшая категория, более 30 лет практики, МГМСУ им. А.И. Евдокимова.</p>
  </div>
</section>

<section class="section tight" style="padding-top:0">
  <div class="wrap">
    <div class="two-col" style="align-items:center;gap:clamp(24px,4.4vw,60px)">
      <div class="svc-hero-img rv" style="aspect-ratio:4/5;max-width:440px"><img src="assets/photo/doctor.jpg" alt="Врач-стоматолог Елена Вячеславовна Семёнова"></div>
      <div class="rv">
        <span class="eyebrow">Позиция</span>
        <h2>«Моя работа — не удивить технологиями, а чтобы вы перестали откладывать визит»</h2>
        <p class="lead" style="margin-top:16px">Я работаю в двух специальностях — терапии и ортопедии. Это значит, что лечение зуба и его
        восстановление коронкой делает один человек, который видит картину целиком: как канал влияет на прогноз коронки,
        а прикус — на долговечность реставрации.</p>
        <p class="lead" style="margin-top:14px">И ещё: я не считаю нормальным, когда пациент выходит из кабинета, не понимая,
        что с ним сделали и почему это стоило столько. Поэтому объясняю, показываю снимки и пишу план.</p>
      </div>
    </div>
  </div>
</section>

<section class="section sand">
  <div class="wrap">
    <div class="two-col">
      <div class="rv">
        <span class="eyebrow">Образование</span>
        <h2 style="margin-bottom:18px">База и специализации</h2>
        <p style="font-size:1.05rem;line-height:1.65;color:var(--ink-78);margin-bottom:8px;max-width:56ch">Специализируюсь на проведении гигиены полости рта, отбеливании (ZOOM, Klox Fast&amp;Mild),
        лечении кариеса и некариозных поражений, эндодонтическом лечении с использованием Ni-Ti-инструментов,
        реставрации зубов фронтальной и жевательной групп, микропротезировании.</p>
        <div class="about-list">
          <div class="about-item"><b>вуз</b><span>Московский государственный медико-стоматологический университет имени А.И. Евдокимова</span></div>
          <div class="about-item"><b>клиника</b><span>Центр эстетической стоматологии «Моя Улыбка», Удальцова 5к1 — лицензия ЛО-77-41-004821 от 11.04.2012</span></div>
          <div class="about-item"><b>гигиена</b><span>профессиональная гигиена, отбеливание ZOOM и Klox Fast&amp;Mild</span></div>
          <div class="about-item"><b>терапия</b><span>лечение кариеса и некариозных поражений, эндодонтия с Ni-Ti-инструментами</span></div>
          <div class="about-item"><b>эстетика</b><span>реставрация зубов фронтальной и жевательной групп</span></div>
          <div class="about-item"><b>ортопедия</b><span>коронки, виниры, микропротезирование вкладками, съёмные конструкции</span></div>
          <div class="about-item"><b>стаж</b><span>более 30 лет клинической практики</span></div>
          <div class="about-item"><b>принцип</b><span>минимальное вмешательство и сохранение своих тканей</span></div>
        </div>
      </div>
      <div class="rv">
        <span class="eyebrow">Подход</span>
        <h2 style="margin-bottom:24px">Четыре правила приёма</h2>
        <div style="display:grid;gap:14px">
          ${[
            ['Никакого лечения без понимания','Сначала диагностика и план. Вы должны знать, что и зачем делается — до того, как открыли рот.'],
            ['Сначала разговор','Спрашиваю про страх, прошлый опыт и ожидания. Это влияет на план не меньше снимка.'],
            ['Минимум вмешательства','Сохраняю свои ткани там, где можно. Коронка — не решение проблемы кариеса на ранней стадии.'],
            ['Честная смета','Вилка по этапам, письменно. Если что-то можно не делать — говорю прямо.']
          ].map(([b,p],i)=>`
            <div style="background:#fff;border:1px solid var(--line-soft);border-radius:15px;padding:20px">
              <div style="display:flex;gap:12px;align-items:baseline">
                <span class="serif" style="color:var(--accent);font-size:1rem">0${i+1}</span>
                <div><b style="display:block;font-size:.98rem;letter-spacing:-.02em;margin-bottom:5px">${b}</b>
                <p style="font-size:.87rem;color:var(--ink-55);line-height:1.55">${p}</p></div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="split-head">
      <div class="section-head rv"><span class="eyebrow">Сертификаты</span><h2>Документы и повышение квалификации</h2>
      <p class="lead">Регулярно прохожу курсы по эндодонтии, эстетике и ортопедии — раз в 3–5 лет, как требует переподготовка.</p></div>
    </div>
    <div class="cert-grid">
      ${[['Диплом МГМСУ им. А.И. Евдокимова','стоматология · 1996'],['Ординатура МГМСУ','стоматология терапевтическая · 1998'],['Повышение квалификации МГМСУ','стоматология терапевтическая · 2002'],['Повышение квалификации МГМСУ','стоматология терапевтическая · 2007'],['Повышение квалификации МГМСУ','стоматология терапевтическая · 2012'],['Повышение квалификации МГМСУ','стоматология терапевтическая · 2017'],['Высшая квалификационная категория','подтверждена по документам'],['Профиль на ПроДокторов','образование и стаж сверены площадкой']].map(([t,sub])=>`
        <div class="cert rv">
          <span class="cert-ic">${ic('book')}</span>
          <div><b>${t}</b><span>${sub}</span></div>
        </div>`).join('')}
    </div>
    <p class="form-note" style="margin-top:16px">Годы образования — по подтверждённому профилю
    на <a href="${DOCTOR.prodoctorov}" target="_blank" rel="noopener" style="text-decoration:underline">ПроДокторов</a>.</p>
  </div>
</section>

<section class="section tight">
  <div class="wrap"><div class="cta-band rv">
    <div><h2>Познакомимся на консультации</h2>
    <p>40–60 минут, осмотр, обсуждение и план. Без обязательств начинать лечение сразу.</p></div>
    <div class="cta-actions">
      <button class="btn btn-light" data-book>${ic('calendar')} Записаться</button>
      <a class="btn btn-ghost" style="border-color:rgba(255,255,255,.3);color:#fff" href="${DOCTOR.phoneHref}">${DOCTOR.phone}</a>
    </div>
  </div></div>
</section>`;

/* ---------- page: services index ---------- */
const servicesPage = () => `
<section class="page-head">
  <div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a><span>/</span> Услуги</div>
    <h1>Услуги и цены</h1>
    <p class="lead">Полный цикл в одних руках: терапия, эндодонтия, эстетика, ортопедия и профилактика.
    К каждой услуге — этапы, сроки, ориентир по стоимости и честные ограничения.</p>
  </div>
</section>

<section class="section tight" style="padding-top:0">
  <div class="wrap">
    <div class="svc-grid">
      ${SERVICES.map(s=>`
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
      <a class="svc svc-cta rv" href="#/konsultaciya" data-book style="background:var(--deep);border-color:var(--deep);color:#fff">
        <div class="svc-body" style="justify-content:center;gap:14px;padding:34px">
          <span class="serif" style="font-style:italic;font-size:1.5rem;line-height:1.3">Не знаете,<br>с чего начать?</span>
          <p style="color:rgba(255,255,255,.82);font-size:.97rem">Начните с консультации: осмотр, разбор ситуации и письменный план — 1 000 ₽.</p>
          <span class="btn btn-light btn-sm" style="margin-top:6px">Записаться ${ic('arrow')}</span>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="section sand">
  <div class="wrap">
    <div class="section-head rv"><span class="eyebrow">Прозрачность</span><h2>Почему в прайсе «от»</h2></div>
    <div class="two-col">
      <div class="rv"><p class="lead">Стоимость лечения зависит от того, сколько тканей поражено, сколько каналов в зубе,
      нужна ли временная конструкция и какой материал вы выберете.</p>
      <p class="lead" style="margin-top:14px">Поэтому честный прайс — это вилка. Точную сумму я называю после диагностики,
      письменно и по этапам, и дальше она не меняется без вашего согласия.</p>
      <div style="margin-top:22px"><a class="btn btn-ghost" href="#/ceny">Смотреть полный прайс ${ic('arrow')}</a></div></div>
      <div class="book-card rv">
        <h3 style="margin-bottom:6px">Не знаете, что нужно?</h3>
        <p style="font-size:.88rem;color:var(--ink-55);margin-bottom:18px">Начните с консультации — 1 000 ₽. По итогу будет понятно, что делать и в каком порядке.</p>
        <button class="btn btn-primary btn-block" data-book data-service="Просто консультация">Записаться на консультацию</button>
      </div>
    </div>
  </div>
</section>`;

/* ---------- page: service detail ---------- */
const servicePage = (slug) => {
  const s = bySlug(slug);
  if(!s) return notFound();
  const others = SERVICES.filter(x=>x.slug!==slug).slice(0,3);
  return `
<section class="wrap">
  <div class="crumbs" style="padding-top:26px"><a href="#/">Главная</a><span>/</span><a href="#/uslugi">Услуги</a><span>/</span>${s.title}</div>
</section>

<div class="wrap svc-hero">
  <div>
    <span class="eyebrow">${s.kicker}</span>
    <h1 style="font-size:clamp(1.95rem,4.2vw,3rem)">${s.h1}</h1>
    <p class="lead" style="margin-top:16px;max-width:52ch">${s.lead}</p>
    <div class="chips" style="margin-top:22px">
      ${s.meta.map(m=>`<span class="tag">${m}</span>`).join('')}
      <span class="tag">${s.duration}</span>
    </div>
    <div class="hero-actions" style="margin-top:26px;margin-bottom:0">
      <button class="btn btn-primary" data-book data-service="${s.title}">${ic('calendar')} Записаться</button>
      <a class="btn btn-ghost" href="${DOCTOR.phoneHref}">${ic('phone')} Позвонить</a>
    </div>
  </div>
  <div class="svc-hero-img"><img src="${s.img}" alt="${s.title}"></div>
</div>

<section class="section tight">
  <div class="wrap">
    <div class="svc-facts">
      <div class="info-box rv"><b>Кому подходит</b><p>${s.forWhom}</p></div>
      <div class="svc-facts-side">
        <div class="info-box rv"><b>Срок</b><p>${s.duration}</p></div>
        <div class="info-box rv"><b>Ориентир по цене</b><p>${s.price}. Итоговая стоимость — после диагностики, письменно.</p></div>
      </div>
    </div>
  </div>
</section>

<section class="section tight">
  <div class="wrap with-aside">
    <div>
      <div class="section-head rv" style="margin-bottom:26px"><span class="eyebrow">Этапы</span><h2>Как проходит лечение</h2></div>
      <div class="timeline rv">
        ${s.stages.map(st=>`<div class="tl"><div class="tl-n">${st.n}</div><div><b>${st.b}</b><p>${st.p}</p></div></div>`).join('')}
      </div>

      <div class="section-head rv" style="margin:44px 0 22px"><span class="eyebrow">Технологии</span><h2>Что используется</h2></div>
      <div class="info-grid rv">
        ${s.tech.map(t=>`<div class="info-box"><b>${t.b}</b><p>${t.p}</p></div>`).join('')}
      </div>

      ${s.science ? `
      <div class="section-head rv" style="margin:44px 0 22px"><span class="eyebrow">Наука</span><h2>${s.science.title}</h2></div>
      <div class="info-grid rv">
        ${s.science.items.map(t=>`<div class="info-box"><b>${t.b}</b><p>${t.p}</p></div>`).join('')}
      </div>
      <p class="form-note" style="margin-top:14px">${s.science.note}</p>
      ` : ''}

      <div class="section-head rv" style="margin:44px 0 18px"><span class="eyebrow">Стоимость</span><h2>Ориентир по ценам</h2></div>
      <div class="rv">
        ${s.priceRows.map(([n,v])=>`<div class="price-row"><span class="nm">${n}</span><span class="ln"></span><span class="vl">${v}</span></div>`).join('')}
        <p class="form-note" style="margin-top:14px">Цены ориентировочные. Полная смета — после диагностики, по этапам.</p>
      </div>

      <div class="two-col rv" style="margin-top:44px">
        <div>
          <span class="eyebrow">Ограничения</span>
          <h3 style="margin-bottom:10px">Что важно знать заранее</h3>
          <p style="font-size:.92rem;color:var(--ink-70);line-height:1.6">${s.limits}</p>
        </div>
        <div>
          <span class="eyebrow">После приёма</span>
          <h3 style="margin-bottom:10px">Рекомендации</h3>
          <p style="font-size:.92rem;color:var(--ink-70);line-height:1.6">${s.after}</p>
        </div>
      </div>

      <div class="section-head rv" style="margin:46px 0 8px"><span class="eyebrow">Вопросы</span><h2>Частые вопросы по услуге</h2></div>
      <div class="acc rv">
        ${s.faq.map(([q,a])=>accItem(q,a)).join('')}
      </div>
    </div>

    <aside class="aside">
      <div class="book-card rv">
        <h3 style="font-size:1.2rem;margin-bottom:6px">Записаться</h3>
        <p style="font-size:.85rem;color:var(--ink-55);margin-bottom:18px">${s.title} · ${s.duration}</p>
        ${bookFormHTML('aside')}
      </div>
      <div class="info-box rv" style="margin-top:14px">
        <b>Адрес</b>
        <p>${DOCTOR.address}<br>${DOCTOR.metro.join('<br>')}<br><br>${DOCTOR.hours}</p>
        <a class="link-arrow" href="${DOCTOR.map}" target="_blank" rel="noopener" style="margin-top:4px">Маршрут ${ic('arrow')}</a>
      </div>
    </aside>
  </div>
</section>

<section class="section tight">
  <div class="wrap">
    <div class="split-head"><div class="section-head" style="margin-bottom:0"><span class="eyebrow">Ещё</span><h2>Другие услуги</h2></div></div>
    <div class="svc-grid">
      ${others.map(o=>`
        <a class="svc rv" href="#/uslugi/${o.slug}">
          <div class="svc-body" style="gap:6px">
            <span class="svc-kicker">${o.kicker}</span>
            <h3 style="font-size:1.15rem">${o.title}</h3>
            <p>${o.short}</p>
            <div class="svc-meta"><span>${o.duration}</span><b>${o.price}</b></div>
          </div>
        </a>`).join('')}
    </div>
  </div>
</section>`;
};

/* ---------- page: before/after ---------- */
const casesPage = () => `
<section class="page-head">
  <div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a><span>/</span> До / после</div>
    <h1>Кейсы: до и после</h1>
    <p class="lead">Публикую только с письменного согласия пациентов. У каждого кейса — описание ситуации,
    что делали, сроки и ограничения. Без «идеальных улыбок» из стока.</p>
  </div>
</section>

<section class="section tight" style="padding-top:0">
  <div class="wrap">
    <div class="case-grid" style="grid-template-columns:1fr;gap:24px;max-width:none">
      ${CASES.map((c,i)=>`
        <article class="case case-wide rv">
          <div class="case-pair">
            <figure><img src="${c.before}" alt="${c.title} — до"><figcaption>до</figcaption></figure>
            <figure><img src="${c.after}" alt="${c.title} — после"><figcaption>после</figcaption></figure>
            <span class="split"></span>
          </div>
          <div class="case-body" style="display:flex;flex-direction:column;justify-content:center;padding:clamp(22px,3.4vw,38px)">
            <span class="svc-kicker" style="margin-bottom:10px">Кейс ${String(i+1).padStart(2,'0')}</span>
            <b style="font-size:1.3rem;margin-bottom:10px">${c.title}</b>
            <p style="font-size:.98rem">${c.desc}</p>
            <div class="case-tags" style="margin-top:16px">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}<span class="tag">${c.term}</span></div>
          </div>
        </article>`).join('')}
    </div>
    <p class="form-note" style="margin-top:18px">Кейсы публикуются с письменного согласия пациентов. Результат зависит от клинической ситуации;
    гарантии обсуждаются индивидуально до начала лечения.</p>
  </div>
</section>

<section class="section tight">
  <div class="wrap"><div class="cta-band rv">
    <div><h2>Хотите оценить свою ситуацию?</h2><p>На консультации покажу снимки и объясню, что реально сделать именно в вашем случае.</p></div>
    <div class="cta-actions">
      <button class="btn btn-light" data-book>${ic('calendar')} Записаться</button>
      <a class="btn btn-ghost" style="border-color:rgba(255,255,255,.3);color:#fff" href="${DOCTOR.phoneHref}">${DOCTOR.phone}</a>
    </div>
  </div></div>
</section>`;

/* ---------- page: first visit ---------- */
const firstVisitPage = () => `
<section class="page-head">
  <div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a><span>/</span> Первый визит</div>
    <h1>Первый визит: что будет</h1>
    <p class="lead">40–60 минут, из них лечение — ноль минут. Первый визит — это разговор, осмотр
    и письменный план. Решение о лечении вы принимаете потом и не здесь.</p>
  </div>
</section>

<section class="section tight" style="padding-top:0">
  <div class="wrap with-aside">
    <div>
      <div class="section-head rv" style="margin-bottom:26px"><span class="eyebrow">Пошагово</span><h2>Как всё пройдёт</h2></div>
      <div class="timeline rv">
        <div class="tl"><div class="tl-n">5 мин</div><div><b>Встреча</b><p>7 минут пешком от м. Проспект Вернадского. На ресепшн вас встретят и проводят; я выхожу сама. Ждать в коридоре не придется — приём идёт с запасом времени.</p></div></div>
        <div class="tl"><div class="tl-n">10 мин</div><div><b>Разговор</b><p>Что беспокоит, что уже делали, чего боитесь. Если страшно — скажите прямо: это нормально, и это меняет план. Тревожным пациентам первый визит могу провести вообще без инструментов.</p></div></div>
        <div class="tl"><div class="tl-n">15 мин</div><div><b>Осмотр</b><p>Все зубы, дёсны, прикус, старые пломбы. Снимки — только по показаниям, не «на всякий случай». Всё, что вижу, показываю вам на экране.</p></div></div>
        <div class="tl"><div class="tl-n">15 мин</div><div><b>План и смета</b><p>Что срочно, что можно отложить, что не нужно делать вовсе. Этапы, сроки и стоимость — письменно, с собой. План не «сгорает»: подумать можно хоть месяц.</p></div></div>
        <div class="tl"><div class="tl-n">0 мин</div><div><b>Лечения не будет</b><p>В первый визит я не лечу и не «срочно всё удаляю». Если что-то болит сейчас — обсудим, как помочь, но решение всегда за вами.</p></div></div>
      </div>

      <div class="pv-grid" style="margin-top:34px">
        <div class="pv-box rv"><b>Что взять с собой</b>
          <p>Снимки, если есть. Список лекарств, которые принимаете. Всё — больше ничего не нужно.</p></div>
        <div class="pv-box rv"><b>Сколько стоит</b>
          <p>1 000 ₽. Если начинаете лечение в течение месяца — консультация засчитывается в смету.</p></div>
        <div class="pv-box rv"><b>Чего не будет</b>
          <p>Никаких «у вас тут всё ужасно, надо срочно». Ни лечения без согласия, ни допродаж. Это принцип.</p></div>
      </div>

      <div class="section-head rv" style="margin:44px 0 8px"><span class="eyebrow">Частые страхи</span><h2>Спрашивают перед первым визитом</h2></div>
      <div class="acc rv">
        ${[
          ['Можно прийти просто познакомиться?','Да. Для тревожных пациентов это отдельный формат: посидеть в кресле, посмотреть кабинет, поговорить. Ничего не делаем, пока вы не скажете «готова/готов».'],
          ['А если я решу не лечиться?','Это нормальный исход. План остаётся у вас, обязательств никаких. Придёте через год — актуальность проверим по свежим снимкам.'],
          ['Мне в другой клинике сказали «удалять». Что делать?','Приносите снимки и план. Разберу, объясню, что вижу я. Если второй врач прав — скажу честно; если зуб спасается — предложу путь.']
        ].map(([q,a])=>accItem(q,a)).join('')}
      </div>
    </div>
    <aside class="aside">
      <div class="book-card rv">
        <h3 style="font-size:1.2rem;margin-bottom:6px">Записаться на первый визит</h3>
        <p style="font-size:.85rem;color:var(--ink-55);margin-bottom:18px">40–60 минут · 1 000 ₽ · без лечения</p>
        ${bookFormHTML('visit')}
      </div>
      <div class="info-box rv" style="margin-top:14px">
        <b>Адрес</b>
        <p>${DOCTOR.address}<br>${DOCTOR.metro.join('<br>')}<br><br>${DOCTOR.hours}</p>
        <a class="link-arrow" href="${DOCTOR.map}" target="_blank" rel="noopener" style="margin-top:4px">Маршрут ${ic('arrow')}</a>
      </div>
    </aside>
  </div>
</section>

<section class="section tight">
  <div class="wrap"><div class="cta-band rv">
    <div><h2>Проще один раз прийти, чем год откладывать</h2>
    <p>Первый визит — самый лёгкий шаг: разговора и плана достаточно, чтобы понять, что делать дальше.</p></div>
    <div class="cta-actions">
      <button class="btn btn-light" data-book data-service="Просто консультация">${ic('calendar')} Записаться</button>
      <a class="btn btn-ghost" style="border-color:rgba(255,255,255,.3);color:#fff" href="${DOCTOR.phoneHref}">${DOCTOR.phone}</a>
    </div>
  </div></div>
</section>`;

/* ---------- page: reviews ---------- */
const reviewsPage = () => `
<section class="page-head">
  <div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a><span>/</span> Отзывы</div>
    <h1>Отзывы пациентов</h1>
    <p class="lead">Отзывы о приёме живут на независимых площадках: их нельзя отредактировать или
    удалить — что написали пациенты, то и остаётся. Первый ещё не написан, и он может быть вашим.</p>
  </div>
</section>

<section class="section tight" style="padding-top:0">
  <div class="wrap">
    <div class="book-card rv">
      <div style="display:flex;gap:26px;flex-wrap:wrap;align-items:center">
        <div style="flex:1 1 380px">
          <h3 style="margin-bottom:8px">Были на приёме — расскажите другим</h3>
          <p style="font-size:.98rem;color:var(--ink-78);line-height:1.6">Ваш отзыв помогает
          следующему пациенту выбрать врача и помогает мне становиться лучше. Критику читаю так же
          внимательно, как благодарности.</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:22px">
            <a class="btn btn-primary" href="${DOCTOR.wa}" target="_blank" rel="noopener">${ic('wa')} Отзыв через WhatsApp</a>
            <a class="btn btn-ghost" href="${DOCTOR.prodoctorov}" target="_blank" rel="noopener">${ic('star')} Профиль на ПроДокторов ↗</a>
            <a class="btn btn-ghost" href="${DOCTOR.yandex}" target="_blank" rel="noopener">${ic('pin')} Клиника в Яндексе ↗</a>
          </div>
          <p class="form-note" style="margin-top:18px">Профиль врача на ПроДокторов: образование, стаж,
          категории — подтверждены площадкой по документам.</p>
        </div>
        <figure style="flex:0 0 150px;text-align:center;margin:0">
          <img src="assets/img/qr-otzyv-prodoctorov.png" alt="QR-код: профиль врача на ПроДокторов" style="width:150px;height:150px;border-radius:12px;border:1px solid var(--line-soft);display:block">
          <figcaption style="font-size:.78rem;color:var(--ink-55);margin-top:8px">Наведите камеру —<br>откроется профиль для отзыва</figcaption>
        </figure>
      </div>
    </div>
    <div class="two-col" style="margin-top:18px;gap:18px">
      <div class="info-box rv"><b>Читать отзывы</b><p>Отзывы о приёме — на ПроДокторов и в карточке
      клиники в Яндексе. Там же можно сравнить с другими врачами района.</p></div>
      <div class="info-box rv"><b>Что уже подтверждено</b><p>МГМСУ 1996, ординатура, повышение
      квалификации и высшая категория — сверены площадкой по документам.</p></div>
    </div>
    <div class="book-card rv" style="margin-top:18px">
      <h3 style="margin-bottom:8px">Ответ на критику</h3>
      <p style="font-size:.95rem;color:var(--ink-78);line-height:1.7;max-width:70ch">Если что-то пошло
      не так — напишите напрямую:
      <a href="${DOCTOR.wa}" target="_blank" rel="noopener" style="color:var(--accent);font-weight:600;text-decoration:underline;text-underline-offset:3px">WhatsApp</a> ·
      <a href="${DOCTOR.phoneHref}" style="color:var(--accent);font-weight:600;text-decoration:underline;text-underline-offset:3px">${DOCTOR.phone}</a> ·
      <a href="mailto:${DOCTOR.email}" style="color:var(--accent);font-weight:600;text-decoration:underline;text-underline-offset:3px">${DOCTOR.email}</a>.
      Разберу ситуацию и, если нужна коррекция, сделаю её. Отрицательные отзывы не удаляю и не прошу удалять.</p>
    </div>
  </div>
</section>`;

/* ---------- page: prices ---------- */
const pricesPage = () => `
<section class="page-head">
  <div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a><span>/</span> Цены</div>
    <h1>Цены на лечение</h1>
    <p class="lead">Вилки «от» — потому что стоимость зависит от клинической ситуации. Точная смета составляется
    письменно после диагностики и дальше не меняется без вашего согласия.</p>
  </div>
</section>

<section class="section tight" style="padding-top:0">
  <div class="wrap">
    <div class="two-col" style="gap:0 clamp(28px,4vw,56px)">
      ${PRICES.map(block=>`
        <div class="rv" style="margin-bottom:36px">
          <h3 style="margin-bottom:8px">${block.cat}</h3>
          ${block.rows.map(([n,v])=>`<div class="price-row"><span class="nm">${n}</span><span class="ln"></span><span class="vl">${v}</span></div>`).join('')}
        </div>`).join('')}
    </div>
    <div class="two-col" style="margin-top:14px">
      <div class="info-box rv"><b>Что входит в консультацию</b>
        <p>Осмотр всех зубов и дёсен, оценка прикуса и старых реставраций, снимки по показаниям,
        письменный план с этапами и сметой. 40–60 минут.</p></div>
      <div class="info-box rv"><b>Оплата и рассрочка</b>
        <p>Оплата по этапам: платите за фактически выполненный этап. Для больших планов можно разбить
        на 3–6 частей — обсуждаем индивидуально до начала лечения.</p></div>
    </div>
    <a class="std-strip rv" href="#/standarty">
      ${ic('book')}
      <div><b>Лечение по стандартам Минздрава</b><span>Перечень стандартов, на основании которых оказывается помощь, — с номерами приказов и датами.</span></div>
      ${ic('arrow')}
    </a>
    <p class="form-note" style="margin-top:18px">Информация не является публичной офертой. Указанные цены — ориентировочные,
    итоговая стоимость определяется после консультации и диагностики.</p>
  </div>
</section>

<section class="section tight">
  <div class="wrap"><div class="cta-band rv">
    <div><h2>Нужна точная смета?</h2><p>На консультации посчитаю стоимость по этапам именно для вашей ситуации — 1 000 ₽.</p></div>
    <div class="cta-actions">
      <button class="btn btn-light" data-book>${ic('calendar')} Записаться</button>
      <a class="btn btn-ghost" style="border-color:rgba(255,255,255,.3);color:#fff" href="${DOCTOR.phoneHref}">${DOCTOR.phone}</a>
    </div>
  </div></div>
</section>`;

/* ---------- page: faq ---------- */
const faqPage = () => `
<section class="page-head">
  <div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a><span>/</span> Вопросы и ответы</div>
    <h1>Вопросы и ответы</h1>
    <p class="lead">Вопросы, которые задают чаще всего, — включая неудобные. Если своего здесь нет — напишите, отвечу лично.</p>
  </div>
</section>

<section class="section tight" style="padding-top:0">
  <div class="wrap">
    <div class="two-col">
      <div class="acc rv">${FAQ.slice(0,7).map(([q,a])=>accItem(q,a)).join('')}</div>
      <div class="acc rv">${FAQ.slice(7).map(([q,a])=>accItem(q,a)).join('')}</div>
    </div>
    <div class="book-card rv" style="margin-top:28px">
      <h3 style="margin-bottom:6px">Не нашли свой вопрос?</h3>
      <p style="font-size:.9rem;color:var(--ink-55);margin-bottom:18px">Напишите в мессенджер — отвечу лично, обычно в течение дня.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <a class="btn btn-primary btn-sm" href="${DOCTOR.wa}" target="_blank" rel="noopener">${ic('wa')} WhatsApp</a>
        <a class="btn btn-ghost btn-sm" href="${DOCTOR.phoneHref}">${ic('phone')} Позвонить</a>
      </div>
    </div>
  </div>
</section>`;

/* ---------- page: standards ---------- */
const standardsPage = () => `
<section class="page-head">
  <div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a><span>/</span> Стандарты</div>
    <h1>Стандарты медицинской помощи</h1>
    <p class="lead">Приём и лечение строится на стандартах, утверждённых Минздравом. Для пациента это значит,
    что объём диагностики и лечения по каждому диагнозу определён приказом, а не «вкусом» клиники.</p>
  </div>
</section>

<section class="section tight" style="padding-top:0">
  <div class="wrap std-wrap">
    <div class="std-list rv">
      ${STANDARDS.map((s,i)=>`
        <div class="std-row">
          <span class="std-n serif">${String(i+1).padStart(2,'0')}</span>
          <div class="std-body">
            <b>${s.t}</b>
            ${s.o?`<span class="std-o">${s.o} · действует</span>`:''}
          </div>
        </div>`).join('')}
    </div>
    <p class="form-note" style="margin-top:16px">Перечень соответствует списку стандартов клиники «Моя Улыбка».
    Полные тексты приказов открыты в справочных системах — план лечения всегда можно сверить с текстом стандарта.</p>

    <div class="section-head rv" style="margin:46px 0 22px">
      <span class="eyebrow">На практике</span>
      <h2>Что это даёт пациенту</h2>
    </div>
    <div class="info-grid">
      <div class="info-box rv"><b>Понятный объём</b><p>По каждому диагнозу стандарт определяет, какая диагностика
      и лечение показаны. Я объясняю, что из стандарта относится именно к вашей ситуации.</p></div>
      <div class="info-box rv"><b>Проверяемость</b><p>Каждый пункт плана привязан к показаниям — можно взять смету,
      открыть текст приказа и убедиться, что назначение соответствует стандарту.</p></div>
      <div class="info-box rv"><b>Опора для второго мнения</b><p>Если решите посоветоваться с другим врачом,
      стандарт — общая рамка, с которой удобно сравнивать предложения разных клиник.</p></div>
    </div>
    <div class="std-strip rv">
      ${ic('book')}
      <div><b>Стандарт — не меню, а рамка</b><span>Он описывает необходимый минимум при диагнозе; материалы
      и методы подбираю под клиническую ситуацию и обсуждаю с вами до начала лечения.</span></div>
    </div>
  </div>
</section>

<section class="section tight">
  <div class="wrap"><div class="cta-band rv">
    <div><h2>Разберём вашу ситуацию по плану</h2><p>Осмотр, снимки по показаниям и письменная смета по этапам — с опорой на действующий стандарт.</p></div>
    <div class="cta-actions">
      <button class="btn btn-light" data-book>${ic('calendar')} Записаться</button>
      <a class="btn btn-ghost" style="border-color:rgba(255,255,255,.3);color:#fff" href="${DOCTOR.phoneHref}">${DOCTOR.phone}</a>
    </div>
  </div></div>
</section>`;
/* ---------- page: oral microbiota ---------- */
const MIKRO_AXES = [
  ['Сердце и сосуды','Обзор в Nature Reviews Cardiology и научное заявление Американской кардиологической ассоциации (2026) связывают заболевания пародонта с атеросклеротическими болезнями сердца и инсультом. Обсуждаемые механизмы — системное воспаление и влияние на стенку сосудов. Забота о дёснах при этом важна сама по себе — независимо от результатов дальнейших исследований.'],
  ['Мозг','Обзор в Neuropsychopharmacology описывает «орально-мозговую ось»: микробиоту рта обсуждают в связи с инсультом, болезнями Альцгеймера и Паркинсона. Для отдельных бактерий показаны экспериментальные механизмы; клиническое применение микробных маркеров — дело будущих работ.'],
  ['Лёгкие','Микроорганизмы ротоглотки способны попадать в дыхательные пути — этот путь обсуждается при пневмонии и ХОБЛ (обзор в Respiratory Medicine). Чистая полость рта — разумная часть профилактики, особенно в сезон простуд.'],
  ['Беременность','Систематический обзор 2026 года (24 исследования) изучал микробиоту рта у будущих мам и исходы беременностей. Надёжных маркеров прогноза наука пока выделила мало, поэтому главным остаётся прежнее: внимательный уход за зубами и дёснами во время беременности — ценность для мамы и малыша.'],
  ['Кишечник','Со слюной в кишечник ежедневно попадают оральные бактерии. Систематический обзор 2026 года (76 исследований) называет ось «рот — кишечник» биологически правдоподобной и обсуждает её роль при воспалительных заболеваниях кишечника. Забота о роте — вклад и в спокойствие кишечника.'],
  ['Диабет 2 типа','При диабете пародонтит встречается чаще и течёт тяжелее. В 6-месячном исследовании 2026 года у 42 пациентов лечение пародонта сопровождалось улучшением и клинических показателей дёсен, и маркеров обмена глюкозы. Работаем с дёснами — добавляем вклад в общее лечение.'],
  ['Онкология','Обзор 2020 года связывает пародонтит с повышенным риском ряда опухолей; бактерии P. gingivalis и F. nucleatum изучаются как участники воспалительных и опухолевых процессов. Оценки риска зависят от популяции — направление активно исследуется.'],
  ['Кожа','При атопическом дерматите у 172 пациентов исследователи обнаружили согласованные изменения микробиоты кожи и полости рта (Journal of Investigative Dermatology). Пока это ассоциация — ещё одно свидетельство того, что микробные сообщества тела связаны между собой.']
];

const mikrobiotaPage = () => `
<section class="page-head">
  <div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a><span>/</span> Полость рта и здоровье</div>
    <h1>Полость рта и здоровье организма</h1>
    <p class="lead">Во рту живёт собственное сообщество микроорганизмов — оральная микробиота.
    Международная наука всё активнее связывает её состояние со здоровьем сердца, мозга, лёгких
    и обмена веществ. Ниже — коротко и честно о том, что уже известно, и о том, что из этого
    практически полезно вам.</p>
  </div>
</section>

<section class="section tight" style="padding-top:0">
  <div class="wrap">
    <div class="two-col">
      <div class="rv">
        <span class="eyebrow">Знакомство</span>
        <h2 style="margin-bottom:18px">Рот — окно в микробный мир организма</h2>
        <p style="font-size:1.02rem;line-height:1.65;color:var(--ink-78);margin-bottom:12px">Полость рта — начало пищеварительного тракта
        и самая доступная для осмотра и ухода микробная экосистема тела. Пока баланс этого сообщества
        в порядке, зубы и дёсны спокойны. Когда баланс смещается — появляются налёт и камень,
        воспаляются дёсны, развивается кариес и появляется запах.</p>
        <p style="font-size:1.02rem;line-height:1.65;color:var(--ink-78)">Микроорганизмы полости рта перемещаются: со слюной —
        в желудочно-кишечный тракт, а при воспалении дёсен — в кровоток. Именно эти пути изучает наука,
        исследуя связи состояния рта с органами.</p>
      </div>
      <div class="info-box rv" style="align-self:center"><b>Почему я об этом рассказываю</b>
        <p>Гигиена и здоровье дёсен — самая понятная и управляемая часть микробиоты: её можно
        осмотреть, почистить и пролечить. Поэтому каждые полгода на приёме мы работаем не только
        с зубами — поддерживаем баланс всей системы.</p></div>
    </div>
  </div>
</section>

<section class="section sand">
  <div class="wrap">
    <div class="section-head rv"><span class="eyebrow">Исследования</span><h2>Восемь связей, которые изучает наука</h2>
    <p class="lead">Обзоры и клинические исследования 2019–2026 годов в международных журналах.
    Уровень доказательности разный: где-то накоплен массив эпидемиологии, где-то — отдельные работы.
    Это честная картина, без упрощений.</p></div>
    <div class="info-grid">
      ${MIKRO_AXES.map(([b,p])=>`<div class="info-box rv"><b>${b}</b><p>${p}</p></div>`).join('')}
    </div>
    <p class="form-note" style="margin-top:16px">Ссылки на первоисточники (PubMed, Nature и другие журналы)
    пришлю по запросу — вместе с переводом на простой язык.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head rv"><span class="eyebrow">Практика</span><h2>Что из этого следует для вас</h2>
    <p class="lead">Наука развивается, а разумные шаги доступны уже сегодня.</p></div>
    <div class="pv-grid">
      <div class="pv-box rv"><b>Гигиена раз в 6 месяцев</b>
        <p>Профессиональная чистка контролирует налёт и камень, а осмотр замечает воспаление
        до того, как оно почувствуется.</p></div>
      <div class="pv-box rv"><b>Домашний уход с доказательствами</b>
        <p>Щётка, правильная техника, ирригатор и паста под вашу ситуацию: в исследованиях
        это снижает воспаление и кровоточивость дёсен.</p></div>
      <div class="pv-box rv"><b>Свежее дыхание — решаемая задача</b>
        <p>Источник запаха чаще всего находится во рту: налёт, пародонтальные карманы, налёт
        на языке. Находим причину — действуем прицельно.</p></div>
    </div>
    <div style="margin-top:22px" class="rv">
      <button class="btn btn-primary" data-book data-service="Профессиональная гигиена">${ic('calendar')} Записаться на гигиену и осмотр</button>
    </div>
  </div>
</section>

<section class="section sand">
  <div class="wrap">
    <div class="section-head rv"><span class="eyebrow">Пробиотики</span><h2>Что показали исследования</h2>
    <p class="lead">Пробиотики обычно обсуждают применительно к кишечнику, но для полости рта
    накоплен собственный массив клинических данных: конкретные штаммы исследовали при запахе
    изо рта, кариесе, налёте, гингивите и периодонтите.</p></div>
    <div class="info-grid g2">
      <div class="info-box rv"><b>Свежее дыхание</b><p>Штамм S. salivarius K12: у 85% участников исследования
      (против 30% на плацебо) выраженно снижались летучие соединения, отвечающие за запах. Штамм
      Weissella cibaria CMU за 8 недель у 100 взрослых значимо снижал уровень сероводорода
      и метилмеркаптана.</p></div>
      <div class="info-box rv"><b>Спокойные дёсны</b><p>W. cibaria CMU (80 взрослых, 8 недель): меньше
      кровоточивость и доля патогенов. S. salivarius M18 (2025 год, 55 пациентов с периодонтитом
      III–IV стадии): после стандартной терапии — меньше глубина карманов и налёта.</p></div>
      <div class="info-box rv"><b>Меньше налёта</b><p>K12 за 4 недели снижал накопление зубного налёта,
      эффект сохранялся ещё 2 недели. L. rhamnosus LB21 (15 месяцев, 160 человек 58–84 лет): начальные
      корневые поражения чаще демонстрировали обратное развитие — реминерализацию.</p></div>
      <div class="info-box rv"><b>Главный принцип</b><p>Работает конкретный штамм при конкретном состоянии
      и в конкретной форме — слова «пробиотик» на упаковке недостаточно. Препарат, форму и длительность
      курса подбираем вместе на приёме, в паре с лечением и гигиеной.</p></div>
    </div>
    <p class="form-note" style="margin-top:16px">Оральные пробиотики — дополнение к стандартному лечению
    и уходу, усиление результата. Данные: клинические исследования, опубликованные в PubMed.</p>
  </div>
</section>

<section class="section tight">
  <div class="wrap">
    <a class="std-strip rv" href="#/uslugi/gigiena">
      ${ic('tooth')}
      <div><b>Профессиональная гигиена — отправная точка</b><span>60–90 минут: ультразвук, Air Flow,
      полировка и уход, подобранный под вашу ситуацию. От 6 500 ₽.</span></div>
      ${ic('arrow')}
    </a>
    <p class="form-note" style="margin-top:16px">Страница основана на обзорах и клинических исследованиях
    2019–2026 годов из международных журналов (PubMed, Nature). Материалы носят информационный характер;
    план ухода и лечения составляется на очной консультации.</p>
  </div>
</section>

<section class="section tight">
  <div class="wrap"><div class="cta-band rv">
    <div><h2>Здоровье рта — часть здоровья организма</h2>
    <p>Начните с осмотра и гигиены: увидим вашу ситуацию целиком и составим план — письменно
    и по этапам.</p></div>
    <div class="cta-actions">
      <button class="btn btn-light" data-book>${ic('calendar')} Записаться</button>
      <a class="btn btn-ghost" style="border-color:rgba(255,255,255,.3);color:#fff" href="${DOCTOR.phoneHref}">${DOCTOR.phone}</a>
    </div>
  </div></div>
</section>`;

const contactsPage = () => `
<section class="page-head">
  <div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a><span>/</span> Контакты</div>
    <h1>Контакты и запись</h1>
    <p class="lead">Клиника «Моя Улыбка»: Москва, ул. Удальцова, 5, корп. 1. Ежедневно с 10:00 до 22:00.</p>
  </div>
</section>

<section class="section tight" style="padding-top:0">
  <div class="wrap with-aside">
    <div>
      <div class="info-grid">
        <div class="info-box"><b>Адрес</b><p>${DOCTOR.address}<br><br>${DOCTOR.metro.join('<br>')}</p></div>
        <div class="info-box"><b>Часы приёма</b><p>${DOCTOR.hours}<br><br>Вечерние слоты — самые востребованные, лучше записываться заранее.</p></div>
        <div class="info-box"><b>Телефон</b><p><a href="${DOCTOR.phoneHref}" style="font-weight:700;color:var(--ink)">${DOCTOR.phone}</a><br><br>Звонки и сообщения в рабочее время.</p></div>
        <div class="info-box"><b>Мессенджеры</b><p><a href="${DOCTOR.wa}" target="_blank" rel="noopener">WhatsApp</a><br><br>При острой боли напишите «срочно» — постараюсь найти окно в тот же день.</p></div>
        <div class="info-box"><b>Клиника</b><p>${DOCTOR.clinicFull}<br><a class="lic-link" href="${DOCTOR.licenseHref}" target="_blank" rel="noopener">${DOCTOR.license} ↗</a></p></div>
        <div class="info-box"><b>Почта</b><p><a href="mailto:${DOCTOR.email}" style="font-weight:600;color:var(--ink)">${DOCTOR.email}</a><br><br>Для документов и письменных обращений.</p></div>
      </div>
      <div class="clinic-gal rv">
        <figure><img src="assets/img/clinic/reseption.webp" alt="Ресепшн клиники «Моя Улыбка»"><figcaption>ресепшн</figcaption></figure>
        <figure><img src="assets/img/clinic/kabinet-2.webp" alt="Стоматологический кабинет с микроскопом"><figcaption>кабинет с микроскопом</figcaption></figure>
        <figure><img src="assets/img/clinic/kt.webp" alt="КЛКТ-томограф в клинике"><figcaption>КЛКТ-томограф</figcaption></figure>
        <figure><img src="assets/img/clinic/kabinet-3.webp" alt="Терапевтический кабинет клиники"><figcaption>терапевтический кабинет</figcaption></figure>
        <figure><img src="assets/img/clinic/skaner.webp" alt="Интраоральный 3D-сканер"><figcaption>3D-сканер</figcaption></figure>
        <figure><img src="assets/img/clinic/hall.webp" alt="Холл клиники со стендом документов"><figcaption>холл</figcaption></figure>
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:18px">
        <a class="btn btn-ghost btn-sm" href="${DOCTOR.yandex}" target="_blank" rel="noopener">Открыть Яндекс Профиль клиники ↗</a>
      </div>
      <div class="rv" style="margin-top:22px">
        <h3 style="margin-bottom:10px">Как добраться</h3>
        <div class="timeline" style="margin-top:14px">
          <div class="tl"><div class="tl-n">7 мин</div><div><b>м. Проспект Вернадского</b><p>Выход к ул. Удальцова, далее прямо до дома 5, корп. 1.</p></div></div>
          <div class="tl"><div class="tl-n">12 мин</div><div><b>м. Новаторская</b><p>По ул. Удальцова в сторону Проспекта Вернадского.</p></div></div>
          <div class="tl"><div class="tl-n">авто</div><div><b>На машине</b><p>Парковка у дома, въезд со стороны двора.</p></div></div>
        </div>
      </div>
    </div>
    <aside class="aside">
      <div class="book-card rv">
        <h3 style="font-size:1.2rem;margin-bottom:6px">Записаться</h3>
        <p style="font-size:.85rem;color:var(--ink-55);margin-bottom:18px">Отвечу в течение рабочего дня.</p>
        ${bookFormHTML('contacts')}
      </div>
    </aside>
  </div>
</section>`;

/* ---------- legal ---------- */
const LEGAL = {
  politika: {
    crumb: 'Политика конфиденциальности',
    title: 'Политика конфиденциальности',
    lead: 'Документ описывает порядок обработки данных посетителей сайта. Действует с даты публикации.',
    items: [
      ['1. Общие положения','Настоящая политика описывает порядок обработки персональных данных посетителей сайта врача-стоматолога Семёновой Е.В. Оператор обрабатывает данные в соответствии с ФЗ-152 «О персональных данных».'],
      ['2. Какие данные собираются','Имя, номер телефона, адрес электронной почты, содержание сообщения — только те данные, которые вы указываете добровольно в форме записи или в переписке.'],
      ['3. Цели обработки','Связь для согласования времени приёма, консультирование по услугам, напоминание о визите. Данные не используются для рекламы третьих лиц.'],
      ['4. Передача третьим лицам','Данные не передаются третьим лицам, за исключением случаев, предусмотренных законом. Аналитические сервисы (Яндекс Метрика) собирают обезличенную статистику.'],
      ['5. Сроки хранения','До отзыва согласия либо до достижения цели обработки. Отозвать согласие можно письменным обращением.'],
      ['6. Права посетителя','Запросить сведения об обработке, потребовать уточнения или удаления данных, отозвать согласие.'],
      ['7. Cookies','Сайт использует cookies для корректной работы интерфейса и обезличенной аналитики. Их можно отключить в настройках браузера.']
    ]
  },
  pravila: {
    crumb: 'Правила обработки персональных данных',
    title: 'Правила обработки персональных данных',
    lead: 'Правила дополняют политику конфиденциальности и описывают, что именно происходит с данными при записи на приём.',
    items: [
      ['Состав данных','Имя, номер телефона, содержание сообщения, удобное время визита — только те данные, которые вы сообщаете сами в форме записи или в переписке.'],
      ['Цели обработки','Связь для согласования приёма, напоминание о визите, ответы на вопросы по лечению. Данные не используются для рекламы третьих лиц.'],
      ['Действия с данными','Сбор, запись, систематизация, хранение, уточнение, использование и удаление — как с использованием средств автоматизации, так и без них.'],
      ['Передача третьим лицам','Не передаются, кроме случаев, предусмотренных законом. Аналитика сайта (Яндекс Метрика) собирает обезличенную статистику.'],
      ['Срок и отзыв','Данные хранятся до достижения цели обработки или до отзыва согласия. Отзыв — в свободной форме на почту improdent@mail.ru или по телефону клиники.'],
      ['Подтверждение','Отмечая чекбокс в форме записи, вы подтверждаете, что ознакомлены с этими правилами и <a href="#/politika" style="text-decoration:underline">политикой конфиденциальности</a>.']
    ]
  },
  pravovaya: {
    crumb: 'Правовая информация',
    title: 'Правовая информация',
    lead: 'Реквизиты медицинской организации, лицензия, контролирующие органы и нормативная база.',
    items: [
      ['Медицинская организация','Услуги оказывает Центр эстетической стоматологии «Моя Улыбка» (ООО «ИмпроДент»): Москва, ул. Удальцова, 5, корп. 1. Телефон +7 (903) 770-37-73, почта improdent@mail.ru. Ежедневно 10:00–22:00.'],
      ['Лицензия','Лицензия ЛО-77-41-004821 от 11.04.2012 на осуществление медицинской деятельности. <a href="https://stomatologiyamoyaulybka.msk.ru/wp-content/uploads/2019/12/licens.png" target="_blank" rel="noopener" style="text-decoration:underline">Скан лицензии — по ссылке</a>.'],
      ['Жалобы и предложения','Все жалобы лично рассматривает главврач клиники. Написать можно на почту improdent@mail.ru, передать администратору на ресепшн или изложить в форме на сайте.'],
      ['Контролирующие органы','Органы, осуществляющие надзор в сфере охраны здоровья:', [
        'Росздравнадзор — Москва, Славянская площадь, 4, стр. 1; +7 (495) 698-45-38',
        'Роспотребнадзор по г. Москве — Графский переулок, 4/9; +7 (495) 687-40-35',
        'Департамент здравоохранения г. Москвы — Оружейный переулок, 43; +7 (495) 777-77-77',
        'Министерство здравоохранения РФ — Рахмановский переулок, 3; +7 (495) 628-44-53'
      ]],
      ['Нормативная база','Отношения с пациентами регулируют, в частности:', [
        'ФЗ № 323-ФЗ «Об основах охраны здоровья граждан в Российской Федерации»',
        'Закон РФ «О защите прав потребителей»',
        'ФЗ № 152-ФЗ «О персональных данных»',
        'Правила предоставления медицинскими организациями платных медицинских услуг (Постановление Правительства РФ)'
      ]],
      ['Важно','Материалы сайта носят информационный характер и не являются медицинскими рекомендациями. Постановка диагноза и назначение лечения возможны только после очной консультации врача. Имеются противопоказания, необходима консультация специалиста.']
    ]
  },
  garantii: {
    crumb: 'Государственные гарантии',
    title: 'Государственные гарантии',
    lead: 'Как устроена бесплатная медицинская помощь по программам госгарантий и в каких случаях она доступна.',
    items: [
      ['Право на бесплатную помощь','Согласно ч. 1 ст. 41 Конституции РФ и ст. 19 ФЗ № 323-ФЗ «Об основах охраны здоровья граждан», каждый имеет право на бесплатную медицинскую помощь по программе государственных гарантий. Программа ежегодно утверждается Правительством РФ и определяет виды, формы и сроки оказания бесплатной помощи.'],
      ['Как это устроено у нас','Клиника «Моя Улыбка» (ООО «ИмпроДент») не участвует в территориальных программах государственных гарантий и не оказывает плановую и неотложную медицинскую помощь на бесплатной основе. Все услуги предоставляются на платной основе по договору.'],
      ['Если нужна помощь по ОМС','Ближайшие к Удальцова, 5к1 медицинские организации, участвующие в программе госгарантий:', [
        'Стоматологическая поликлиника № 2 — ул. Удальцова, 8',
        'Поликлиника № 1 Минобрнауки России — Фролов переулок, 1, стр. 2'
      ]],
      ['Территориальная программа','Условия бесплатной помощи в Москве — <a href="https://mosgorzdrav.ru/ru-RU/targets/default/card/25.html" target="_blank" rel="noopener" style="text-decoration:underline">территориальная программа госгарантий на сайте ДЗМ</a>.'],
      ['Платные услуги','Оказываются за счёт личных средств граждан, средств работодателей и иных источников на основании договора. Объём может соответствовать стандарту медицинской помощи либо состоять из отдельных консультаций и вмешательств.']
    ]
  }
};

const legalPage = (kind) => {
  const L = LEGAL[kind] || LEGAL.politika;
  return `
<section class="page-head">
  <div class="wrap">
    <div class="crumbs"><a href="#/">Главная</a><span>/</span> ${L.crumb}</div>
    <h1>${L.title}</h1>
    <p class="lead">${L.lead}</p>
  </div>
</section>
<section class="section tight" style="padding-top:0">
  <div class="wrap" style="max-width:760px">
    ${L.items.map(([h,p,list],i)=>`
      <div class="rv" style="padding:20px 0;border-bottom:1px solid var(--line-soft);${i===0?'border-top:1px solid var(--line-soft)':''}">
        <h3 style="margin-bottom:8px;font-size:1.05rem">${h}</h3>
        <p style="font-size:.92rem;color:var(--ink-70);line-height:1.65">${p}</p>
        ${list?`<ul class="legal-list">${list.map(li=>`<li>${li}</li>`).join('')}</ul>`:''}
      </div>`).join('')}
    <p class="form-note" style="margin-top:20px">Документ носит информационный характер. Перед публикацией сайта текст согласовывается с юристом с учётом фактических процессов обработки данных.</p>
  </div>
</section>`;
};

const notFound = () => `
<section class="section" style="text-align:center">
  <div class="wrap">
    <span class="eyebrow" style="justify-content:center">404</span>
    <h1 style="margin-bottom:14px">Страница не найдена</h1>
    <p class="lead" style="margin:0 auto 26px;max-width:44ch">Возможно, ссылка устарела. Начните с главной или раздела услуг.</p>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <a class="btn btn-primary" href="#/">На главную</a>
      <a class="btn btn-ghost" href="#/uslugi">Услуги</a>
    </div>
  </div>
</section>`;
