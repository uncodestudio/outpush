// Module Text Marquee - Fix mobile simple
export function init() {
  if (typeof gsap === 'undefined') return
  
  const initMarquees = () => {
    document.querySelectorAll('.marquee').forEach(marquee => {
      const content = marquee.firstElementChild
      if (!content) return
      
      content.innerHTML += content.innerHTML
      
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
      
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

  // Délai selon l'écran
  const delay = window.innerWidth < 768 ? 1000 : 0
  setTimeout(initMarquees, delay)
}