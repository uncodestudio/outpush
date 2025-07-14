// Module Text Reveal Animation - Solution finale mobile
export function init() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.log('⚠ GSAP ou ScrollTrigger manquant')
    return
  }

  const textElements = document.querySelectorAll('.home-with-us_h2')
  
  if (!textElements.length) {
    console.log('⚠ Aucun élément .home-with-us_h2 trouvé')
    return
  }

  console.log('✅ Text Reveal Animation initialisé')

  // Utiliser ScrollTrigger.batch pour gérer plusieurs éléments
  ScrollTrigger.batch('.home-with-us_h2', {
    onEnter: (elements) => {
      // Délai pour laisser le temps au layout de se stabiliser
      setTimeout(() => {
        elements.forEach((element, index) => {
          // Délai échelonné pour éviter les conflits
          setTimeout(() => {
            setupTextAnimation(element)
          }, index * 100)
        })
      }, 500) // Délai plus important pour mobile
    },
    start: "top 80%", // Plus tôt pour compenser le délai
    once: true // Une seule fois
  })
}

function setupTextAnimation(element) {
  // Vérifier que l'élément n'a pas déjà été traité
  if (element.classList.contains('text-animated')) {
    return
  }
  
  element.classList.add('text-animated')
  
  // Fonction de split selon disponibilité
  let letters
  
  if (typeof SplitText !== 'undefined') {
    const splitText = new SplitText(element, {
      type: "chars",
      charsClass: "letter"
    })
    letters = splitText.chars
  } else {
    // Split manuel
    const originalText = element.textContent
    const lettersHTML = originalText.split('').map(char => {
      if (char === ' ') return '<span class="letter">&nbsp;</span>'
      return `<span class="letter">${char}</span>`
    })
    
    element.innerHTML = lettersHTML.join('')
    letters = element.querySelectorAll('.letter')
  }
  
  // État initial
  gsap.set(letters, { opacity: 0.2 })
  
  // ScrollTrigger avec un délai supplémentaire
  setTimeout(() => {
    ScrollTrigger.create({
      trigger: element,
      start: "bottom bottom",
      end: "top center",
      scrub: 1,
      markers: false,
      id: `text-reveal-${Date.now()}-${Math.random()}`,
      refreshPriority: -1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress
        const totalLetters = letters.length
        const visibleLetters = Math.floor(progress * totalLetters)
        
        letters.forEach((letter, index) => {
          gsap.to(letter, { 
            opacity: index <= visibleLetters ? 1 : 0.2,
            duration: 0.1,
            ease: "none"
          })
        })
      }
    })
  }, 200) // Délai avant création ScrollTrigger
}