export function init() {
  // Vérifier que Splide est disponible globalement
  if (typeof window.Splide === 'undefined') {
    console.error('❌ Splide non trouvé - Ajouter le script Splide')
    return
  }

  const testimonialSliders = document.querySelectorAll('.splide.testimonial-slider')
  
  if (!testimonialSliders.length) {
    console.log('⚠ Aucun slider .testimonial-slider trouvé')
    return
  }

  console.log('✅ Splide Testimonial Slider initialisé')

  testimonialSliders.forEach(slider => {
    new window.Splide(slider, {
      // Configuration témoignages - FIX LOOP
      type: 'loop',           
      perPage: 3,            
      perMove: 1,            // ← IMPORTANT : toujours 1
      gap: '1.5rem',         
      
      // Navigation
      arrows: true,          
      pagination: false,     
      
      // Options CRITIQUES pour fix loop
      clones: 3,             // ← Force le nombre de clones
      cloneStatus: false,    // ← Désactive le status des clones
      
      // Responsive pour témoignages
      breakpoints: {
        991: {               
          perPage: 2,
          gap: '1rem',
          clones: 2          // ← Adapter aux clones
        },
        767: {               
          perPage: 1,        // ← 1 au lieu de 1.2 pour loop
          gap: '0.5rem',
          clones: 1          // ← 1 clone sur mobile
        }
      },
      
      // Options témoignages
      speed: 600,            
      easing: 'ease',        
      autoWidth: false,      
      focus: 'center',       
      trimSpace: false,      
      
      // FIX pour le loop mobile
      drag: true,            // ← Force le drag
      snap: true,            // ← Snap aux positions
      
      // Accessibilité témoignages
      ariaLabel: 'Slider témoignages clients',
      i18n: {
        prev: 'Témoignage précédent',
        next: 'Témoignage suivant'
      }
    }).mount()
  })
}