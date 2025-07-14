// Module Horizontal Slide Animation - Fix définitif lazy loading
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

  // Fonction pour créer l'animation quand tout est stabilisé
  const createScrollTrigger = () => {
    // Attendre que la page soit stable
    setTimeout(() => {
      const wrapperWidth = wrapper.offsetWidth
      const layoutWidth = layout.offsetWidth
      const slideDistance = Math.max(0, layoutWidth - wrapperWidth)
      
      console.log(`📏 Animation créée - Distance: ${slideDistance}px`)
      
      // Supprimer ancien ScrollTrigger s'il existe
      ScrollTrigger.getById("horizontal-slide")?.kill()
      
      // Créer nouveau ScrollTrigger avec positions correctes
      ScrollTrigger.create({
        trigger: wrapper,
        start: "bottom bottom",
        end: "top 10%",
        scrub: 1,
        markers: false, // Pour debug
        id: "horizontal-slide",
        onUpdate: (self) => {
          const progress = self.progress
          const currentX = -progress * slideDistance
          
          gsap.set(layout, { 
            x: currentX, 
            force3D: true 
          })
        }
      })
    }, 500) // Délai plus long pour stabilisation
  }

  // Intersection Observer pour détecter quand la section arrive
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
        console.log('🎯 Section visible, création ScrollTrigger...')
        createScrollTrigger()
        observer.disconnect() // Une seule création
      }
    })
  }, {
    rootMargin: '200px 0px' // Détecter 200px avant
  })

  observer.observe(wrapper)

  // Fallback + resize
  let resizeTimeout
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      createScrollTrigger()
    }, 300)
  })
}