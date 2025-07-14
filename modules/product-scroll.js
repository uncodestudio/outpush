// Module Product Features - Avec navigation par ancres
export function init() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.log('⚠ GSAP ou ScrollTrigger manquant')
    return
  }

  const container = document.querySelector('.section_product-features')
  const component = container?.querySelector('.product-features_component')
  const layout = container?.querySelector('.product-features_layout')
  const numberList = container?.querySelector('.product-features_icon-number-list')
  const contents = container?.querySelectorAll('.product-features_content')
  const buttons = document.querySelectorAll('.product-features_button')
  
  if (!container || !layout || !numberList || !contents.length) {
    console.log('⚠ Éléments manquants')
    return
  }

  console.log('✅ Product Features avec navigation initialisé')

  // Variables pour 6 sections
  let currentStep = -1
  let isNavigating = false
  const totalSteps = 6
  const elementsToMove = [layout, numberList]
  let scrollTriggerInstance = null
  
  // Setup initial simplifié
  gsap.set(elementsToMove, { y: 0, force3D: true })

  // Timeline principale adaptée pour 6 sections
  const mainTimeline = gsap.timeline({ paused: true })
    .to(elementsToMove, { y: -340, duration: 0.15, ease: "none" })
    .to(elementsToMove, { y: -340, duration: 0.1, ease: "none" })
    .to(elementsToMove, { y: -680, duration: 0.15, ease: "none" })
    .to(elementsToMove, { y: -680, duration: 0.1, ease: "none" })
    .to(elementsToMove, { y: -1020, duration: 0.15, ease: "none" })
    .to(elementsToMove, { y: -1020, duration: 0.1, ease: "none" })
    .to(elementsToMove, { y: -1360, duration:0.15, ease: "none" })
    .to(elementsToMove, { y: -1360, duration: 0.1, ease: "none" })
    .to(elementsToMove, { y: -1700, duration: 0.15, ease: "none" })
    .to(elementsToMove, { y: -1700, duration: 0.1, ease: "none" })
    .to(elementsToMove, { y: -2040, duration: 0.15, ease: "none" })

  // 🔧 MAPPING DES ANCRES VERS LES ÉTAPES
  const anchorToStep = {
    'deployment': 0,
    'rss-to-push': 1,
    'campaign': 2,
    'api': 3,
    'metrics': 4,
    'segmentation': 5
  }

  // Points de progression affinés
  const stepProgressions = [
    0,       // Étape 0: Deployment
    0.175,   // Étape 1: RSS-to-Push
    0.35,    // Étape 2: Campaign  
    0.525,   // Étape 3: API
    0.7,     // Étape 4: Metrics
    0.875,   // Étape 5: Segmentation
  ]

  // Fonction de mise à jour étape
  const updateStep = (newStep) => {
    if (newStep === currentStep) return
    
    currentStep = newStep
    updateActiveButton(newStep)
  }

  // Update boutons actifs
  const updateActiveButton = (stepIndex) => {
    buttons.forEach((button, index) => {
      if (index === stepIndex) {
        button.classList.add('is-active')
      } else {
        button.classList.remove('is-active')
      }
    })
  }

  // Navigation directe vers une étape
  const navigateToStep = (targetStep) => {
    if (targetStep < 0 || targetStep >= totalSteps) return
    
    isNavigating = true
    const targetProgress = stepProgressions[targetStep] || 0
    
    // Animer vers la position exacte
    gsap.to(mainTimeline, {
      progress: targetProgress,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        isNavigating = false
      }
    })
    
    // Update immédiat des états
    updateStep(targetStep)
    
    console.log(`📍 Navigation vers étape ${targetStep + 1}`)
  }

  // 🎯 FONCTION POUR NAVIGUER VERS UNE SECTION
  const navigateToSection = (sectionId) => {
    const stepIndex = anchorToStep[sectionId]
    if (stepIndex !== undefined) {
      // Calculer la position scroll de la section
      const containerRect = container.getBoundingClientRect()
      const containerTop = window.pageYOffset + containerRect.top
      
      // Scroll vers la section d'abord
      window.scrollTo({
        top: containerTop,
        behavior: 'smooth'
      })
      
      // Puis naviguer vers l'étape après un petit délai
      setTimeout(() => {
        navigateToStep(stepIndex)
      }, 500)
      
      console.log(`🔗 Navigation vers section: ${sectionId} (étape ${stepIndex})`)
    }
  }

  // 🎯 ÉCOUTER LES CHANGEMENTS D'ANCRE
  const handleHashChange = () => {
    const hash = window.location.hash.replace('#', '')
    if (anchorToStep.hasOwnProperty(hash)) {
      navigateToSection(hash)
    }
  }

  // 🎯 VÉRIFIER L'ANCRE AU CHARGEMENT
  const checkInitialHash = () => {
    const hash = window.location.hash.replace('#', '')
    if (anchorToStep.hasOwnProperty(hash)) {
      const targetStep = anchorToStep[hash]
      
      // Attendre que tout soit initialisé
      setTimeout(() => {
        // Scroll vers la section
        const containerRect = container.getBoundingClientRect()
        const containerTop = window.pageYOffset + containerRect.top
        
        window.scrollTo({
          top: containerTop,
          behavior: 'auto' // Pas d'animation au chargement
        })
        
        // Puis naviguer vers l'étape
        setTimeout(() => {
          navigateToStep(targetStep)
        }, 100)
        
      }, 200)
      
      console.log(`🔗 Navigation initiale vers: ${hash} (étape ${targetStep})`)
    }
  }

  // Navigation par boutons
  buttons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      navigateToStep(index)
    })
  })

  // ScrollTrigger avec gestion navigation
  scrollTriggerInstance = ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: component,
    markers: false,
    id: "product-features-scroll",
    animation: mainTimeline,
    onUpdate: (self) => {
      // Ignorer updates pendant navigation
      if (isNavigating) return
      
      const newStep = Math.floor(self.progress * totalSteps)
      const clampedStep = Math.min(newStep, totalSteps - 1)
      
      if (clampedStep !== currentStep) {
        updateStep(clampedStep)
      }
    }
  })

  // 🎯 EVENT LISTENERS POUR LES ANCRES
  window.addEventListener('hashchange', handleHashChange)
  
  // 🎯 ÉCOUTER LES CLICS SUR LES LIENS DE NAVIGATION
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]')
    if (link) {
      const hash = link.getAttribute('href').replace('#', '')
      if (anchorToStep.hasOwnProperty(hash)) {
        e.preventDefault()
        navigateToSection(hash)
        
        // Mettre à jour l'URL sans déclencher hashchange
        history.pushState(null, null, `#${hash}`)
      }
    }
  })

  // Initialiser le premier bouton actif
  updateActiveButton(0)
  
  // Vérifier l'ancre initiale
  checkInitialHash()

  // 🎯 EXPOSER LA FONCTION NAVIGATE GLOBALEMENT (optionnel)
  window.navigateToProductFeature = navigateToSection
}