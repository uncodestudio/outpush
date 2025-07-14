const pages = {
  "homepage": ["faq-accordion", "marquee-slider", "process-scroll", "splide-testimonies", "text-animation", "text-translate"],
  "product": ["product-scroll", "faq-accordion"],
  "articles": ["other-articles"],
  "contact": ["splide-testimonies"]
};
function init$8() {
  console.log("✅ FAQ Tabs + Accordion initialisé");
  initFirstTab();
  if (typeof gsap !== "undefined") {
    initAccordions();
    initTabAnimations();
  } else {
    console.log("⚠ GSAP manquant pour les accordions");
  }
}
function initFirstTab() {
  const tabsList = document.querySelector(".form_tabs-list");
  if (!tabsList) return;
  const firstRadio = tabsList.querySelector('input[type="radio"]');
  if (!firstRadio) return;
  firstRadio.checked = true;
  firstRadio.dispatchEvent(new Event("change", { bubbles: true }));
  const firstWrapper = firstRadio.closest(".radio_wrapper");
  if (firstWrapper) {
    firstWrapper.classList.add("is-active");
  }
  console.log("✅ Premier tab + is-active appliqués");
}
function initTabAnimations() {
  const faqList = document.querySelector(".faq_list");
  if (!faqList) return;
  gsap.set(faqList, { opacity: 1, y: 0 });
  document.addEventListener("change", (e) => {
    if (e.target.type === "radio" && e.target.closest(".form_tabs-list")) {
      animateTabChange(faqList);
    }
  });
}
function animateTabChange(faqList) {
  gsap.set(faqList, { opacity: 0, y: 30 });
  gsap.to(faqList, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "power2.out"
  });
  console.log("🎬 Animation tab: hide instant → slide in");
}
function initAccordions() {
  const accordions = document.querySelectorAll(".faq_accordion");
  if (!accordions.length) return;
  const answers = [];
  const icons = [];
  accordions.forEach((accordion) => {
    const question = accordion.querySelector(".faq_question");
    const answer = accordion.querySelector(".faq_answer");
    const icon = accordion.querySelector(".faq_icon");
    if (!question || !answer) return;
    answers.push(answer);
    if (icon) icons.push(icon);
    question.setAttribute("aria-expanded", "false");
    answer.setAttribute("aria-hidden", "true");
    question.addEventListener("click", () => toggleAccordion(accordion, answer, icon, question));
  });
  gsap.set(answers, { height: 0, overflow: "hidden" });
  gsap.set(icons, { rotate: 0 });
}
function toggleAccordion(accordion, answer, icon, question) {
  const isOpen = accordion.classList.contains("is-open");
  if (isOpen) {
    accordion.classList.remove("is-open");
    gsap.to(answer, { height: 0, duration: 0.3 });
    if (icon) gsap.to(icon, { rotate: 0, duration: 0.3 });
    question.setAttribute("aria-expanded", "false");
    answer.setAttribute("aria-hidden", "true");
  } else {
    accordion.classList.add("is-open");
    gsap.to(answer, { height: "auto", duration: 0.4 });
    if (icon) gsap.to(icon, { rotate: -180, duration: 0.4 });
    question.setAttribute("aria-expanded", "true");
    answer.setAttribute("aria-hidden", "false");
  }
}
function init$7() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll(".marquee").forEach((marquee) => {
    const content = marquee.firstElementChild;
    if (!content) return;
    content.innerHTML += content.innerHTML;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tl = gsap.to(content, {
      xPercent: -50,
      duration: +marquee.dataset.speed || 15,
      ease: "none",
      repeat: -1,
      paused: false
    });
    marquee.onmouseenter = () => tl.pause();
    marquee.onmouseleave = () => tl.play();
  });
}
function init$6() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.log("⚠ GSAP ou ScrollTrigger manquant");
    return;
  }
  const container = document.querySelector(".section_home-process");
  const component = container == null ? void 0 : container.querySelector(".home-process_component");
  const layout = container == null ? void 0 : container.querySelector(".home-process_layout");
  const numberList = container == null ? void 0 : container.querySelector(".home-process_icon-number-list");
  const contents = container == null ? void 0 : container.querySelectorAll(".home-process_content");
  if (!container || !layout || !numberList || !contents.length) {
    console.log("⚠ Éléments manquants");
    return;
  }
  console.log("✅ Process ultra-optimisé");
  let currentStep = -1;
  const elementsToMove = [layout, numberList];
  const contentsArray = Array.from(contents);
  const opacityAnimations = contentsArray.map((content) => ({
    element: content,
    fadeIn: gsap.to(content, { opacity: 1, duration: 0.6, ease: "power2.out", paused: true }),
    fadeOut: gsap.to(content, { opacity: 0.3, duration: 0.6, ease: "power2.out", paused: true })
  }));
  gsap.set(elementsToMove, { y: 0, force3D: true });
  gsap.set(contentsArray, { opacity: 0.3, force3D: true });
  gsap.set(contentsArray[0], { opacity: 1 });
  const mainTimeline = gsap.timeline({ paused: true }).to(elementsToMove, { y: -340, duration: 0.2, ease: "none" }).to(elementsToMove, { y: -340, duration: 0.15, ease: "none" }).to(elementsToMove, { y: -680, duration: 0.2, ease: "none" }).to(elementsToMove, { y: -680, duration: 0.15, ease: "none" }).to(elementsToMove, { y: -1020, duration: 0.2, ease: "none" }).to(elementsToMove, { y: -1020, duration: 0.15, ease: "none" }).to(elementsToMove, { y: -1360, duration: 0.1, ease: "none" }).to(elementsToMove, { y: -1360, duration: 0.15, ease: "none" });
  const updateOpacity = (newStep) => {
    opacityAnimations.forEach((anim) => {
      anim.fadeIn.pause();
      anim.fadeOut.pause();
    });
    opacityAnimations.forEach((anim, index) => {
      if (index === newStep) {
        anim.fadeIn.restart();
      } else {
        anim.fadeOut.restart();
      }
    });
  };
  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: component,
    markers: false,
    id: "process-scroll",
    animation: mainTimeline,
    onUpdate: (self) => {
      const newStep = self.progress * 5 | 0;
      if (newStep !== currentStep) {
        currentStep = newStep;
        updateOpacity(newStep);
      }
    }
  });
}
function init$5() {
  if (typeof Splide === "undefined") {
    console.error("❌ Splide non trouvé - Ajouter le script Splide");
    return;
  }
  const testimonialSliders = document.querySelectorAll(".splide.testimonial-slider");
  if (!testimonialSliders.length) {
    console.log("⚠ Aucun slider .testimonial-slider trouvé");
    return;
  }
  console.log("✅ Splide Testimonial Slider initialisé");
  testimonialSliders.forEach((slider) => {
    new Splide(slider, {
      // Configuration témoignages
      type: "loop",
      // Loop infini
      perPage: 3,
      // 3 témoignages visibles
      perMove: 1,
      // Avance de 1 témoignage
      gap: "1.5rem",
      // Gap de 1.5rem
      // Navigation
      arrows: true,
      // Flèches actives
      pagination: false,
      // Pas de pagination
      // Responsive pour témoignages
      breakpoints: {
        991: {
          // Tablet
          perPage: 2,
          gap: "1rem"
        },
        767: {
          // Mobile
          perPage: 1,
          gap: "0.5rem"
        }
      },
      // Options témoignages
      speed: 600,
      // Vitesse transition
      easing: "ease",
      // Courbe d'animation
      autoWidth: false,
      // Largeur automatique désactivée
      focus: "center",
      // Focus au centre
      trimSpace: false,
      // Garde l'espace
      // Accessibilité témoignages
      ariaLabel: "Slider témoignages clients",
      i18n: {
        prev: "Témoignage précédent",
        next: "Témoignage suivant"
      }
    }).mount();
  });
}
function init$4() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.log("⚠ GSAP ou ScrollTrigger manquant");
    return;
  }
  if (typeof SplitText === "undefined") {
    console.log("⚠ SplitText GSAP manquant - utilisation du split manuel");
    return initWithManualSplit();
  }
  const textElements = document.querySelectorAll(".home-with-us_h2");
  if (!textElements.length) {
    console.log("⚠ Aucun élément .home-with-us_h2 trouvé");
    return;
  }
  console.log("✅ Text Reveal Animation initialisé (SplitText)");
  textElements.forEach((element) => {
    setupTextRevealGSAP(element);
  });
}
function setupTextRevealGSAP(element) {
  const splitText = new SplitText(element, {
    type: "chars",
    // Split par caractères
    charsClass: "letter"
    // Classe pour chaque lettre
  });
  const letters = splitText.chars;
  gsap.set(letters, { opacity: 0.2 });
  ScrollTrigger.create({
    trigger: element,
    start: "bottom bottom",
    end: "top center",
    scrub: 1,
    markers: false,
    id: "text-reveal",
    onUpdate: (self) => {
      const progress = self.progress;
      const totalLetters = letters.length;
      const visibleLetters = Math.floor(progress * totalLetters);
      letters.forEach((letter, index) => {
        gsap.to(letter, {
          opacity: index <= visibleLetters ? 1 : 0.2,
          duration: 0.1,
          ease: "none"
        });
      });
    }
  });
}
function initWithManualSplit() {
  const textElements = document.querySelectorAll(".home-with-us_h2");
  textElements.forEach((element) => {
    const originalText = element.textContent;
    const letters = originalText.split("").map((char) => {
      if (char === " ") return '<span class="letter">&nbsp;</span>';
      return `<span class="letter">${char}</span>`;
    });
    element.innerHTML = letters.join("");
    const letterElements = element.querySelectorAll(".letter");
    gsap.set(letterElements, { opacity: 0.2 });
    ScrollTrigger.create({
      trigger: element,
      start: "bottom bottom",
      end: "top center",
      scrub: 1,
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress;
        const visibleLetters = Math.floor(progress * letterElements.length);
        letterElements.forEach((letter, index) => {
          gsap.to(letter, {
            opacity: index <= visibleLetters ? 1 : 0.2,
            duration: 0.1,
            ease: "none"
          });
        });
      }
    });
  });
}
function init$3() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.log("⚠ GSAP ou ScrollTrigger manquant");
    return;
  }
  const wrapper = document.querySelector(".home-with-us_content-wrapper");
  const layout = document.querySelector(".home-with-us_content-layout");
  if (!wrapper || !layout) {
    console.log("⚠ Éléments manquants - wrapper ou layout");
    return;
  }
  console.log("✅ Horizontal Slide Animation initialisé");
  const wrapperWidth = wrapper.offsetWidth;
  const layoutWidth = layout.offsetWidth;
  const slideDistance = layoutWidth - wrapperWidth;
  console.log(`📏 Wrapper: ${wrapperWidth}px, Layout: ${layoutWidth}px, Distance: ${slideDistance}px`);
  gsap.set(layout, { x: 0 });
  ScrollTrigger.create({
    trigger: wrapper,
    start: "bottom bottom",
    // Animation commence quand bottom screen atteint bottom wrapper
    end: "top 10%",
    // Animation finit quand top wrapper atteint 90% du screen (= 10% du top)
    scrub: 1,
    markers: false,
    // Debug
    id: "horizontal-slide",
    onUpdate: (self) => {
      const progress = self.progress;
      const currentX = -progress * slideDistance;
      gsap.set(layout, { x: currentX });
      console.log(`Progress: ${Math.round(progress * 100)}%, X: ${Math.round(currentX)}px`);
    }
  });
  window.addEventListener("resize", () => {
    const newWrapperWidth = wrapper.offsetWidth;
    const newLayoutWidth = layout.offsetWidth;
    const newSlideDistance = newLayoutWidth - newWrapperWidth;
    console.log(`📏 Resize - Nouvelle distance: ${newSlideDistance}px`);
    ScrollTrigger.refresh();
  });
}
function init$2() {
  if (typeof Splide === "undefined") {
    console.error("❌ Splide non trouvé - Ajouter le script Splide");
    return;
  }
  const testimonialSliders = document.querySelectorAll(".success-stories");
  if (!testimonialSliders.length) {
    console.log("⚠ Aucun slider .success-stories");
    return;
  }
  console.log("✅ Splide success-stories initialisé");
  testimonialSliders.forEach((slider) => {
    new Splide(slider, {
      // Configuration témoignages
      type: "slide",
      // slides
      perPage: 1.5,
      // 3 témoignages visibles
      perMove: 1,
      // Avance de 1 témoignage
      gap: "1.5rem",
      // Gap de 1.5rem
      // Navigation
      arrows: true,
      // Flèches actives
      pagination: false,
      // Pas de pagination
      // Responsive pour témoignages
      breakpoints: {
        991: {
          // Tablet
          perPage: 1.25,
          gap: "1rem"
        },
        767: {
          // Mobile
          perPage: 1.1,
          gap: "0.5rem"
        }
      },
      // Options témoignages
      speed: 600,
      // Vitesse transition
      easing: "ease",
      // Courbe d'animation
      autoWidth: false,
      // Largeur automatique désactivée
      focus: "left",
      // Focus au centre
      trimSpace: true,
      // Garde l'espace
      // Accessibilité témoignages
      ariaLabel: "Slider témoignages clients",
      i18n: {
        prev: "Success stories précédent",
        next: "Success storie suivant"
      }
    }).mount();
  });
}
function init$1() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.log("⚠ GSAP ou ScrollTrigger manquant");
    return;
  }
  const container = document.querySelector(".section_product-features");
  const component = container == null ? void 0 : container.querySelector(".product-features_component");
  const layout = container == null ? void 0 : container.querySelector(".product-features_layout");
  const numberList = container == null ? void 0 : container.querySelector(".product-features_icon-number-list");
  const contents = container == null ? void 0 : container.querySelectorAll(".product-features_content");
  const buttons = document.querySelectorAll(".product-features_button");
  if (!container || !layout || !numberList || !contents.length) {
    console.log("⚠ Éléments manquants");
    return;
  }
  console.log("✅ Product Features avec navigation initialisé");
  let currentStep = -1;
  let isNavigating = false;
  const totalSteps = 6;
  const elementsToMove = [layout, numberList];
  gsap.set(elementsToMove, { y: 0, force3D: true });
  const mainTimeline = gsap.timeline({ paused: true }).to(elementsToMove, { y: -340, duration: 0.15, ease: "none" }).to(elementsToMove, { y: -340, duration: 0.1, ease: "none" }).to(elementsToMove, { y: -680, duration: 0.15, ease: "none" }).to(elementsToMove, { y: -680, duration: 0.1, ease: "none" }).to(elementsToMove, { y: -1020, duration: 0.15, ease: "none" }).to(elementsToMove, { y: -1020, duration: 0.1, ease: "none" }).to(elementsToMove, { y: -1360, duration: 0.15, ease: "none" }).to(elementsToMove, { y: -1360, duration: 0.1, ease: "none" }).to(elementsToMove, { y: -1700, duration: 0.15, ease: "none" }).to(elementsToMove, { y: -1700, duration: 0.1, ease: "none" }).to(elementsToMove, { y: -2040, duration: 0.15, ease: "none" });
  const anchorToStep = {
    "deployment": 0,
    "rss-to-push": 1,
    "campaign": 2,
    "api": 3,
    "metrics": 4,
    "segmentation": 5
  };
  const stepProgressions = [
    0,
    // Étape 0: Deployment
    0.175,
    // Étape 1: RSS-to-Push
    0.35,
    // Étape 2: Campaign  
    0.525,
    // Étape 3: API
    0.7,
    // Étape 4: Metrics
    0.875
    // Étape 5: Segmentation
  ];
  const updateStep = (newStep) => {
    if (newStep === currentStep) return;
    currentStep = newStep;
    updateActiveButton(newStep);
  };
  const updateActiveButton = (stepIndex) => {
    buttons.forEach((button, index) => {
      if (index === stepIndex) {
        button.classList.add("is-active");
      } else {
        button.classList.remove("is-active");
      }
    });
  };
  const navigateToStep = (targetStep) => {
    if (targetStep < 0 || targetStep >= totalSteps) return;
    isNavigating = true;
    const targetProgress = stepProgressions[targetStep] || 0;
    gsap.to(mainTimeline, {
      progress: targetProgress,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        isNavigating = false;
      }
    });
    updateStep(targetStep);
    console.log(`📍 Navigation vers étape ${targetStep + 1}`);
  };
  const navigateToSection = (sectionId) => {
    const stepIndex = anchorToStep[sectionId];
    if (stepIndex !== void 0) {
      const containerRect = container.getBoundingClientRect();
      const containerTop = window.pageYOffset + containerRect.top;
      window.scrollTo({
        top: containerTop,
        behavior: "smooth"
      });
      setTimeout(() => {
        navigateToStep(stepIndex);
      }, 500);
      console.log(`🔗 Navigation vers section: ${sectionId} (étape ${stepIndex})`);
    }
  };
  const handleHashChange = () => {
    const hash = window.location.hash.replace("#", "");
    if (anchorToStep.hasOwnProperty(hash)) {
      navigateToSection(hash);
    }
  };
  const checkInitialHash = () => {
    const hash = window.location.hash.replace("#", "");
    if (anchorToStep.hasOwnProperty(hash)) {
      const targetStep = anchorToStep[hash];
      setTimeout(() => {
        const containerRect = container.getBoundingClientRect();
        const containerTop = window.pageYOffset + containerRect.top;
        window.scrollTo({
          top: containerTop,
          behavior: "auto"
          // Pas d'animation au chargement
        });
        setTimeout(() => {
          navigateToStep(targetStep);
        }, 100);
      }, 200);
      console.log(`🔗 Navigation initiale vers: ${hash} (étape ${targetStep})`);
    }
  };
  buttons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      navigateToStep(index);
    });
  });
  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: component,
    markers: false,
    id: "product-features-scroll",
    animation: mainTimeline,
    onUpdate: (self) => {
      if (isNavigating) return;
      const newStep = Math.floor(self.progress * totalSteps);
      const clampedStep = Math.min(newStep, totalSteps - 1);
      if (clampedStep !== currentStep) {
        updateStep(clampedStep);
      }
    }
  });
  window.addEventListener("hashchange", handleHashChange);
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      const hash = link.getAttribute("href").replace("#", "");
      if (anchorToStep.hasOwnProperty(hash)) {
        e.preventDefault();
        navigateToSection(hash);
        history.pushState(null, null, `#${hash}`);
      }
    }
  });
  updateActiveButton(0);
  checkInitialHash();
  window.navigateToProductFeature = navigateToSection;
}
function init() {
  if (typeof Splide === "undefined") {
    console.error("❌ Splide non trouvé - Ajouter le script Splide");
    return;
  }
  const testimonialSliders = document.querySelectorAll(".other-articles");
  if (!testimonialSliders.length) {
    console.log("⚠ Aucun slider .other-articles");
    return;
  }
  console.log("✅ Splide other-articles initialisé");
  testimonialSliders.forEach((slider) => {
    new Splide(slider, {
      // Configuration témoignages
      type: "slide",
      // slides
      perPage: 1.5,
      // 3 témoignages visibles
      perMove: 1,
      // Avance de 1 témoignage
      gap: "1.5rem",
      // Gap de 1.5rem
      // Navigation
      arrows: true,
      // Flèches actives
      pagination: false,
      // Pas de pagination
      // Responsive pour témoignages
      breakpoints: {
        991: {
          // Tablet
          perPage: 1.25,
          gap: "1rem"
        },
        767: {
          // Mobile
          perPage: 1.1,
          gap: "0.5rem"
        }
      },
      // Options témoignages
      speed: 600,
      // Vitesse transition
      easing: "ease",
      // Courbe d'animation
      autoWidth: false,
      // Largeur automatique désactivée
      focus: "left",
      // Focus au centre
      trimSpace: true,
      // Garde l'espace
      // Accessibilité témoignages
      ariaLabel: "Slider témoignages clients",
      i18n: {
        prev: "Success stories précédent",
        next: "Success storie suivant"
      }
    }).mount();
  });
}
const log = () => {
};
const moduleMap = {
  "faq-accordion": init$8,
  "marquee-slider": init$7,
  "process-scroll": init$6,
  "splide-testimonies": init$5,
  "text-animation": init$4,
  "text-translate": init$3,
  "splide-success": init$2,
  "product-scroll": init$1,
  "other-articles": init
};
function loadModule(name) {
  try {
    log(`📦 Chargement module: ${name}`);
    const moduleInit = moduleMap[name];
    if (!moduleInit) {
      throw new Error(`Module ${name} non configuré`);
    }
    moduleInit();
    log(`✅ Module ${name} initialisé`);
  } catch (err) {
  }
}
function initApp() {
  const page = document.body.dataset.page;
  if (!page) {
    return;
  }
  const modules = pages[page];
  if (!modules) {
    return;
  }
  log(`🎯 Page: ${page} | Modules: ${modules.join(", ")}`);
  modules.forEach(loadModule);
}
document.addEventListener("DOMContentLoaded", initApp);
