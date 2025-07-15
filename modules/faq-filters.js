(function() {
  'use strict';
  
  // 1. Trouver la collection list des filtres
  const filtersCollection = document.querySelector('[us-element="filters"]');
  const itemsList = document.querySelector('[us-list-element="list"]');
  
  if (!filtersCollection || !itemsList) return;
  
  // 2. Trouver tous les boutons de filtre dans la collection
  const filterButtons = filtersCollection.querySelectorAll('[us-list-value]');
  const items = itemsList.querySelectorAll('[us-list-value]');
  
  if (!filterButtons.length || !items.length) return;
  
  // Cache optimisé
  const buttonData = Array.from(filterButtons).map(btn => ({
    element: btn,
    value: btn.getAttribute('us-list-value') || ''
  }));
  
  const itemData = Array.from(items).map(item => ({
    element: item,
    value: item.getAttribute('us-list-value') || ''
  }));
  
  // Fonction de filtrage
  function filter(targetValue, activeButton) {
    const showAll = !targetValue || targetValue === 'all';
    
    // Filtrage des items
    for (let i = 0; i < itemData.length; i++) {
      const item = itemData[i];
      const show = showAll || item.value === targetValue;
      item.element.style.display = show ? '' : 'none';
    }
    
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
  }
  
  // Event delegation sur la collection des filtres
  filtersCollection.addEventListener('click', function(e) {
    const button = e.target.closest('[us-list-value]');
    if (!button) return;
    
    e.preventDefault();
    const value = button.getAttribute('us-list-value') || '';
    filter(value, button);
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
        filter(value, button);
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
    filter(value, activeButton);
  }
  
})();