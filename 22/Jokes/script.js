const API = "https://api.chucknorris.io/jokes";

const controller = (action) => fetch(action)
  .then(response => response.json())
  .then(data => data);

const categoryDiv = document.querySelector('#category');

controller(`${API}/categories`)
  .then(data => {
    data.forEach(category => {
      const label = document.createElement('label');
      const input = document.createElement('input');

      input.type = 'radio';
      input.name = 'jokeCategory';
      input.value = category;

      label.innerText = category;
      label.prepend(input);
      categoryDiv.append(label);
    })
  });

const formData = document.querySelector('.form');

// function renderJoke() {
//   const jokeCard = document.createElement('div');

//   formData.after(jokeCard);
// }

const obj = {
  random: () => controller(`${API}/random`),
  category: (choosenCategory) => controller(`${API}/random?category=${choosenCategory.toLowerCase()}`),
  search: (searchValue) => controller(`${API}/search?query=${searchValue.toLowerCase()}`),
};

formData.addEventListener('submit', (e) => {
  e.preventDefault();
  const type = document.querySelector('input[name=jokeType]:checked').value;

  const choosenCategory = document.querySelector('input[name=jokeCategory]:checked')?.value;
  let searchValue = document.querySelector('#searchText')?.value;

  obj[type](searchValue || choosenCategory || '')
    .then(data => console.log(data));

  searchValue = '';
})