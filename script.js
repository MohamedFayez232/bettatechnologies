const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const languageButton = document.querySelector('.language-button');
menuButton.addEventListener('click', () => { const open = navLinks.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => navLinks.classList.remove('open')));
document.querySelector('#year').textContent = new Date().getFullYear();

const copy = {
  ar: [
    ['.nav-links a:nth-child(1)','من نحن'],['.nav-links a:nth-child(2)','خدماتنا'],['.nav-links a:nth-child(3)','آخر أعمالنا'],['.nav-links a:nth-child(4)','ابدأ مشروعك'],
    ['.hero h1','نحوّل الأفكار الطموحة<br>إلى <span>تطبيقات مؤثرة.</span>'],['.hero-text','نصنع تجارب رقمية ذكية تحوّل أفكارك إلى تطبيقات قوية، سهلة الاستخدام، وجاهزة للنمو مع مشروعك.'],['.hero-actions a:first-child','ابدأ فكرتك الآن <span>←</span>'],['.hero-actions a:last-child','شاهد أعمالنا'],
    ['.numbers div:nth-child(1) span','تطبيقًا تم تطويره'],['.numbers div:nth-child(2) span','عميل يثق بنا'],['.numbers div:nth-child(3) span','دعم ومتابعة'],['.section-label','من نحن'],['.about h2','شريكك التقني من الفكرة<br>إلى نجاح ملموس.'],['.about-copy p','في Betta Technologies نبتكر حلولًا رقمية تساعد المشاريع على النمو. من أول فكرة وحتى الإطلاق، ندمج التصميم الأنيق مع البرمجة الموثوقة لنصنع تطبيقات تترك أثرًا حقيقيًا.'],['.about-copy a','ابدأ مشروعك معنا <span>←</span>'],
    ['.services-section .eyebrow','ماذا نقدم'],['.services-section h2','خدمات مصمّمة لنمو أعمالك.'],['.work .eyebrow','آخر أعمالنا'],['.work h2','تطبيقات نفخر بها.'],['.work-heading > p','نماذج من التطبيقات التي طوّرناها لتمنح المستخدمين قيمة حقيقية كل يوم.'],['.cta .eyebrow','لديك فكرة؟'],['.cta h2','لنصنع شيئًا مميزًا<br>معًا.'],['.cta > p:not(.eyebrow)','أخبرنا عن فكرتك، ودعنا نحولها إلى تجربة رقمية ناجحة.'],['.cta .button','تواصل معنا عبر واتساب <span>←</span>']
  ],
  en: [
    ['.nav-links a:nth-child(1)','About us'],['.nav-links a:nth-child(2)','Services'],['.nav-links a:nth-child(3)','Our work'],['.nav-links a:nth-child(4)','Start your project'],
    ['.hero h1','We turn ambitious ideas<br>into <span>impactful apps.</span>'],['.hero-text','We create smart digital experiences that turn your ideas into powerful, easy-to-use apps built to grow with your business.'],['.hero-actions a:first-child','Start your idea <span>→</span>'],['.hero-actions a:last-child','See our work'],
    ['.numbers div:nth-child(1) span','Apps developed'],['.numbers div:nth-child(2) span','Clients trust us'],['.numbers div:nth-child(3) span','Support & follow-up'],['.section-label','About us'],['.about h2','Your tech partner from idea<br>to meaningful success.'],['.about-copy p','At Betta Technologies, we build digital solutions that help businesses grow. From the first idea to launch, we combine refined design with reliable development to create apps that make a real impact.'],['.about-copy a','Start your project <span>→</span>'],
    ['.services-section .eyebrow','What we do'],['.services-section h2','Services designed for your growth.'],['.work .eyebrow','Our latest work'],['.work h2','Apps we are proud of.'],['.work-heading > p','A selection of apps we built to bring real value to users every day.'],['.cta .eyebrow','Have an idea?'],['.cta h2','Let’s build something<br>remarkable together.'],['.cta > p:not(.eyebrow)','Tell us about your idea, and let’s turn it into a successful digital experience.'],['.cta .button','Chat with us on WhatsApp <span>→</span>']
  ]
};

function setLanguage(language) {
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  copy[language].forEach(([selector, value]) => { const el = document.querySelector(selector); if (el) el.innerHTML = value; });
  const details = language === 'ar' ? [
    ['.service-card:nth-child(1) h3','تطبيقات الموبايل'],['.service-card:nth-child(1) p','نطوّر تطبيقات Android سريعة وسلسة تحوّل فكرتك إلى تجربة يحبها المستخدمون.'],['.service-card:nth-child(2) h3','حلول رقمية مبتكرة'],['.service-card:nth-child(2) p','نبتكر أنظمة ذكية ومخصصة تواكب أهدافك وتمنح مشروعك أفضلية حقيقية.'],['.service-card:nth-child(3) h3','تصميم تجربة المستخدم'],['.service-card:nth-child(3) p','واجهات عصرية وواضحة تجعل كل تفاعل أسرع وأسهل وأكثر متعة.'],
    ['.project-card:nth-child(1) h3','أمان'],['.project-card:nth-child(1) p','تطبيق ذكي يساعد المستخدمين على كشف محاولات النصب والاحتيال واتخاذ قرارات أكثر أمانًا.'],['.project-card:nth-child(2) h3','قطرة'],['.project-card:nth-child(2) p','منصة تبرع بالدم تربط المتبرعين بالمحتاجين بسرعة، مع بحث ذكي حسب الفصيلة والمحافظة.'],['.project-card:nth-child(3) h3','بنكي'],['.project-card:nth-child(3) p','تطبيق يساعد المهتمين بالمجال المصرفي على الاستعداد للاختبارات وتطوير معارفهم البنكية.'],['.project-card:nth-child(4) h3','طلباتك'],['.project-card:nth-child(4) p','تطبيق تسوق إلكتروني يجعل شراء احتياجاتك اليومية أسهل، أسرع، وفي متناول يدك.']
  ] : [
    ['.service-card:nth-child(1) h3','Mobile apps'],['.service-card:nth-child(1) p','We build fast, seamless Android apps that turn your idea into an experience users love.'],['.service-card:nth-child(2) h3','Innovative digital solutions'],['.service-card:nth-child(2) p','We create smart, tailored systems that serve your goals and give your business a real advantage.'],['.service-card:nth-child(3) h3','User experience design'],['.service-card:nth-child(3) p','Modern, intuitive interfaces that make every interaction faster, easier, and more enjoyable.'],
    ['.project-card:nth-child(1) h3','Aman'],['.project-card:nth-child(1) p','A smart app that helps users spot scam and fraud attempts, so they can make safer decisions.'],['.project-card:nth-child(2) h3','Qatra'],['.project-card:nth-child(2) p','A blood-donation platform connecting donors with people in need through smart search by blood type and location.'],['.project-card:nth-child(3) h3','Banky'],['.project-card:nth-child(3) p','An app that helps banking professionals prepare for exams and build essential financial knowledge.'],['.project-card:nth-child(4) h3','Talabatak'],['.project-card:nth-child(4) p','An online-shopping app that makes buying everyday essentials easier, faster, and always within reach.']
  ];
  details.forEach(([selector, value]) => { const el = document.querySelector(selector); if (el) el.innerHTML = value; });
  document.querySelector('#year').textContent = new Date().getFullYear();
  languageButton.textContent = language === 'ar' ? 'English' : 'العربية';
}
languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar'));
