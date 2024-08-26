const foodsList = document.querySelector('.standard')

const createStandardPortion = async (event) => {
    event.preventDefault()
    console.log(event)
    if(event.target.dataset.foodid){
        const id = event.target.dataset.foodid
        if(id){
        const response = await fetch(`/api/tracking/standard`,{
            method: 'POST',
            body:JSON.stringify({id}),
            headers: {'Content-Type': 'application/json'}
        })
        if(response.status === 200){
            document.location.replace('/')
        }
    }
    }
}
foodsList.addEventListener('click',createStandardPortion)