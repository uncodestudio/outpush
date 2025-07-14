// Module Splide Slider - Other Articles
export function init() {
  // Vérifier que Splide est disponible globalement
  if (typeof window.Splide === 'undefined') {
    console.error('❌ Splide non trouvé - Ajouter le script Splide')
    return
  }

  const testimonialSliders = document.querySelectorAll('.other-articles')
  
  if (!testimonialSliders.length) {
    console.log('⚠ Aucun slider .other-articles')
    return
  }

  console.log('✅ Splide other-articles initialisé')

  testimonialSliders.forEach(slider => {
    new window.Splide(slider, {
      // Configuration témoignages
      type: 'slide',           // slides
      perPage: 1.5,            // 3 témoignages visibles
      perMove: 1,            // Avance de 1 témoignage
      gap: '1.5rem',         // Gap de 1.5rem
      
      // Navigation
      arrows: true,          // Flèches actives
      pagination: false,     // Pas de pagination
      
      // Responsive pour témoignages
      breakpoints: {
        991: {               // Tablet
          perPage: 1.25,
          gap: '1rem'
        },
        767: {               // Mobile
          perPage: 1.2,
          gap: '0.5rem'
        }
      },
      
      // Options témoignages
      speed: 600,            // Vitesse transition
      easing: 'ease',        // Courbe d'animation
      autoWidth: false,      // Largeur automatique désactivée
      focus: 'left',       // Focus au centre
      trimSpace: true,      // Garde l'espace
      
      // Accessibilité témoignages
      ariaLabel: 'Slider articles',
      i18n: {
        prev: 'Article précédent',
        next: 'Article suivant'
      }
    }).mount()
  })
}