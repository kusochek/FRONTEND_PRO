// IMAGE BASE 64
const getBase64 = (file) => {
	return new Promise((resolve, reject) => {
	  const reader = new FileReader();
	  reader.readAsDataURL(file);
	  reader.onload = () => resolve(reader.result);
	  reader.onerror = error => resolve('');
	});
}


// API
const API = 'https://64d3c02367b2662bf3dcaac5.mockapi.io/api/v1/';
const METHODS = {
	POST: 'POST',
	GET: 'GET',
	PUT: 'PUT',
	DELETE: 'DELETE',
};

async function controller(action, method = METHODS.GET, body) {
	const URL = `${API}${action}`;

	const params = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
	};

	if (body) params.body = JSON.stringify(body);

	try {
		const response = await fetch(URL, params);
		if (!response.ok) {
			throw new Error(response.statusText);
		};
		const data = await response.json();

		return data;
	} catch (err) {
		console.log(err);
	}
}

// LOGIN USER

const loginButton = document.querySelector('#login');
const LOGIN_ERROR_MESSAGE = 'Wrong Email or Password!';
const TODAY = new Date();

loginButton.addEventListener('click', async () => {
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;

	const users = await controller('users');
	const user = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
	
	if (!user) {
		showError(LOGIN_ERROR_MESSAGE);
		return;
	}

	if (user.password !== password) {
		showError(LOGIN_ERROR_MESSAGE);
		return;
	}

	const currentUser = await controller(`users/${user.id}`);
	renderUser(currentUser);
});

function showError(mssg) {
	alert(mssg);
}

// RENDER USER

function getFullAgeUser(birthDate) {
	const diffAgeDate = TODAY - new Date(birthDate);
	const age = Math.round(diffAgeDate / 31556952000);

	return age;
}

function renderUser(user) {
	const userWrapp = document.querySelector('#userInfo');

	const card = document.createElement('div');
	const avatarWrapp = document.createElement('div');
	const avatar = document.createElement('img');
	const userInfoWrap = document.createElement('div');
	const userName = document.createElement('h3');
	const age = document.createElement('p');
	const email = document.createElement('p');
	const cat = document.createElement('p');
	const createdDate = document.createElement('p');

	cat.addEventListener('click', async () => {
		const catsList = await controller('cats');
		const currentCatId = catsList.find((catItem) => catItem.cat === user.cat)?.id;

		if (!currentCatId) {
			showError('Cannot find a cat!');
			return;
		}

		const currentCat = await controller(`cats/${currentCatId}`);
		renderCat(currentCat);
	})

	card.classList.add('card');
	userInfoWrap.classList.add('card-top');

	avatar.src = user.avatar;
	userName.innerText = user.name;
	age.innerText = getFullAgeUser(user.birthday);
	email.innerText = user.email;
	cat.innerText = user.cat;
	createdDate.innerText = user.created_at;

	avatarWrapp.append(avatar);
	userInfoWrap.append(userName, age);
	card.append(avatarWrapp, userInfoWrap, email, cat, createdDate);

	userWrapp.append(card);
}

function renderCat(cat) {
	const userWrapp = document.querySelector('#userInfo');

	const card = document.createElement('div');
	const avatarWrapp = document.createElement('div');
	const avatar = document.createElement('img');
	const catInfoWrap = document.createElement('div');
	const catName = document.createElement('h3');
	const age = document.createElement('p');
	const catP = document.createElement('p');

	card.classList.add('card');
	catInfoWrap.classList.add('card-top');

	avatar.src = cat.avatar;
	catName.innerText = cat.name;
	age.innerText = getFullAgeUser(cat.birthday);
	catP.innerText = cat.cat;

	avatarWrapp.append(avatar);
	catInfoWrap.append(catName, age);
	card.append(avatarWrapp, catInfoWrap, catP);

	userWrapp.append(card);
}



// REGISTRATION

const registerButton = document.querySelector('#register');

registerButton.addEventListener('click', async () => {
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#emailReg').value;
	const password = document.querySelector('#passwordReg').value;
	const cat = document.querySelector('#cat').value;
	const avatarFile = document.querySelector('#avatar');

	const avatar = await getBase64(avatarFile.files[0]);

	const body = { name, email, password, cat, avatar };

	const newUser = await controller('users', METHODS.POST, body);
	renderUser(newUser);
});
