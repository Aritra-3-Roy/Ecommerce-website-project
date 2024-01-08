const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const itemClear = document.getElementById('clear');

// Function to add item
function addItem(e){
    e.preventDefault();

    const newItem = itemInput.value;

    if(newItem === '')
    {
        alert("Please add item");
        return;
    }
    const list = document.createElement('li');
    list.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    list.appendChild(button);

    itemList.appendChild(list);

    itemInput.value = '';
}

// Function to create button
function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

// Function to create icon
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

// Function to remove items
function removeItem(e) {
    if(e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

// Function to clear all items
function clearAll() {
    itemList.innerHTML = '';
}

// Adding items
itemForm.addEventListener('submit',addItem);

// Removing items
itemList.addEventListener('click',removeItem);

// Clear all items
itemClear.addEventListener('click', clearAll);



