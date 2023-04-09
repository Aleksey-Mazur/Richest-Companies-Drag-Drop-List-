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

createList();

//================ Insert list items to the DOM ==================
function createList() {
  [...richestCompanies]
    .map(company => ({ value: company, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(company => company.value)
    .forEach((company, index) => {
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

  addEventListeners();
}

//================ Dragevent listeners==================
function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}

//================ Dragevents ==================
function dragStart() {
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}
