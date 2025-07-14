// Module Horizontal Slide Animation
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

  // Calculer la distance de slide nécessaire
  const wrapperWidth = wrapper.offsetWidth
  const layoutWidth = layout.offsetWidth
  const slideDistance = layoutWidth - wrapperWidth

  console.log(`📏 Wrapper: ${wrapperWidth}px, Layout: ${layoutWidth}px, Distance: ${slideDistance}px`)

  // Position initiale : layout aligné à gauche du wrapper
  gsap.set(layout, { x: 0 })

  // Animation ScrollTrigger
  ScrollTrigger.create({
    trigger: wrapper,
    start: "bottom bottom", // Animation commence quand bottom screen atteint bottom wrapper
    end: "top 10%",         // Animation finit quand top wrapper atteint 90% du screen (= 10% du top)
    scrub: 1,
    markers: false, // Debug
    id: "horizontal-slide",
    onUpdate: (self) => {
      const progress = self.progress
      
      // Calculer la position x selon le progress
      const currentX = -progress * slideDistance
      
      // Appliquer la transformation
      gsap.set(layout, { x: currentX })
      
      console.log(`Progress: ${Math.round(progress * 100)}%, X: ${Math.round(currentX)}px`)
    }
  })

  // Recalculer si la fenêtre change de taille
  window.addEventListener('resize', () => {
    const newWrapperWidth = wrapper.offsetWidth
    const newLayoutWidth = layout.offsetWidth
    const newSlideDistance = newLayoutWidth - newWrapperWidth
    
    console.log(`📏 Resize - Nouvelle distance: ${newSlideDistance}px`)
    
    // Refresh ScrollTrigger pour recalculer
    ScrollTrigger.refresh()
  })
}