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
    [...richestPeople].forEach((person, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `
            <span className="number">${index + 1}</span>
            <div className="draggable" draggable="true">
                <p className="person-name">${person}</p>
                <i className="fas fa-grip-lines"></i>
            </div>
        `;

        listItems.push(listItem);
        draggable_list.appendChild(listItem);
    })
}