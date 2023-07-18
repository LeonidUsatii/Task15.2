// Реализовать страницу, на которой будет 1 кнопка. Нажатие на кнопку должно вызывать появление каритинки,
//которую вы должны получить, используя fetch и API сервера https://dog.ceo/api/breeds/image/random

const btn = document.getElementById('myBtn');
console.log(btn);
let url = 'https://dog.ceo/api/breeds/image/random';

function loadToDo() {
  let myObject = fetch(url);
  myObject.then((myObject) => {
    dataPromise = myObject.json();
    dataPromise.then((res) => {
      let url = res;
      const ListUl = document.getElementById('taskUl');
      const img = document.createElement('img');
      console.log(img);
      img.src = url.message;
      img.alt = 'pict';
      ListUl.append(img);
      img.classList.add('myImg');
    });
  });
}

btn.addEventListener('click', loadToDo);

