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
  [...richestCompanies]
    .map(company => ({ value: company, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(company => company.value)
    .forEach((company, index) => {
      console.log(company);

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
