import { pages } from './config.js'

// Import direct du module (pas dynamique)
import { init as faqAccordionInit } from './modules/faq-accordion.js'

const moduleMap = {
  'faq-accordion': faqAccordionInit
}

function loadModule(name) {
  try {
    console.log(`📦 Chargement module: ${name}`)
    
    const moduleInit = moduleMap[name]
    if (!moduleInit) {
      throw new Error(`Module ${name} non configuré`)
    }
    
    moduleInit()
    console.log(`✅ Module ${name} initialisé`)
  } catch (error) {
    console.error(`❌ Erreur module ${name}:`, error)
  }
}

function initApp() {
  const page = document.body.dataset.page
  
  if (!page) {
    console.warn('⚠️ Ajoute data-page="..." sur le body dans Webflow')
    return
  }
  
  const modules = pages[page]
  
  if (!modules) {
    console.log(`📄 Page "${page}" : aucun module configuré`)
    return
  }
  
  console.log(`🎯 Page: ${page} | Modules: ${modules.join(', ')}`)
  modules.forEach(loadModule)
}

document.addEventListener('DOMContentLoaded', initApp)