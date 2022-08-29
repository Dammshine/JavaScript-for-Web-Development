/* console.dir(document)
// Examine the document object
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document);

document.title = "321";
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
let body = document.body.children[1].children[0].children[0];
body.textContent = "CHokle";


let forms = document.forms;
console.log(forms[0]);

let images = document.images;

// Selector, to query the dom
let id = document.getElementById("main-header");
console.log(id);
id.style.fontSize = '32px';

// Get elements by classname
// Gives error
let items = document.getElementsByClassName("list-group-item");
console.log(items);
items[1].textContent = "Hello2";

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'yellow';
} */


// Get element by tagname
/* let items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#f4f4f4";
}
var header = document.querySelector('#main-header');
header.style.borderBottom = '1px solid red';

var input = document.querySelector('input');
input.value = "Hello World!";

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND";

var item = document.querySelector('.list-group-item:last-child');
item.style.fontSize = "10px"; */

// Traverse the dom
/* let itemList = document.querySelector('#items'); */
// Parent node
/* console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode); */

/* console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentElement.parentElement) */;
/* console.log(itemList.children); */

var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e) {
  /* console.log('Button clicked');
  document.getElementById('header-title').textContent = 'Changed';
  document.querySelector('#main').style.backgroundColor = '#f4f4f4'; */
  console.log(e);
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.target.classList);

  var output = document.getElementById('output');
  output.innerHTML = '<h3>' + e.target.id + '</h3>';
}