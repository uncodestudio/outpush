console.log('🔍 DEBUT SCRIPT - Splide:', typeof window.Splide)

// Sauvegarder Splide au cas où
const originalSplide = window.Splide

import { pages } from './config.js'

// Import direct du module (pas dynamique)
import { init as faqAccordionInit } from './modules/faq-accordion.js'
import { init as marqueeSliderInit } from './modules/marquee-slider.js'
import { init as processScrollInit } from './modules/process-scroll.js'
import { init as splideTestimoniesInit } from './modules/splide-testimonies.js'
import { init as textAnimationInit } from './modules/text-animation.js'
import { init as textTranslateInit } from './modules/text-translate.js'
import { init as splideSuccessInit } from './modules/splide-success-stories.js'
import { init as productScrollInit } from './modules/product-scroll.js'
import { init as articlesSplideInit } from './modules/splide-other-articles.js'
import { init as faqFiltersInit } from './modules/faq-filters.js'

console.log('🔍 APRES IMPORTS - Splide:', typeof window.Splide)

// Helper pour les logs (supprimés en production)
const log = import.meta.env.DEV ? console.log : () => {}
const warn = import.meta.env.DEV ? console.warn : () => {}
const error = import.meta.env.DEV ? console.error : () => {}

console.log('🔍 APRES HELPERS - Splide:', typeof window.Splide)

const moduleMap = {
  'faq-accordion': faqAccordionInit,
  'marquee-slider': marqueeSliderInit,
  'process-scroll': processScrollInit,
  'splide-testimonies': splideTestimoniesInit,
  'text-animation': textAnimationInit,
  'text-translate': textTranslateInit,
  'splide-success': splideSuccessInit,
  'product-scroll': productScrollInit,
  'other-articles': articlesSplideInit,
  'faq-filters': faqFiltersInit
}

console.log('🔍 APRES MODULEMAP - Splide:', typeof window.Splide)

function loadModule(name) {
  try {
    log(`📦 Chargement module: ${name}`)
    
    const moduleInit = moduleMap[name]
    if (!moduleInit) {
      throw new Error(`Module ${name} non configuré`)
    }
    
    moduleInit()
    log(`✅ Module ${name} initialisé`)
  } catch (err) {
    error(`❌ Erreur module ${name}:`, err)
  }
}

function initApp() {
  console.log('🔍 DEBUT INITAPP - Splide:', typeof window.Splide)
  
  const page = document.body.dataset.page
  
  if (!page) {
    warn('⚠️ Ajoute data-page="..." sur le body dans Webflow')
    return
  }
  
  const modules = pages[page]
  
  if (!modules) {
    log(`📄 Page "${page}" : aucun module configuré`)
    return
  }
  
  log(`🎯 Page: ${page} | Modules: ${modules.join(', ')}`)
  modules.forEach(loadModule)
  
  console.log('🔍 FIN INITAPP - Splide:', typeof window.Splide)
}

document.addEventListener('DOMContentLoaded', initApp)

// Vérification finale
setTimeout(() => {
  console.log('🔍 FIN SCRIPT - Splide:', typeof window.Splide)
  if (typeof window.Splide === 'undefined' && originalSplide) {
    console.log('🚨 Splide a été écrasé ! Restauration...')
    window.Splide = originalSplide
    console.log('🔧 Splide restauré:', typeof window.Splide)
  }
}, 0)