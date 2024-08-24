const addFood = async (event) => {
    event.preventDefault()
    document.location.replace('/foods')
}
/* const createMeals = async (event) => {
    event.preventDefault()
    
    const response = await fetch(`/api/tracking/createMeal`,{
        method: 'POST',
        // body:JSON.stringify({date}),
        headers: {'Content-Type': 'application/json'}
    })
    if(response.status === 200){
        console.log(response)
    }   
      
} */

document.querySelector('#addFood').addEventListener('click',addFood)
// document.addEventListener('DOMContentLoaded',createMeals)