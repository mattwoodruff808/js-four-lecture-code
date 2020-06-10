// const name = 'Matt';
// console.log(name)

const headingOne = document.querySelector('h1');
headingOne.style = 'color: red; text-decoraction: underline;'

const paragraph = document.getElementById('some-text');
// console.log(paragraph)
// console.log(paragraph.innerText);
paragraph.innerText = 'I am new text given by JS';
paragraph.className = 'some-class';
// console.log(paragraph.className)

paragraph.classList.add('new-class');
// console.log(paragraph.className)

paragraph.classList.remove('new-class');
// console.log(paragraph.className)

paragraph.classList.toggle('new-class');
// console.log(paragraph.className)


const unorderedList = document.getElementById('unordered-list');
// console.log(unorderedList.innerHTML)
unorderedList.innerHTML = `<li>I'm a new item</li>`;

const listItems = document.getElementsByTagName('li');
// console.log(listItems);

const heading = document.querySelector('h3');
// console.log(heading);

const classItems = document.querySelectorAll('.ordered-item');
// console.log(classItems);

const someInput = document.getElementById('some-input');
// console.log(someInput.value);
let inputValue = '';

const userInputDisplay = document.getElementById('user-input');

someInput.addEventListener('keypress', function(event){
    inputValue = event.target.value;
    userInputDisplay.innerText = inputValue;
})

someInput.setAttribute('placeholder', 'New Placeholder');
console.log(someInput.getAttribute('placeholder'));


function clickMe(){
    console.log("I've been clicked")
}

document.querySelector('#child').addEventListener('click', function(event){
    event.stopPropagation();
    console.log('Child Button has been clicked')
})

// console.log(document.querySelector('#child').parentNode)

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Default event prevented')
})

const newElement = document.createElement('h1');
newElement.innerText = 'I am a brand new element!';

document.body.appendChild(newElement);
newElement.remove();


// MINI PROJECT CODE //

const todoInput = document.getElementById('todo-input');
let todoInputValue = '';

todoInput.addEventListener('change', function(event){
    todoInputValue = event.target.value;
});

function createTodo(){
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInputValue;

    newTodo.addEventListener('click', function(){
        newTodo.remove();
    })

    document.querySelector('#task-list').appendChild(newTodo);
    todoInput.value = '';
    todoInputValue = '';
}