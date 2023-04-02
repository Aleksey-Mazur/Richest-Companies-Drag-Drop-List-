const richestCompanies = [
  'APPLE',
  'MICROSOFT',
  'ARAMCO',
  'ALPHABET (GOOGLE)',
  'AMAZON',
  'BERKSHIRE HATHAWAY',
  'UNITEDHEALTH',
  'JOHNSON & JOHNSON',
  'TESLA',
  'VISA',
];

const draggableList = document.getElementById('draggable-list');
const checkBtn = document.getElementById('check');

const listItems = [];
let dragStartIndex;

const createList = () => {
  [...richestCompanies].forEach((company, index) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-index', index);

    listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="company-name">${company}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
    `;

    listItems.push(listItem);
    draggableList.appendChild(listItem);
  });
};

createList();
