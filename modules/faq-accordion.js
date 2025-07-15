// modules/faq-accordion.js - Accordéons uniquement
export function init() {
  console.log('✅ FAQ Accordion - Initialisation')
  
  // Vérifier GSAP
  const hasGSAP = typeof window.gsap !== 'undefined'
  if (!hasGSAP) {
    console.log('❌ GSAP manquant pour les accordéons')
    return
  }
  
  // Trouver tous les accordéons
  const accordions = document.querySelectorAll('.faq_accordion')
  if (!accordions.length) {
    console.log('❌ Aucun accordéon .faq_accordion trouvé')
    return
  }

  console.log(`✅ Accordions trouvés: ${accordions.length}`)

  // Setup initial pour tous (batch operation)
  const answers = []
  const icons = []
  
  accordions.forEach(accordion => {
    const question = accordion.querySelector('.faq_question')
    const answer = accordion.querySelector('.faq_answer')
    const icon = accordion.querySelector('.faq_icon')
    
    if (!question || !answer) {
      console.log('⚠ Accordéon incomplet ignoré')
      return
    }
    
    // Collecter pour batch GSAP
    answers.push(answer)
    if (icon) icons.push(icon)
    
    // Accessibilité
    question.setAttribute('aria-expanded', 'false')
    answer.setAttribute('aria-hidden', 'true')
    question.setAttribute('tabindex', '0') // Navigation clavier
    
    // Event listeners
    question.addEventListener('click', () => toggleAccordion(accordion, answer, icon, question))
    
    // Support navigation clavier
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        toggleAccordion(accordion, answer, icon, question)
      }
    })
  })
  
  // Batch GSAP initial (plus performant)
  gsap.set(answers, { height: 0, overflow: 'hidden' })
  gsap.set(icons, { rotate: 0 })
  
  console.log('✅ FAQ Accordion - Module initialisé avec succès')
}

// Toggle accordion optimisé
function toggleAccordion(accordion, answer, icon, question) {
  const isOpen = accordion.classList.contains('is-open')
  
  console.log(`🔧 Accordion ${isOpen ? 'fermeture' : 'ouverture'}`)
  
  if (isOpen) {
    // Fermer
    accordion.classList.remove('is-open')
    gsap.to(answer, { 
      height: 0, 
      duration: 0.3,
      ease: "power2.inOut"
    })
    if (icon) {
      gsap.to(icon, { 
        rotate: 0, 
        duration: 0.3,
        ease: "power2.inOut"
      })
    }
    question.setAttribute('aria-expanded', 'false')
    answer.setAttribute('aria-hidden', 'true')
  } else {
    // Fermer tous les autres accordéons (optionnel)
    closeOtherAccordions(accordion)
    
    // Ouvrir
    accordion.classList.add('is-open')
    gsap.to(answer, { 
      height: 'auto', 
      duration: 0.4,
      ease: "power2.out"
    })
    if (icon) {
      gsap.to(icon, { 
        rotate: -180, 
        duration: 0.4,
        ease: "power2.out"
      })
    }
    question.setAttribute('aria-expanded', 'true')
    answer.setAttribute('aria-hidden', 'false')
  }
}

// Fermer les autres accordéons (comportement exclusif)
function closeOtherAccordions(currentAccordion) {
  const allAccordions = document.querySelectorAll('.faq_accordion.is-open')
  
  allAccordions.forEach(accordion => {
    if (accordion === currentAccordion) return
    
    const question = accordion.querySelector('.faq_question')
    const answer = accordion.querySelector('.faq_answer')
    const icon = accordion.querySelector('.faq_icon')
    
    if (!question || !answer) return
    
    // Fermer
    accordion.classList.remove('is-open')
    gsap.to(answer, { 
      height: 0, 
      duration: 0.3,
      ease: "power2.inOut"
    })
    if (icon) {
      gsap.to(icon, { 
        rotate: 0, 
        duration: 0.3,
        ease: "power2.inOut"
      })
    }
    question.setAttribute('aria-expanded', 'false')
    answer.setAttribute('aria-hidden', 'true')
  })
}