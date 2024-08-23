const addFood = async (event) => {
    event.preventDefault()
    document.location.replace('/foods')
}
const createMeals = async (event) => {
    event.preventDefault()
    const date = document.querySelector('#date').value
    if(date){
        const response = await fetch(`/api/tracking/createMeal`,{
            method: 'POST',
            body:JSON.stringify({date}),
            headers: {'Content-Type': 'application/json'}
        })
        /* if(response.status === 200){
            document.location.replace('/')
        } */
    }
     
}

document.querySelector('#addFood').addEventListener('click',addFood)
document.addEventListener('DOMContentLoaded',createMeals)