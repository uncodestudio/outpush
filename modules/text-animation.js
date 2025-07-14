// Module Text Reveal Animation - Avec SplitText GSAP
export function init() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.log('⚠ GSAP ou ScrollTrigger manquant')
    return
  }

  // Vérifier SplitText (plugin GSAP)
  if (typeof SplitText === 'undefined') {
    console.log('⚠ SplitText GSAP manquant - utilisation du split manuel')
    return initWithManualSplit()
  }

  const textElements = document.querySelectorAll('.home-with-us_h2')
  
  if (!textElements.length) {
    console.log('⚠ Aucun élément .home-with-us_h2 trouvé')
    return
  }

  console.log('✅ Text Reveal Animation initialisé (SplitText)')

  textElements.forEach(element => {
    setupTextRevealGSAP(element)
  })
}

function setupTextRevealGSAP(element) {
  // SplitText GSAP - bien plus propre
  const splitText = new SplitText(element, {
    type: "chars", // Split par caractères
    charsClass: "letter" // Classe pour chaque lettre
  })
  
  const letters = splitText.chars
  
  // État initial : texte en opacity 0.2
  gsap.set(letters, { opacity: 0.2 })
  
  // Animation ScrollTrigger
  ScrollTrigger.create({
    trigger: element,
    start: "bottom bottom",
    end: "top center",
    scrub: 1,
    markers: false,
    id: "text-reveal",
    onUpdate: (self) => {
      const progress = self.progress
      const totalLetters = letters.length
      const visibleLetters = Math.floor(progress * totalLetters)
      
      // Animation optimisée avec GSAP
      letters.forEach((letter, index) => {
        gsap.to(letter, { 
          opacity: index <= visibleLetters ? 1 : 0.2,
          duration: 0.1,
          ease: "none"
        })
      })
    }
  })
}

// Fallback si SplitText pas disponible
function initWithManualSplit() {
  const textElements = document.querySelectorAll('.home-with-us_h2')
  
  textElements.forEach(element => {
    const originalText = element.textContent
    const letters = originalText.split('').map(char => {
      if (char === ' ') return '<span class="letter">&nbsp;</span>'
      return `<span class="letter">${char}</span>`
    })
    
    element.innerHTML = letters.join('')
    const letterElements = element.querySelectorAll('.letter')
    gsap.set(letterElements, { opacity: 0.2 })
    
    ScrollTrigger.create({
      trigger: element,
      start: "bottom bottom",
      end: "top center", 
      scrub: 1,
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress
        const visibleLetters = Math.floor(progress * letterElements.length)
        
        letterElements.forEach((letter, index) => {
          gsap.to(letter, { 
            opacity: index <= visibleLetters ? 1 : 0.2,
            duration: 0.1,
            ease: "none"
          })
        })
      }
    })
  })
}