//use userWeight and userHeight value in handlebars to connect to frontend

const userWeight = document.querySelector(`#userWeight`).value
const userHeight = document.querySelector(`#userHeight`).value

const url = 'https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=${userWeight}&height=${userHeight}';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ded59732d0msh0e3cd5d3e7ef0b8p1baa97jsn4e452e16cd47',
		'x-rapidapi-host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}