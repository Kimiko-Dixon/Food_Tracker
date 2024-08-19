// link this to handlebars and make sure the input has this ID
// "protein_g" and "serving size" require premium subvscription

const foodName = document.querySelector("#foodInputBar").value;
const url = `hhttps://api.api-ninjas.com/v1/nutrition?query=${foodName}`;
const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': 'mm2RAZaahHA30Sdt+RC66Q==K2ye26emymdyHNmH',
		'x-rapidapi-host': 'calorieninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}