import 'bootstrap/dist/css/bootstrap.css';

// on importe directement les deux composants
import './slot-grid/x-slot-grid';
import './slot-form/x-slot-form';

const init = () => {
  const slots = { 1: [], 2: [], 3: [], 4: [] };
  const grid = document.querySelector('x-slot-grid');

  document
    .querySelector('x-slot-form')
    .addEventListener('add-slot', event => {
      slots[event.detail.slot].push(event.detail.name);
      grid.setAttribute('data', JSON.stringify(slots));
    }, true);
};

init();
