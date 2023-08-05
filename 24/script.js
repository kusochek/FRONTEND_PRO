// RENDER EXIST USERS

// const controller = (action) => fetch(action).then((response) => response.json());

// controller('json/users.json')
// 	.then((data) => {
// 		Promise.allSettled(data.users.map((user) => controller(`json/${user.name.toLowerCase()}.json`)))
// 			.then((data) => data.filter((promise) => promise.status === 'fulfilled').map((promise) => promise.value))
// 			.then((data) => {
// 				data.forEach((user) => {
// 					document.body.innerHTML += `<ul><li>User name: ${user.name}</li><li>AVATAR: ${user.avatar}</li></ul>`;
// 				})
// 			});
// 	})
// 	.catch((err) => console.log(err));


// async/await
// try catch

// async function controller(action) {
// 	const response = await fetch(action);
// 	const data = await response.json();

// 	return data;
// }

// async function getUser() {
// 	const data = await controller('json/users.json');

// 	data.users.forEach((user) => console.log(user.email));
// }

// getUser();

// EXAMPLE 1
// FIND USER BY EMAIL AND RENDER HIM

// async function controller(action) {
// 	try {
// 		const response = await fetch(action);

// 		if (response.status > 399) {
// 			throw new Error(response.statusText);
// 		}
// 		const data = await response.json();	
// 		return data;
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// const button = document.querySelector('#button');

// button.addEventListener('click', async () => {
// 	const email = document.querySelector('#email').value;

// 	try {
// 		const users = await controller('json/users.json');
// 		const foundUser = users.users.find((user) => user.email === email.toLowerCase());
		
// 		const user = await controller(`json/${foundUser.name.toLowerCase()}.json`);
// 		const avatar = document.createElement('p');
// 		const name = document.createElement('p');
	
// 		avatar.innerText = user.avatar;
// 		name.innerText = user.name;
	
// 		document.body.append(avatar, name);
// 	} catch (err) {
// 		console.log(err);
// 	} finally {
// 		renderSomething();
// 	};
// });

// function renderSomething() {
// 	console.log(1,2,3,4,5);
// }


// REST

// API: https://jsonplaceholder.typicode.com/

// 'https://jsonplaceholder.typicode.com/comments?userId=1'

// URL
// 	protocol http/https
// 	domain
// 	path
// 	queryParameter

// METHOD
// 	GET – получение данных
// 	POST * – отправка данных на сервер в теле запроса (body)
// 	PUT * – отправка данных на сервер в теле запроса (обновление ресурса)
// 	PATCH * – отправка данных на сервер в теле запроса
// 	DELETE

// BODY

// HEADERS – служебная информация (кодировка, сжатие, сервер, кеширование)

// STATUS
// 	100
// 		101

// 	200
// 		201
// 		204

// 	300
// 		301
// 		302

// 	400 – ошибка на фронте
// 		401
// 		403
// 		404

// 	500 – ошибка на сервере
// 		502
// 		503

// https://jsonplaceholder.typicode.com/

// REST – архитектура клиент-серверного взаимодействия
// свод правил (рекомендаций), по которым клиент (web app, mobile app) и сервер должны между собой взаимодействовать

// REST говорит, что нужно думать о данных, которые хранятся на сервере как о ресурсе.
// У каждого ресурса на сервере есть свой URL. 

// LIST – GET /posts // – запрос на ресурс posts
// ITEM – GET /posts/:id // – запрос на ресурс posts с :id

// ADD – POST /posts     body:{name: Alex, age: 21} // – запрос на ресурс posts c телом запроса, id всегда назначает только сервер
// <== {id: 101, name: Alex, age: 21}

// FULL UPDATE – PUT /posts/:id  body:{id: 101, name: Ivan} // в body отправляются все поля объекта
// <== {id: 101, name: Ivan}

// PARTIAL UPDATE – PATCH /posts/:id body:{name: ''} // в body отправляется только то, что изменилось
// <== {id: 101, name: Eve, age: 21}

// DELETE – /posts/:id
// <== {}

// RESTfull Api – сферический конь в вакууме 😌

const API = "https://jsonplaceholder.typicode.com";

async function controller(action, method, body) {
	const headers = {
		'Content-type': 'application/json; charset=UTF-8',
	};

	const params = {
		method: method,
		headers,
	};

	if (body) params.body = JSON.stringify(body);

	try {
		const response = await fetch(action, params);
		const data = await response.json();	

		return data;
	} catch (err) {
		console.log(err);
	}
}

async function getPosts() {
	const posts = await controller(`${API}/posts`, 'GET');
	console.log(posts);
}

getPosts();

async function createPost() {
	const params = {
		title: 'foo',
    body: 'bar',
    userId: 1,
	};
	const updatedPosts = await controller(`${API}/posts`, 'POST', params);
	console.log(updatedPosts);
}

const createButton = document.querySelector('#create');

createButton.addEventListener('click', createPost);

async function updatePost() {
	const params = {
		id: 10,
    body: 'bar',
		title: "et ea vero quia laudantium autem",
		userId: 2,
	};
	const updatedPosts = await controller(`${API}/posts/10`, 'PUT', params);
	console.log(updatedPosts);
}

const updateButton = document.querySelector('#update');

updateButton.addEventListener('click', updatePost);