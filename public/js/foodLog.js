/* const addFood = async (event) => {
    event.preventDefault()
    window.location.replace('/foods')
} */
/* const createMeals = async (event) => {
    event.preventDefault()
    console.log(event)
    const mealTime = event.target.dataset.mealtime
    const mealId = event.target.dataset.mealid
    console.log(mealTime)
    const date = new Date().toJSON().slice(0,10)
    if(mealTime && date){
        const response = await fetch(`/api/tracking/createMeal`,{
        method: 'POST',
        body:JSON.stringify({mealTime,date,mealId}),
        headers: {'Content-Type': 'application/json'}
    })
    
        if(response.status === 200){
            console.log(`this is the response`,response)
            window.location.replace('/foods')
        }  
    } 
} */

const createMeals = async (event) => {
    event.preventDefault()
    const mealId = event.target.dataset.mealid
    if(mealId){
        const response = await fetch(`/api/tracking/saveMealId`,{
        method: 'POST',
        body:JSON.stringify({mealId}),
        headers: {'Content-Type': 'application/json'}
    })
    
        if(response.status === 200){
            window.location.replace('/foods')
        }  
    } 
}
document.querySelector('#breakfastButton').addEventListener('click',createMeals)
document.querySelector('#lunchButton').addEventListener('click',createMeals)
document.querySelector('#dinnerButton').addEventListener('click',createMeals)
// document.addEventListener('unload',createMeals)