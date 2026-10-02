const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const languageButton = document.querySelector('.language-button');
const yearNode = document.querySelector('#year');
const reviewsGrid = document.getElementById('reviewsGrid');
const reviewForm = document.getElementById('reviewForm');
const formStatus = document.getElementById('formStatus');

const defaultReviews = [
  {
    name: 'محمد الحمادي',
    role: 'مؤسس تطبيق أمان',
    project: 'Android App',
    rating: 5,
    text: 'من أفضل التجارب في التعامل مع Betta Technologies. احترافية كبيرة، فهم عميق للفكرة، تنفيذ دقيق جدًا. النتيجة النهائية تجاوزت توقعاتنا بكثير. سأنصح بهم بكل تأكيد.'
  },
  {
    name: 'نور خليفة',
    role: 'مدير مشروع درة الخيرية',
    project: 'Platform',
    rating: 5,
    text: 'التزام رائع بالمواعيد والجودة. فريق Betta استمع جيدًا لاحتياجاتنا وحول رؤيتنا إلى تطبيق يخدم آلاف المستخدمين. الدعم اللاحق ممتاز جدًا.'
  },
  {
    name: 'أحمد محمود',
    role: 'رائد أعمال في المجال FinTech',
    project: 'FinTech App',
    rating: 5,
    text: 'بحثت عن فريق يفهم رؤيتي ويحولها بثقة. Betta كان الخيار الأمثل. التصميم جميل، التطبيق عملي، والدعم المستمر مميز. نالت ثقتنا كاملة في كل مرحلة.'
  },
  {
    name: 'سارة أحمد',
    role: 'مديرة تطبيق طلباتك',
    project: 'E-commerce',
    rating: 5,
    text: 'حلولنا تحسّنت بشكل واضح بعد التحول إلى Betta. كانت تجربة التعاون سلسة جدًا من أول يوم. اهتمامهم بالتفاصيل والجودة ميز التطبيق عن المنافسين.'
  }
];

const storageKey = 'bettaClientReviews';

function getReviews() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return defaultReviews;
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : defaultReviews;
  } catch (error) {
    console.error('Error loading reviews:', error);
    return defaultReviews;
  }
}

function saveReviews(reviews) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(reviews));
  } catch (error) {
    console.error('Error saving reviews:', error);
  }
}

function getStars(rating) {
  const filled = '★'.repeat(rating);
  const empty = '☆'.repeat(5 - rating);
  return filled + empty;
}

function renderReviews() {
  if (!reviewsGrid) return;

  const reviews = getReviews();
  const firstLetter = (str) => (str || 'م').charAt(0);

  reviewsGrid.innerHTML = reviews
    .map(
      (review) => `
        <article class="review-card">
          <div class="review-header">
            <div class="reviewer-info">
              <div class="reviewer-avatar">${firstLetter(review.name)}</div>
              <div>
                <h3>${review.name || 'بدون اسم'}</h3>
                <span>${review.role || 'عميل'}</span>
              </div>
            </div>
            <div class="review-rating" aria-label="تقييم ${review.rating} من 5">
              <span class="stars">${getStars(review.rating || 5)}</span>
            </div>
          </div>
          <p class="review-text">"${review.text || ''}"</p>
          <div class="review-meta">
            <span class="project-tag">${review.project || 'Project'}</span>
            <span class="date">${new Date().getFullYear()}</span>
          </div>
        </article>
      `
    )
    .join('');
}

// Menu toggle
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

// Year update
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

// Review form submission
if (reviewForm) {
  reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(reviewForm);
    const name = String(formData.get('name') || '').trim();
    const role = String(formData.get('role') || '').trim();
    const project = String(formData.get('project') || '').trim();
    const rating = Number(formData.get('rating') || 5);
    const text = String(formData.get('text') || '').trim();

    // Validation
    if (!name || !role || !project || !text) {
      if (formStatus) {
        formStatus.textContent = 'يرجى تعبئة جميع الحقول قبل الإرسال.';
        formStatus.style.color = '#d9534f';
      }
      return;
    }

    // Add new review
    const reviews = getReviews();
    const newReview = { name, role, project, rating, text };
    const updatedReviews = [newReview, ...reviews].slice(0, 20);
    saveReviews(updatedReviews);
    renderReviews();
    reviewForm.reset();

    // Success message
    if (formStatus) {
      formStatus.textContent = '✓ تمت إضافة مراجعتك بنجاح! شكرًا لك.';
      formStatus.style.color = '#5cb85c';
      setTimeout(() => {
        formStatus.textContent = '';
      }, 4000);
    }
  });
}

// Language toggle
if (languageButton) {
  languageButton.addEventListener('click', () => {
    const current = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = current;
    document.documentElement.dir = current === 'ar' ? 'rtl' : 'ltr';
    languageButton.textContent = current === 'ar' ? 'English' : 'العربية';
  });
}

// Initial render
renderReviews();
