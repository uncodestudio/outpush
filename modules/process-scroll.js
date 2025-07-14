// Module Process Scroll Animation - ULTRA optimisé
export function init() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.log('⚠ GSAP ou ScrollTrigger manquant')
    return
  }

  const container = document.querySelector('.section_home-process')
  const component = container?.querySelector('.home-process_component')
  const layout = container?.querySelector('.home-process_layout')
  const numberList = container?.querySelector('.home-process_icon-number-list')
  const contents = container?.querySelectorAll('.home-process_content')
  
  if (!container || !layout || !numberList || !contents.length) {
    console.log('⚠ Éléments manquants')
    return
  }

  console.log('✅ Process ultra-optimisé')

  // Variables pré-calculées
  let currentStep = -1
  const elementsToMove = [layout, numberList]
  const contentsArray = Array.from(contents) // Conversion une seule fois
  
  // Pré-créer les animations d'opacity (pas de re-création)
  const opacityAnimations = contentsArray.map(content => ({
    element: content,
    fadeIn: gsap.to(content, { opacity: 1, duration: 0.6, ease: "power2.out", paused: true }),
    fadeOut: gsap.to(content, { opacity: 0.3, duration: 0.6, ease: "power2.out", paused: true })
  }))

  // Setup initial optimisé
  gsap.set(elementsToMove, { y: 0, force3D: true }) // Force GPU
  gsap.set(contentsArray, { opacity: 0.3, force3D: true })
  gsap.set(contentsArray[0], { opacity: 1 })

  // Animation principale avec timeline pré-construite
  const mainTimeline = gsap.timeline({ paused: true })
    .to(elementsToMove, { y: -340, duration: 0.2, ease: "none" })
    .to(elementsToMove, { y: -340, duration: 0.15, ease: "none" })
    .to(elementsToMove, { y: -680, duration: 0.2, ease: "none" })
    .to(elementsToMove, { y: -680, duration: 0.15, ease: "none" })
    .to(elementsToMove, { y: -1020, duration: 0.2, ease: "none" })
    .to(elementsToMove, { y: -1020, duration: 0.15, ease: "none" })
    .to(elementsToMove, { y: -1360, duration: 0.1, ease: "none" })
    .to(elementsToMove, { y: -1360, duration: 0.15, ease: "none" })

  // Fonction optimisée de changement d'étape
  const updateOpacity = (newStep) => {
    // Stop toutes les animations en cours
    opacityAnimations.forEach(anim => {
      anim.fadeIn.pause()
      anim.fadeOut.pause()
    })
    
    // Lancer les bonnes animations
    opacityAnimations.forEach((anim, index) => {
      if (index === newStep) {
        anim.fadeIn.restart()
      } else {
        anim.fadeOut.restart()
      }
    })
  }

  // ScrollTrigger optimisé
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
      const newStep = (self.progress * 5) | 0 // Bitwise plus rapide que Math.floor
      
      if (newStep !== currentStep) {
        currentStep = newStep
        updateOpacity(newStep)
      }
    }
  })
}