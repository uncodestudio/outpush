// modules/faq-filters.js - Filtrage avec animations uniquement
export function init() {
  console.log('✅ FAQ Filters - Initialisation')
  
  // 1. Trouver la collection list des filtres
  const filtersCollection = document.querySelector('[us-element="filters"]');
  const itemsList = document.querySelector('[us-list-element="list"]');
  
  if (!filtersCollection || !itemsList) {
    console.log('❌ FAQ Filters - Éléments non trouvés')
    return
  }
  
  console.log('✅ FAQ Filters - Éléments trouvés')
  
  // 2. Trouver tous les boutons de filtre dans la collection
  const filterButtons = filtersCollection.querySelectorAll('[us-list-value]');
  const items = itemsList.querySelectorAll('[us-list-value]');
  
  if (!filterButtons.length || !items.length) {
    console.log('❌ FAQ Filters - Boutons ou items manquants')
    return
  }
  
  console.log(`✅ FAQ Filters - ${filterButtons.length} boutons, ${items.length} items`)
  
  // 3. Setup GSAP si disponible
  const hasGSAP = typeof window.gsap !== 'undefined'
  if (hasGSAP) {
    // Position initiale de la liste
    gsap.set(itemsList, { opacity: 1, y: 0 })
    console.log('✅ GSAP détecté - Animations activées')
  } else {
    console.log('⚠ GSAP manquant - Animations désactivées')
  }
  
  // Cache optimisé
  const buttonData = Array.from(filterButtons).map(btn => ({
    element: btn,
    value: btn.getAttribute('us-list-value') || ''
  }));
  
  const itemData = Array.from(items).map(item => ({
    element: item,
    value: item.getAttribute('us-list-value') || ''
  }));
  
  // Fonction d'animation de transition
  function animateFilterChange() {
    if (!hasGSAP) return Promise.resolve()
    
    console.log('🎬 Animation: fade out → changement → slide in')
    
    return new Promise((resolve) => {
      // 1. FADE OUT + SLIDE UP (disparition)
      gsap.to(itemsList, { 
        opacity: 0, 
        y: -20, 
        duration: 0.2, 
        ease: "power2.in",
        onComplete: () => {
          // 2. Le contenu changera ici (dans filter())
          // 3. SLIDE IN + FADE IN (apparition)
          gsap.fromTo(itemsList, 
            { opacity: 0, y: 30 }, // From
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.4, 
              ease: "power2.out",
              onComplete: resolve
            }
          )
        }
      })
    })
  }
  
  // Fonction de filtrage avec animation
  async function filter(targetValue, activeButton, animate = true) {
    const showAll = !targetValue || targetValue === 'all';
    console.log(`🔧 FAQ Filters - Filtrage: ${targetValue || 'all'}`)
    
    // Animation de transition si demandée
    if (animate && hasGSAP) {
      // 1. Fade out + slide up
      await new Promise((resolve) => {
        gsap.to(itemsList, { 
          opacity: 0, 
          y: -20, 
          duration: 0.2, 
          ease: "power2.in",
          onComplete: resolve
        })
      })
    }
    
    // 2. Filtrage des items (pendant que c'est invisible)
    let visibleCount = 0
    for (let i = 0; i < itemData.length; i++) {
      const item = itemData[i];
      const show = showAll || item.value === targetValue;
      item.element.style.display = show ? '' : 'none';
      if (show) visibleCount++
    }
    
    console.log(`✅ FAQ Filters - ${visibleCount} items visibles`)
    
    // Mise à jour des états des boutons filtres
    for (let i = 0; i < buttonData.length; i++) {
      const btn = buttonData[i].element;
      const isActive = btn === activeButton;
      
      // Ajouter/retirer la classe is-active
      btn.classList.toggle('is-active', isActive);
      
      // Ajouter l'attribut checked pour l'état sélectionné
      if (isActive) {
        btn.setAttribute('data-checked', 'true');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.removeAttribute('data-checked');
        btn.setAttribute('aria-pressed', 'false');
      }
    }
    
    // 3. Slide in + fade in (après le changement)
    if (animate && hasGSAP) {
      gsap.fromTo(itemsList, 
        { opacity: 0, y: 30 }, // From
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          ease: "power2.out"
        }
      )
    }
  }
  
  // Event delegation sur la collection des filtres
  filtersCollection.addEventListener('click', function(e) {
    const button = e.target.closest('[us-list-value]');
    if (!button) return;
    
    e.preventDefault();
    const value = button.getAttribute('us-list-value') || '';
    console.log(`🎯 FAQ Filters - Click sur: ${value}`)
    filter(value, button, true) // Avec animation
  });
  
  // Navigation clavier
  filtersCollection.addEventListener('keydown', function(e) {
    const button = e.target.closest('[us-list-value]');
    if (!button) return;
    
    const buttons = Array.from(filtersCollection.querySelectorAll('[us-list-value]'));
    const currentIndex = buttons.indexOf(button);
    let nextIndex;
    
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        nextIndex = (currentIndex + 1) % buttons.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        const value = button.getAttribute('us-list-value') || '';
        filter(value, button, true); // Avec animation
        return;
      default:
        return;
    }
    
    if (nextIndex !== undefined) {
      buttons[nextIndex].focus();
    }
  });
  
  // Initialisation - activer le premier bouton ou celui avec is-active
  const activeButton = filtersCollection.querySelector('[us-list-value].is-active') || 
                      filtersCollection.querySelector('[us-list-value]');
  
  if (activeButton) {
    const value = activeButton.getAttribute('us-list-value') || '';
    console.log(`🎯 FAQ Filters - Initialisation avec: ${value}`)
    filter(value, activeButton, false) // Sans animation à l'init
  }
  
  console.log('✅ FAQ Filters - Module initialisé avec succès')
}