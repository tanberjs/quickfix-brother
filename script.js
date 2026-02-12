/* ========================================
   LANGUAGE DATA (EN & AR)
   ======================================== */
const textData = {
    en: {
        // Navigation
        home: "Home",
        services: "Services",
        about: "About Us",
        testimonials: "Testimonials",
        contact: "Contact",
        bookNow: "Book Now",
        bookNowAlt: "Book Now",
        // Hero Section
        heroBadge: "Trusted by 10,000+ Customers",
        heroTitle: "Your Home Repair Experts",
        heroDesc: "Fast & Reliable Service at Your Doorstep",
        feature24: "24/7 Available",
        featureWarranty: "Warranty Guaranteed",
        featureSatisfaction: "100% Satisfaction",
        quote: "Get a Free Quote",
        // Services Section
        servicesTitle: "Our Services",
        servicesSubtitle: "Professional Solutions for All Your Home Repair Needs",
        ac: "AC Repair",
        acDesc: "Cooling Solutions",
        acFeature1: "Installation & Maintenance",
        acFeature2: "Emergency Repairs",
        acFeature3: "Energy Efficiency",
        fridge: "Refrigerator Repair",
        fridgeDesc: "Fridge Fixes",
        fridgeFeature1: "All Brands Supported",
        fridgeFeature2: "Same-Day Service",
        fridgeFeature3: "Genuine Parts",
        appliance: "Appliance Services",
        applianceDesc: "All Home Appliances",
        applianceFeature1: "Washing Machines",
        applianceFeature2: "Dishwashers",
        applianceFeature3: "Ovens & More",
        popular: "Most Popular",
        learnMore: "Learn More",
        // Why Us Section
        why: "Why Choose Us?",
        whySubtitle: "We're Committed to Excellence in Every Repair",
        exp: "Experienced Technicians",
        expDesc: "Skilled & Trusted",
        price: "Affordable Pricing",
        priceDesc: "Upfront & Fair Rates",
        same: "Same-Day Service",
        sameDesc: "Fast & Efficient",
        certified: "Certified Professionals",
        certifiedDesc: "Licensed & Insured",
        support: "24/7 Support",
        supportDesc: "Always Here to Help",
        warranty: "Warranty Included",
        warrantyDesc: "Quality Guaranteed",
        // Testimonials Section
        testimonialsTitle: "What Our Customers Say",
        testimonialsSubtitle: "Real Reviews from Real People",
        testimonial1: "Excellent service! They fixed my AC in less than an hour. Highly professional and affordable.",
        customer1: "Ahmed Al-Rashid",
        location1: "Dubai, UAE",
        testimonial2: "Best refrigerator repair service in town. Same-day service and very reasonable prices!",
        customer2: "Sarah Johnson",
        location2: "Abu Dhabi, UAE",
        testimonial3: "Very professional team. They repaired my washing machine quickly and it works perfectly now!",
        customer3: "Mohammed Hassan",
        location3: "Sharjah, UAE",
        // CTA Section
        cta: "Need Help? Schedule Your Repair Today!",
        ctaSubtitle: "Get in touch with our expert team for fast and reliable service",
        bookService: "Book a Service",
        callNow: "Call Now",
        address: "Dubai, United Arab Emirates",
        // Footer
        footerDesc: "Your trusted partner for all home repair needs. Quality service, affordable prices.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        emergency: "Emergency Repairs",
        rights: "All rights reserved."
    },
    ar: {
        // Navigation
        home: "الرئيسية",
        services: "الخدمات",
        about: "من نحن",
        testimonials: "آراء العملاء",
        contact: "اتصل بنا",
        bookNow: "احجز الآن",
        bookNowAlt: "احجز الآن",
        // Hero Section
        heroBadge: "موثوق من قبل 10,000+ عميل",
        heroTitle: "خبراء صيانة المنازل",
        heroDesc: "خدمة سريعة وموثوقة حتى باب منزلك",
        feature24: "متاح 24/7",
        featureWarranty: "ضمان مضمون",
        featureSatisfaction: "رضا 100%",
        quote: "احصل على عرض مجاني",
        // Services Section
        servicesTitle: "خدماتنا",
        servicesSubtitle: "حلول احترافية لجميع احتياجات صيانة منزلك",
        ac: "تصليح المكيفات",
        acDesc: "حلول التبريد",
        acFeature1: "التركيب والصيانة",
        acFeature2: "إصلاحات طارئة",
        acFeature3: "كفاءة الطاقة",
        fridge: "تصليح الثلاجات",
        fridgeDesc: "إصلاحات الثلاجة",
        fridgeFeature1: "جميع الماركات مدعومة",
        fridgeFeature2: "خدمة في نفس اليوم",
        fridgeFeature3: "قطع غيار أصلية",
        appliance: "خدمات الأجهزة",
        applianceDesc: "جميع أجهزة المنزل",
        applianceFeature1: "غسالات",
        applianceFeature2: "غسالات صحون",
        applianceFeature3: "أفران والمزيد",
        popular: "الأكثر شعبية",
        learnMore: "اعرف المزيد",
        // Why Us Section
        why: "لماذا تختارنا؟",
        whySubtitle: "نحن ملتزمون بالتميز في كل إصلاح",
        exp: "فنيون محترفون",
        expDesc: "مهرة وموثوقون",
        price: "أسعار مناسبة",
        priceDesc: "شفافية وعدالة",
        same: "خدمة في نفس اليوم",
        sameDesc: "سريع وفعّال",
        certified: "محترفون معتمدون",
        certifiedDesc: "مرخص ومؤمن",
        support: "دعم 24/7",
        supportDesc: "دائماً هنا للمساعدة",
        warranty: "ضمان مشمول",
        warrantyDesc: "جودة مضمونة",
        // Testimonials Section
        testimonialsTitle: "ماذا يقول عملاؤنا",
        testimonialsSubtitle: "تقييمات حقيقية من أشخاص حقيقيين",
        testimonial1: "خدمة ممتازة! أصلحوا المكيف في أقل من ساعة. محترفون جداً وبأسعار معقولة.",
        customer1: "أحمد الرشيد",
        location1: "دبي، الإمارات",
        testimonial2: "أفضل خدمة إصلاح ثلاجات في المدينة. خدمة في نفس اليوم وأسعار معقولة جداً!",
        customer2: "سارة جونسون",
        location2: "أبوظبي، الإمارات",
        testimonial3: "فريق محترف جداً. أصلحوا غسالتي بسرعة وتعمل بشكل مثالي الآن!",
        customer3: "محمد حسن",
        location3: "الشارقة، الإمارات",
        // CTA Section
        cta: "هل تحتاج مساعدة؟ احجز صيانة اليوم!",
        ctaSubtitle: "تواصل مع فريقنا المتخصص للحصول على خدمة سريعة وموثوقة",
        bookService: "احجز خدمة",
        callNow: "اتصل الآن",
        address: "دبي، الإمارات العربية المتحدة",
        // Footer
        footerDesc: "شريكك الموثوق لجميع احتياجات صيانة المنزل. خدمة عالية الجودة، أسعار معقولة.",
        quickLinks: "روابط سريعة",
        contactUs: "اتصل بنا",
        emergency: "إصلاحات طارئة",
        rights: "جميع الحقوق محفوظة."
    }
};
/* ========================================
   LANGUAGE TOGGLE FUNCTIONALITY
   ======================================== */
let currentLang = "en";
const langBtn = document.getElementById("langBtn");
const langText = document.querySelector(".lang-text");
function applyLanguage(lang) {
    currentLang = lang;
    // Set HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
    // Update button text
    langText.innerText = (lang === "ar") ? "EN" : "AR";
    // Update all elements with data-key
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        if (!textData[lang] || typeof textData[lang][key] === "undefined") return;
        // Handle elements with nested spans (buttons with icons)
        const span = el.querySelector("span");
        if (span && span.hasAttribute("data-key")) {
            span.innerText = textData[lang][key];
        } else {
            el.innerText = textData[lang][key];
        }
    });
    // Add smooth transition effect
    document.body.style.transition = "opacity 0.3s ease";
    document.body.style.opacity = "0.95";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 150);
}
// Language toggle event
langBtn.addEventListener("click", () => {
    const next = currentLang === "en" ? "ar" : "en";
    applyLanguage(next);
});
// Initialize with default language
applyLanguage(currentLang);
/* ========================================
   NAVBAR SCROLL EFFECT
   ======================================== */
const navbar = document.querySelector(".navbar");
let lastScroll = 0;
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    // Add scrolled class for styling
    if (currentScroll > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
    lastScroll = currentScroll;
});
/* ========================================
   SMOOTH SCROLL FOR NAVIGATION LINKS
   ======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    });
});
/* ========================================
   SCROLL REVEAL ANIMATIONS
   ======================================== */
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Reveal children with stagger effect
                const children = entry.target.querySelectorAll(".reveal-child");
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add("active");
                    }, index * 120);
                });
            }
        });
    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    }
);
// Observe all reveal elements
document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
});
// Observe standalone reveal-child elements
document.querySelectorAll(".reveal-child").forEach((el) => {
    if (!el.closest(".reveal")) {
        revealObserver.observe(el);
    }
});
/* ========================================
   PARALLAX EFFECT FOR HERO & CTA
   ======================================== */
const heroSection = document.querySelector(".hero");
const ctaSection = document.querySelector(".cta");
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    if (heroSection) {
        const heroOffset = heroSection.offsetTop;
        const heroHeight = heroSection.offsetHeight;
        if (scrolled < heroHeight) {
            const yPos = -(scrolled - heroOffset) * 0.5;
            heroSection.style.backgroundPositionY = `${yPos}px`;
        }
    }
    if (ctaSection) {
        const ctaOffset = ctaSection.offsetTop;
        const ctaVisible = scrolled + window.innerHeight > ctaOffset;
        if (ctaVisible) {
            const yPos = -(scrolled - ctaOffset) * 0.3;
            ctaSection.style.backgroundPositionY = `${yPos}px`;
        }
    }
}
// Throttle parallax for performance
let ticking = false;
window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            parallaxEffect();
            ticking = false;
        });
        ticking = true;
    }
});
/* ========================================
   BUTTON CLICK HANDLERS
   ======================================== */
const bookNowBtn = document.getElementById("bookNowBtn");
const quoteBtn = document.getElementById("quoteBtn");
const bookServiceBtn = document.getElementById("bookServiceBtn");
function handleBooking() {
    alert(currentLang === "en"
        ? "Thank you for your interest! Please call +971 50 123 4567 to book your service."
        : "شكراً لاهتمامك! يرجى الاتصال على +971 50 123 4567 لحجز خدمتك.");
}
function handleQuote() {
    alert(currentLang === "en"
        ? "For a free quote, please contact us at info@quickfixbrothers.com or call +971 50 123 4567"
        : "للحصول على عرض مجاني، يرجى الاتصال بنا على info@quickfixbrothers.com أو الاتصال على +971 50 123 4567");
}
if (bookNowBtn) {
    bookNowBtn.addEventListener("click", handleBooking);
}
if (quoteBtn) {
    quoteBtn.addEventListener("click", handleQuote);
}
if (bookServiceBtn) {
    bookServiceBtn.addEventListener("click", handleBooking);
}
// Service buttons
document.querySelectorAll(".btn-service").forEach(btn => {
    btn.addEventListener("click", () => {
        alert(currentLang === "en"
            ? "Contact us for more information about this service!"
            : "اتصل بنا لمزيد من المعلومات حول هذه الخدمة!");
    });
});
/* ========================================
   ACTIVE NAV LINK HIGHLIGHTING
   ======================================== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
function highlightNavLink() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}
window.addEventListener("scroll", highlightNavLink);
/* ========================================
   FLOATING ANIMATION FOR SERVICE CARDS
   ======================================== */
const serviceBoxes = document.querySelectorAll(".service-box");
serviceBoxes.forEach((box, index) => {
    // Add slight delay to create wave effect
    box.style.animationDelay = `${index * 0.1}s`;
});
/* ========================================
   SCROLL TO TOP ON LOGO CLICK
   ======================================== */
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/* ========================================
   INITIALIZE ON PAGE LOAD
   ======================================== */
window.addEventListener("load", () => {
    // Trigger initial reveal for elements in viewport
    const initialElements = document.querySelectorAll(".reveal");
    initialElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add("active");
        }
    });
    // Initialize parallax
    parallaxEffect();
    // Initialize nav highlighting
    highlightNavLink();
});
/* ========================================
   PERFORMANCE OPTIMIZATION
   ======================================== */
// Preload critical images
const criticalImages = [
    "images/hero.png",
    "images/ac.png",
    "images/fridge.png"
];
criticalImages.forEach(src => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
});
