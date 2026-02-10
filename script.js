/* -------------------------
   Language data (both languages stored)
   ------------------------- */
const textData = {
  en: {
    home: "Home",
    services: "Services",
    about: "About Us",
    contact: "Contact",
    bookNow: "Book Now",
    bookNowAlt: "Book Now",
    heroTitle: "Your Home Repair Experts",
    heroDesc: "Fast & Reliable Service at Your Doorstep",
    quote: "Get a Free Quote",
    ac: "AC Repair",
    acDesc: "Cooling Solutions",
    fridge: "Refrigerator Repair",
    fridgeDesc: "Fridge Fixes",
    appliance: "Appliance Services",
    applianceDesc: "All Home Appliances",
    why: "Why Choose Us?",
    exp: "Experienced Technicians",
    expDesc: "Skilled & Trusted",
    price: "Affordable Pricing",
    priceDesc: "Upfront & Fair Rates",
    same: "Same-Day Service",
    sameDesc: "Fast & Efficient",
    cta: "Need Help? Schedule Your Repair Today!",
    bookService: "Book a Service"
  },
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    about: "من نحن",
    contact: "اتصل بنا",
    bookNow: "احجز الآن",
    bookNowAlt: "احجز الآن",
    heroTitle: "خبراء صيانة المنازل",
    heroDesc: "خدمة سريعة وموثوقة حتى باب منزلك",
    quote: "احصل على عرض مجاني",
    ac: "تصليح المكيفات",
    acDesc: "حلول التبريد",
    fridge: "تصليح الثلاجات",
    fridgeDesc: "إصلاحات الثلاجة",
    appliance: "خدمات الأجهزة",
    applianceDesc: "جميع أجهزة المنزل",
    why: "لماذا تختارنا؟",
    exp: "فنيون محترفون",
    expDesc: "مهرة وموثوقون",
    price: "أسعار مناسبة",
    priceDesc: "شفافية وعدالة",
    same: "خدمة في نفس اليوم",
    sameDesc: "سريع وفعّال",
    cta: "هل تحتاج مساعدة؟ احجز صيانة اليوم!",
    bookService: "احجز خدمة"
  }
};

/* Current language state */
let currentLang = "en";
const langBtn = document.getElementById("langBtn");

/* Applies the selected language by writing values for elements that have data-key */
function applyLanguage(lang) {
  currentLang = lang;
  // set html lang & dir attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  // button label (toggle shows opposite language)
  langBtn.innerText = (lang === "ar") ? "EN" : "AR";

  // update all elements that have data-key
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    // skip if key not present in textData
    if (!textData[lang] || typeof textData[lang][key] === "undefined") return;
    el.innerText = textData[lang][key];
  });
}

/* Toggle handler */
langBtn.addEventListener("click", () => {
  const next = currentLang === "en" ? "ar" : "en";
  applyLanguage(next);
});

/* Initialize page with explicit language values (avoids losing text on toggles) */
applyLanguage(currentLang);

/* -------------------------
   Scroll reveal (IntersectionObserver)
   - Reveals `.reveal` containers and their children `.reveal-child` with slight delays
   ------------------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      // reveal children with small stagger
      const children = entry.target.querySelectorAll(".reveal-child");
      children.forEach((c, i) => {
        setTimeout(() => c.classList.add("active"), 120 * i);
      });
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* Also observe individual reveal-child items not wrapped in a reveal parent */
document.querySelectorAll(".reveal-child").forEach(el => {
  if (!el.closest(".reveal")) revealObserver.observe(el);
});
