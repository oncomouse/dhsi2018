import R from 'ramda'

document.querySelector('#react').innerHTML = '<h1>Loaded Webpack!</h1>';

var numberedList = R.map(
	(n) => `<li>${n}</li>`,
	R.range(1,101)
);

document.querySelector('#react').innerHTML += `<ul>${numberedList.join('')}</ul>`;