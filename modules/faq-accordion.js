// Module FAQ Tabs + Accordion - Version optimisée avec animations
export function init() {
  console.log('✅ FAQ Tabs + Accordion initialisé')

  // 1. Premier tab checked (immédiat)
  initFirstTab()
  
  // 2. Accordions (attendre GSAP)
  if (typeof gsap !== 'undefined') {
    initAccordions()
    initTabAnimations()
  } else {
    console.log('⚠ GSAP manquant pour les accordions')
  }
}

// Premier tab checked + classe is-active forcée
function initFirstTab() {
  const tabsList = document.querySelector('.form_tabs-list')
  if (!tabsList) return
  
  const firstRadio = tabsList.querySelector('input[type="radio"]')
  if (!firstRadio) return
  
  // Check + trigger events
  firstRadio.checked = true
  firstRadio.dispatchEvent(new Event('change', { bubbles: true }))
  
  // Forcer la classe is-active sur le wrapper
  const firstWrapper = firstRadio.closest('.radio_wrapper')
  if (firstWrapper) {
    firstWrapper.classList.add('is-active')
  }
  
  console.log('✅ Premier tab + is-active appliqués')
}

// Animations de changement de tabs
function initTabAnimations() {
  const faqList = document.querySelector('.faq_list')
  if (!faqList) return
  
  // Position initiale de la liste
  gsap.set(faqList, { opacity: 1, y: 0 })
  
  // Écouter les changements de tabs
  document.addEventListener('change', (e) => {
    // Vérifier si c'est un radio tab qui change
    if (e.target.type === 'radio' && e.target.closest('.form_tabs-list')) {
      animateTabChange(faqList)
    }
  })
}

// Animation de transition instantanée + slide in
function animateTabChange(faqList) {
  // Hide instantané puis show animé
  gsap.set(faqList, { opacity: 0, y: 30 }) // Instantané
  gsap.to(faqList, { 
    opacity: 1, 
    y: 0, 
    duration: 0.4, 
    ease: "power2.out" 
  }) // Animé
  
  console.log('🎬 Animation tab: hide instant → slide in')
}

// Accordions optimisés
function initAccordions() {
  const accordions = document.querySelectorAll('.faq_accordion')
  if (!accordions.length) return

  // Setup initial pour tous (batch operation)
  const answers = []
  const icons = []
  
  accordions.forEach(accordion => {
    const question = accordion.querySelector('.faq_question')
    const answer = accordion.querySelector('.faq_answer')
    const icon = accordion.querySelector('.faq_icon')
    
    if (!question || !answer) return
    
    // Collecter pour batch GSAP
    answers.push(answer)
    if (icon) icons.push(icon)
    
    // Accessibilité
    question.setAttribute('aria-expanded', 'false')
    answer.setAttribute('aria-hidden', 'true')
    
    // Event listener optimisé
    question.addEventListener('click', () => toggleAccordion(accordion, answer, icon, question))
  })
  
  // Batch GSAP initial (plus performant)
  gsap.set(answers, { height: 0, overflow: 'hidden' })
  gsap.set(icons, { rotate: 0 })
}

// Toggle accordion optimisé
function toggleAccordion(accordion, answer, icon, question) {
  const isOpen = accordion.classList.contains('is-open')
  
  if (isOpen) {
    // Fermer
    accordion.classList.remove('is-open')
    gsap.to(answer, { height: 0, duration: 0.3 })
    if (icon) gsap.to(icon, { rotate: 0, duration: 0.3 })
    question.setAttribute('aria-expanded', 'false')
    answer.setAttribute('aria-hidden', 'true')
  } else {
    // Ouvrir
    accordion.classList.add('is-open')
    gsap.to(answer, { height: 'auto', duration: 0.4 })
    if (icon) gsap.to(icon, { rotate: -180, duration: 0.4 })
    question.setAttribute('aria-expanded', 'true')
    answer.setAttribute('aria-hidden', 'false')
  }
}