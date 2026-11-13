/* ---------- app: router + interactions ---------- */
const routes = [
  [/^\/$/, homePage, 'Главная'],
  [/^\/o-vrache$/, aboutPage, 'О враче'],
  [/^\/pervyj-vizit$/, firstVisitPage, 'Первый визит'],
  [/^\/uslugi$/, servicesPage, 'Услуги'],
  [/^\/uslugi\/([\w-]+)$/, (m) => servicePage(m[1]), 'Услуга'],
  [/^\/do-posle$/, casesPage, 'До / после'],
  [/^\/otzyvy$/, reviewsPage, 'Отзывы'],
  [/^\/ceny$/, pricesPage, 'Цены'],
  [/^\/standarty$/, standardsPage, 'Стандарты'],
  [/^\/faq$/, faqPage, 'Вопросы'],
  [/^\/kontakty$/, contactsPage, 'Контакты'],
  [/^\/politika$/, () => legalPage('politika'), 'Политика'],
  [/^\/pravila$/, () => legalPage('pravila'), 'Правила'],
  [/^\/soglasie$/, () => legalPage('pravila'), 'Правила'],
  [/^\/pravovaya$/, () => legalPage('pravovaya'), 'Правовая информация'],
  [/^\/garantii$/, () => legalPage('garantii'), 'Госгарантии']
];

const metaFor = {
  '/': ['Стоматолог в Москве — Семёнова Елена Вячеславовна','Стоматолог-терапевт и ортопед высшей категории, стаж более 30 лет. Гигиена и отбеливание (ZOOM, Klox), лечение кариеса, эндодонтия, реставрация и микропротезирование. Письменный план. Удальцова 5к1, ежедневно 10:00–22:00.'],
  '/o-vrache': ['О враче — стоматолог Семёнова Е.В., Москва','Врач высшей категории. МГМСУ им. Евдокимова, 1996. Специализация: гигиена, отбеливание ZOOM и Klox, эндодонтия, реставрация, микропротезирование.'],
  '/pervyj-vizit': ['Первый визит к стоматологу — что будет на приёме','40–60 минут без лечения: разговор, осмотр, снимки по показаниям и письменный план со сметой. Что взять с собой, сколько стоит, чего на первом визите не будет.'],
  '/uslugi': ['Услуги стоматолога в Москве — цены и этапы','Лечение зубов, каналы, реставрация, коронки, виниры, протезирование, гигиена, лечение дёсен. Этапы, сроки и ориентиры по цене.'],
  '/do-posle': ['До и после — кейсы стоматолога в Москве','Реальные клинические кейсы с согласия пациентов: реставрация, эндодонтия, ортопедия. Описание ситуации и сроки.'],
  '/otzyvy': ['Отзывы о приёме — стоматолог Семёнова Е.В.','Отзывы о приёме публикуются только на независимых площадках: ПроДокторов и Яндекс Карты. Профиль врача подтверждён площадкой по документам.'],
  '/ceny': ['Цены на лечение зубов в Москве — прайс','Прайс-лист: консультация, терапия, эндодонтия, ортопедия, гигиена. Вилка цен и что входит в консультацию.'],
  '/faq': ['Вопросы и ответы — стоматолог в Москве','Запись, стоимость, страх лечения, гарантии, рассрочка, как добраться. Честные ответы на частые вопросы.'],
  '/standarty': ['Стандарты медицинской помощи — стоматолог Семёнова Е.В.','Перечень стандартов Минздрава, на основании которых оказывается помощь: кариес, гингивит, адентия. Номера приказов и что это даёт пациенту.'],
  '/politika': ['Политика конфиденциальности — Семёнова Е.В.','Порядок обработки и защиты персональных данных посетителей сайта врача-стоматолога.'],
  '/pravila': ['Правила обработки персональных данных — Семёнова Е.В.','Состав данных при записи на приём, цели, сроки хранения и порядок отзыва согласия.'],
  '/soglasie': ['Правила обработки персональных данных — Семёнова Е.В.','Состав данных при записи на приём, цели, сроки хранения и порядок отзыва согласия.'],
  '/pravovaya': ['Правовая информация — клиника «Моя Улыбка»','Реквизиты медицинской организации, лицензия ЛО-77-41-004821, контролирующие органы и нормативная база.'],
  '/garantii': ['Государственные гарантии — клиника «Моя Улыбка»','Программы госгарантий и ОМС: право на бесплатную помощь и условия платного оказания услуг в клинике.'],
  '/kontakty': ['Контакты — Москва, ул. Удальцова 5к1','Клиника «Моя Улыбка»: адрес, часы приёма ежедневно 10:00–22:00, метро Проспект Вернадского и Новаторская, запись на приём.']
};

function setMeta(path, title){
  const key = path.replace(/\/[\w-]+$/, '') === '/uslugi' && path !== '/uslugi' ? '/uslugi' : path;
  let m = metaFor[path];
  if(!m && path.startsWith('/uslugi/')){
    const s = bySlug(path.split('/')[2]);
    if(s) m = [s.h1 + ' — Семёнова Е.В.', s.short + ' Приём в Москве, Удальцова 5к1, ежедневно 10:00–22:00.'];
  }
  if(!m){
    m = [title ? title + ' — Семёнова Е.В., стоматолог в Москве' : 'Стоматолог в Москве — Семёнова Елена Вячеславовна',
         'Врач-стоматолог терапевт и ортопед. Москва, ул. Удальцова 5к1, ежедневно 10:00–22:00.'];
  }
  document.title = m[0];
  const d = document.querySelector('meta[name="description"]');
  if(d) d.setAttribute('content', m[1]);
}

function render(){
  const raw = location.hash.replace(/^#/, '') || '/';
  const path = raw.split('?')[0];
  let page = null, title = '';
  for(const [re, fn, t] of routes){
    const m = path.match(re);
    if(m){ page = fn(m); title = t; break; }
  }
  if(!page){ page = notFound(); title = 'Страница не найдена'; }

  const app = $('#app');
  app.innerHTML = page;
  setMeta(path, title);
  window.scrollTo(0, 0);
  syncNav(path);
  initReveal();
  initAcc();
  bindForms();
  document.body.classList.remove('no-scroll');
  $('#mobileMenu').classList.remove('is-open');
}

function syncNav(path){
  $$('#mainNav a').forEach(a=>{
    const h = a.getAttribute('href').replace('#','');
    const active = h === path || (h === '/uslugi' && path.startsWith('/uslugi'));
    a.classList.toggle('is-active', active);
  });
}

function initReveal(){
  const els = $$('.rv');
  if(!('IntersectionObserver' in window)){ els.forEach(e=>e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){
        const el = e.target;
        const delay = [...el.parentElement.children].indexOf(el) % 4 * 60;
        setTimeout(()=>el.classList.add('in'), delay);
        io.unobserve(el);
      }
    });
  }, {rootMargin:'0px 0px -8% 0px', threshold:.12});
  els.forEach(e=>io.observe(e));
}

function initAcc(){
  $$('.acc-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = btn.closest('.acc-item');
      const panel = item.querySelector('.acc-panel');
      const open = item.classList.contains('is-open');
      if(open){
        panel.style.maxHeight = '0px';
        item.classList.remove('is-open');
      } else {
        item.classList.add('is-open');
        panel.style.maxHeight = panel.scrollHeight + 40 + 'px';
      }
    });
  });
}

/* booking modal */
function openModal(service){
  const m = $('#bookModal');
  m.classList.add('is-open');
  m.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
  if(service){
    const sel = m.querySelector('select[name="service"]');
    if(sel){
      [...sel.options].forEach(o=>{ if(o.text.includes(service)) sel.value = o.text; });
    }
  }
  setTimeout(()=>m.querySelector('input[name="name"]')?.focus(), 260);
}
function closeModal(){
  const m = $('#bookModal');
  m.classList.remove('is-open');
  m.setAttribute('aria-hidden','true');
  document.body.classList.remove('no-scroll');
}

/* video modal */
function openVideo(){
  const m = $('#videoModal');
  if(!m) return;
  m.classList.add('is-open');
  m.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
}
function closeVideo(){
  const m = $('#videoModal');
  if(!m) return;
  m.classList.remove('is-open');
  m.setAttribute('aria-hidden','true');
  const v = m.querySelector('video');
  if(v) v.pause();
  document.body.classList.remove('no-scroll');
}

/* theme demo toggle (медь/золото) */
function initThemeDemo(){
  const saved = localStorage.getItem('theme-demo');
  if(saved === 'copper') document.documentElement.dataset.theme = 'copper';
  const btn = document.createElement('button');
  btn.className = 'theme-demo';
  btn.setAttribute('aria-label', 'Переключить акцент сайта: медь / золото (демо)');
  btn.title = 'Акцент: медь / золото (демо, для выбора владельцем)';
  btn.innerHTML = '<span class="sw"></span>';
  const paint = ()=>{
    const copper = document.documentElement.dataset.theme === 'copper';
    btn.querySelector('.sw').style.background = copper ? '#C79A3E' : '#B26A43';
  };
  btn.addEventListener('click', ()=>{
    const copper = document.documentElement.dataset.theme === 'copper';
    if(copper){ delete document.documentElement.dataset.theme; localStorage.setItem('theme-demo','gold'); }
    else { document.documentElement.dataset.theme = 'copper'; localStorage.setItem('theme-demo','copper'); }
    paint();
  });
  document.body.appendChild(btn);
  paint();
}

function bindForms(){
  $$('.book-form').forEach(form=>{
    if(form.dataset.bound) return;
    form.dataset.bound = '1';
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const phone = form.querySelector('input[name="phone"]');
      const name = form.querySelector('input[name="name"]');
      const cb = form.querySelector('input[type="checkbox"]');
      let bad = false;
      [name, phone].forEach(f=>{
        f.style.borderColor = '';
        if(!f.value.trim()){ f.style.borderColor = '#D46A5A'; bad = true; }
      });
      if(phone.value.replace(/\D/g,'').length < 10){
        phone.style.borderColor = '#D46A5A'; bad = true;
      }
      if(cb && !cb.checked){ bad = true; cb.parentElement.style.color = '#B4523F'; }
      if(bad) return;
      form.querySelector('.btn[type="submit"]').textContent = 'Отправлено';
      form.querySelector('.btn[type="submit"]').style.background = '#1D6B5E';
      form.querySelector('[data-ok]')?.classList.add('is-on');
      setTimeout(()=>{ if($('#bookModal').classList.contains('is-open')) closeModal(); }, 2400);
    });
    const phone = form.querySelector('input[name="phone"]');
    phone?.addEventListener('input', ()=>{
      let v = phone.value.replace(/\D/g,'').slice(0,11);
      if(v.startsWith('8')) v = '7' + v.slice(1);
      if(!v) { phone.value = ''; return; }
      if(v[0] !== '7') v = '7' + v;
      let out = '+7';
      if(v.length > 1) out += ' (' + v.slice(1,4);
      if(v.length >= 4) out += ') ' + v.slice(4,7);
      if(v.length >= 7) out += '-' + v.slice(7,9);
      if(v.length >= 9) out += '-' + v.slice(9,11);
      phone.value = out;
    });
  });
}

/* boot */
document.addEventListener('DOMContentLoaded', ()=>{
  $('#app').insertAdjacentHTML('beforebegin', headerHTML());
  $('#app').insertAdjacentHTML('afterend', footerHTML() + modalHTML());

  const header = $('#header');
  const onScroll = ()=> header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  $('#burger').addEventListener('click', ()=>{
    $('#mobileMenu').classList.add('is-open');
    document.body.classList.add('no-scroll');
  });
  $('#mmClose').addEventListener('click', ()=>{
    $('#mobileMenu').classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });

  document.addEventListener('click', (e)=>{
    const b = e.target.closest('[data-book]');
    if(b){ e.preventDefault(); openModal(b.dataset.service); }
    if(e.target.closest('#modalClose')) closeModal();
    if(e.target.id === 'bookModal') closeModal();
    if(e.target.closest('[data-video]')){ e.preventDefault(); openVideo(); }
    if(e.target.closest('#videoClose')) closeVideo();
    if(e.target.id === 'videoModal') closeVideo();
  });
  document.addEventListener('keydown', e=>{
    if(e.key === 'Escape'){
      closeModal(); closeVideo();
      $('#mobileMenu').classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  });

  window.addEventListener('hashchange', render);
  render();
  bindForms();
  initThemeDemo();
});
