const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
];

const listItems =  [];

let dragStartIndex;

createList();

function createList() {
    [...richestPeople]
        .map(a => ({value: a, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((person, index) => {
            const listItem = document.createElement('li');
            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
                <span class="number">${index + 1}</span>
                <div class="draggable" draggable="true">
                    <p class="person-name">${person}</p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `;

        listItems.push(listItem);
        draggable_list.appendChild(listItem);
        addEventListeners();
    })
}

function dragStart() {
    // console.log('Event: ', 'dragStart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    console.log(dragStartIndex);
}

function dragEnter() {
    // console.log('Event: ', 'dragEnter');
    this.classList.add('over');
}

function dragLeave() {
    // console.log('Event: ', 'dragLeave');
    this.classList.remove('over');
}

function dragOver(e) {
    // console.log('Event: ', 'dragOver');
    e.preventDefault();
}

function dragDrop() {
    // console.log('Event: ', 'dragDrop');
    dragEndIndex = +this.getAttribute('data-index');
    console.log(dragEndIndex);
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const draggListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart)
    });
    
    draggListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    });
}