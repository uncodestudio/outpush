// Module Text Marquee - Version ultra-optimisée
export function init() {
  if (typeof gsap === 'undefined') return
  
  document.querySelectorAll('.marquee').forEach(marquee => {
    const content = marquee.firstElementChild
    if (!content) return
    
    // Duplication pour boucle infinie
    content.innerHTML += content.innerHTML
    
    // Respect prefers-reduced-motion
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    
    // Animation + pause au hover
    const tl = gsap.to(content, {
      xPercent: -50,
      duration: +marquee.dataset.speed || 15,
      ease: "none",
      repeat: -1,
      paused: false
    })
    
    marquee.onmouseenter = () => tl.pause()
    marquee.onmouseleave = () => tl.play()
  })
}