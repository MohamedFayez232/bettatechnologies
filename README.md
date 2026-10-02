const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const languageButton = document.querySelector('.language-button');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const yearNode = document.querySelector('#year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const translations = {
  ar: {
    navAbout: 'من نحن',
    navServices: 'خدماتنا',
    navWork: 'آخر أعمالنا',
    navCta: 'ابدأ مشروعك',
    heroTitle: 'نحوّل الأفكار الطموحة<br><span>إلى تطبيقات مؤثرة.</span>',
    heroText: 'نصنع تجارب رقمية ذكية تحوّل أفكارك إلى تطبيقات قوية، سهلة الاستخدام، وجاهزة للنمو مع مشروعك.',
    heroCta: 'ابدأ فكرتك الآن',
    heroSecondary: 'شاهد أعمالنا',
    stat1: 'تطبيقًا تم تطويره',
    stat2: 'عميل يثق بنا',
    stat3: 'دعم ومتابعة',
    aboutTitle: 'شريكك التقني من الفكرة إلى نجاح ملموس.',
    aboutText: 'في Betta Technologies نساعد الشركات ورواد الأعمال على تحويل الأفكار إلى تجارب رقمية تنمو وتحقق أثرًا حقيقيًا. نعمل معك من أول فكرة حتى الإطلاق والمراجعة اللاحقة، مع تركيز كامل على الجودة والوضوح والنتائج.',
    servicesHeading: 'خدمات مصمّمة لنمو أعمالك.',
    portfolioHeading: 'تطبيقات نفخر بها.',
    contactHeading: 'لنصنع شيئًا مميزًا<br>معًا.',
    contactText: 'أخبرنا عن فكرتك، ودعنا نحولها إلى تجربة رقمية ناجحة.',
    contactButton: 'ابدأ محادثتك الآن'
  },
  en: {
    navAbout: 'About us',
    navServices: 'Services',
    navWork: 'Our work',
    navCta: 'Start your project',
    heroTitle: 'We turn bold ideas<br><span>into impactful apps.</span>',
    heroText: 'We design smart digital experiences that transform your ideas into powerful, easy-to-use apps ready to grow with your business.',
    heroCta: 'Start your idea',
    heroSecondary: 'View our work',
    stat1: 'Apps built',
    stat2: 'Clients trust us',
    stat3: 'Support & follow-up',
    aboutTitle: 'Your technical partner from idea to measurable success.',
    aboutText: 'At Betta Technologies, we help companies and founders turn ideas into digital experiences that grow and create real impact. We support you from the first idea all the way to launch and ongoing optimization.',
    servicesHeading: 'Services designed for your growth.',
    portfolioHeading: 'Apps we are proud of.',
    contactHeading: 'Let’s build something remarkable<br>together.',
    contactText: 'Tell us about your idea and let us turn it into a successful digital experience.',
    contactButton: 'Start the conversation'
  }
};

function setLanguage(language) {
  const selected = translations[language] || translations.ar;
  const navLinksItems = document.querySelectorAll('.nav-links a');
  if (navLinksItems.length >= 4) {
    navLinksItems[0].textContent = selected.navAbout;
    navLinksItems[1].textContent = selected.navServices;
    navLinksItems[2].textContent = selected.navWork;
    navLinksItems[3].textContent = selected.navCta;
  }

  const heroTitle = document.querySelector('.hero-copy h1');
  if (heroTitle) heroTitle.innerHTML = selected.heroTitle;

  const heroText = document.querySelector('.hero-text');
  if (heroText) heroText.textContent = selected.heroText;

  const primaryButton = document.querySelector('.button.primary');
  if (primaryButton) primaryButton.innerHTML = `${selected.heroCta} <span>←</span>`;

  const secondaryButton = document.querySelector('.button.secondary');
  if (secondaryButton) secondaryButton.textContent = selected.heroSecondary;

  const numbers = document.querySelectorAll('.numbers span');
  if (numbers.length >= 3) {
    numbers[0].textContent = selected.stat1;
    numbers[1].textContent = selected.stat2;
    numbers[2].textContent = selected.stat3;
  }

  const sectionTitle = document.querySelector('.about h2');
  if (sectionTitle) sectionTitle.textContent = selected.aboutTitle;

  const aboutText = document.querySelector('.about p');
  if (aboutText) aboutText.textContent = selected.aboutText;

  const servicesHeading = document.querySelector('.services-section h2');
  if (servicesHeading) servicesHeading.textContent = selected.servicesHeading;

  const workHeading = document.querySelector('.work-title');
  if (workHeading) workHeading.textContent = selected.portfolioHeading;

  const ctaHeading = document.querySelector('.cta h2');
  if (ctaHeading) ctaHeading.innerHTML = selected.contactHeading;

  const ctaParagraph = document.querySelector('.cta > p');
  if (ctaParagraph) ctaParagraph.textContent = selected.contactText;

  const ctaButton = document.querySelector('.button.light');
  if (ctaButton) ctaButton.textContent = selected.contactButton;

  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('betta-lang', language);
  languageButton.textContent = language === 'ar' ? 'English' : 'العربية';

  const isArabic = language === 'ar';
  document.body.classList.toggle('lang-en', !isArabic);
}

const savedLanguage = localStorage.getItem('betta-lang') || 'ar';
setLanguage(savedLanguage);

if (languageButton) {
  languageButton.addEventListener('click', () => {
    const currentLanguage = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    setLanguage(currentLanguage);
  });
}
