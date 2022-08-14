//1. Function from 1 to 100

for (let i = 0; i < 100; i++) {
  console.log(i);
  if (i / 3) {
    console.log('This divisible by 3');
  }
  if (i / 5) {
    console.log('This divisible by 5');
  }
  if (i / 3 && i / 5) {
    console.log('Jackpot');
  }
  if (i % 2 == 0) {
    console.log('The number is devisible');
  }
}
//2. DOM manipulation
let button = document.createElement('button');
button.innerHTML = 'Click me';
let body = document.getElementsByTagName('body');
document.body.appendChild(button);

button.addEventListener('click', () => {
  let img = document.createElement('img');
  //let div = document.createElement('div');
  img.src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg';
  document.body.appendChild(img);
  img.style.width = '300px';
  console.log(img);
});

//Async API calls
const url = 'https://reqres.in/api/users';
const div = document.createElement('div');
div.id = 'firstname';
document.body.appendChild(div);
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data);
    data.data.forEach((item) => {
      let h1 = document.createElement('h1');
      h1.innerHTML = item.first_name;
      document.body.appendChild(h1);
      console.log(h1);
    });
  });

//Classes
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  logProduct() {
    console.log(`${this.name} is ${this.price} kr`);
  }
}
const table = new Product('Table', 1200);
table.logProduct(); // 'Table costs 1200 kr'
