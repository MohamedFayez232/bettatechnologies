const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const languageButton = document.querySelector('.language-button');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const translations = {
  ar: ['من نحن','خدماتنا','آخر أعمالنا','ابدأ مشروعك','نحوّل الأفكار الطموحة<br>إلى <span>تطبيقات مؤثرة.</span>','نصمّم ونطوّر تطبيقات موبايل وحلولًا برمجية مخصصة، سريعة وسهلة الاستخدام ومبنية لتدفع مشروعك للأمام.','ابدأ فكرتك الآن <span>←</span>','شاهد أعمالنا','من نحن','شريكك التقني من الفكرة<br>إلى إطلاق ناجح.','في Betta Technologies نؤمن أن كل فكرة تستحق تنفيذًا ذكيًا. لذلك نجمع بين التصميم الجميل، الأداء الموثوق، وفهم احتياجات عملك لنقدّم تجربة رقمية يحبها عملاؤك.','ماذا نقدم','خدمات مصمّمة لنمو أعمالك.','آخر أعمالنا','تطبيقات نفخر بها.','نماذج من التطبيقات التي طوّرناها ونشرت على Google Play.','لديك فكرة؟','لنصنع شيئًا مميزًا<br>معًا.','أخبرنا عن مشروعك، وسنساعدك على وضع أول خطوة في طريقه.','تواصل معنا <span>←</span>'],
  en: ['About us','Services','Our work','Start your project','We turn ambitious ideas<br>into <span>impactful apps.</span>','We design and build mobile apps and custom software that are fast, effortless to use, and built to move your business forward.','Start your idea <span>→</span>','See our work','About us','Your tech partner from idea<br>to a successful launch.','At Betta Technologies, we bring together beautiful design, reliable performance, and a clear understanding of your business to create digital experiences customers love.','What we do','Services designed for your growth.','Our latest work','Apps we are proud of.','A selection of apps we developed and published on Google Play.','Have an idea?','Let’s build something remarkable<br>together.','Tell us about your project, and we will help you take its first step.','Contact us <span>→</span>']
};

const translationTargets = [
  '.nav-links a:nth-child(1)', '.nav-links a:nth-child(2)', '.nav-links a:nth-child(3)', '.nav-links a:nth-child(4)',
  '.hero h1', '.hero-text', '.hero-actions a:first-child', '.hero-actions a:last-child', '.section-label', '.about h2',
  '.about-copy p', '.services-section .eyebrow', '.services-section h2', '.work .eyebrow', '.work h2', '.work-heading > p',
  '.cta .eyebrow', '.cta h2', '.cta > p:not(.eyebrow)', '.cta .button'
];

languageButton.addEventListener('click', () => {
  const language = document.documentElement.lang === 'ar' ? 'en' : 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  translationTargets.forEach((selector, index) => {
    document.querySelector(selector).innerHTML = translations[language][index];
  });
  languageButton.textContent = language === 'ar' ? 'English' : 'العربية';
});
