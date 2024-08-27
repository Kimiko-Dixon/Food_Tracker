/* const search = async (event) => {
    event.preventDefault()
        const searchTerm = document.querySelector('#searchBar').value
        console.log(event)
        console.log(searchTerm)
        
        if(searchTerm){
        const response = await fetch(`/api/tracking/search`,{
            method: 'POST',
            body:JSON.stringify({searchTerm}),
            headers: {'Content-Type': 'application/json'}
        })
         if(response.status === 200){
            console.log(response.searchedFood)
            // document.location.replace('/searchedFood')
        } 
        }
} */

//Calls api to create the serving_size portion and add to the meal
const createStandardPortion = async (event) => {
    event.preventDefault()
    console.log(event)
    if (event.target.dataset.foodid) {
        const id = event.target.dataset.foodid
        if (id) {
            const response = await fetch(`/api/tracking/standard`, {
                method: 'POST',
                body: JSON.stringify({ id }),
                headers: { 'Content-Type': 'application/json' },
            })
            if (response.status === 200) {
                document.location.replace('/')
            }
        }
    }
}
document
    .querySelector('.standard')
    .addEventListener('click', createStandardPortion)
/* document.querySelector('#search').addEventListener('click',search) */
