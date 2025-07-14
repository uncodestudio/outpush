// Module Horizontal Slide Animation - Version batch (comme text-reveal)
export function init() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.log('⚠ GSAP ou ScrollTrigger manquant')
    return
  }

  const wrapper = document.querySelector('.home-with-us_content-wrapper')
  const layout = document.querySelector('.home-with-us_content-layout')
  
  if (!wrapper || !layout) {
    console.log('⚠ Éléments manquants - wrapper ou layout')
    return
  }

  console.log('✅ Horizontal Slide Animation initialisé')

  // Position initiale
  gsap.set(layout, { x: 0, force3D: true })

  // Utiliser ScrollTrigger.batch comme le text-reveal qui marche
  ScrollTrigger.batch('.home-with-us_content-wrapper', {
    onEnter: (elements) => {
      // Même délai que text-reveal qui marche
      setTimeout(() => {
        elements.forEach((element) => {
          setupHorizontalAnimation(element)
        })
      }, 500) // Même délai que text-reveal
    },
    start: "top 80%", // Même trigger que text-reveal
    once: true
  })
}

function setupHorizontalAnimation(wrapper) {
  // Vérifier que l'animation n'a pas déjà été créée
  if (wrapper.classList.contains('horizontal-animated')) {
    return
  }
  
  wrapper.classList.add('horizontal-animated')
  
  const layout = wrapper.querySelector('.home-with-us_content-layout')
  if (!layout) return
  
  // Délai supplémentaire comme text-reveal
  setTimeout(() => {
    const wrapperWidth = wrapper.offsetWidth
    const layoutWidth = layout.offsetWidth
    const slideDistance = Math.max(0, layoutWidth - wrapperWidth)
    
    console.log(`📏 Animation créée - Distance: ${slideDistance}px`)
    
    // Supprimer ancien ScrollTrigger s'il existe
    ScrollTrigger.getById("horizontal-slide")?.kill()
    
    // Créer ScrollTrigger
    ScrollTrigger.create({
      trigger: wrapper,
      start: "bottom bottom",
      end: "top 10%",
      scrub: 1,
      markers: false,
      id: `horizontal-slide-${Date.now()}`, // ID unique comme text-reveal
      refreshPriority: -1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress
        const currentX = -progress * slideDistance
        
        gsap.set(layout, { 
          x: currentX, 
          force3D: true 
        })
      }
    })
  }, 200) // Même délai que text-reveal
}