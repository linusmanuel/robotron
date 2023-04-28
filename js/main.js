const robotron = document.querySelector('#robotron');

robotron.addEventListener('click', (event) => {
	sayHello('João');
	console.log(event);
});

function sayHello(name) {
	console.log('Oi' + name);
}

sayHello('João');
