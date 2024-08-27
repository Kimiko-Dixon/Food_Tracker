//Calls api to save meal id for adding selected portions to
const saveMealId = async (event) => {
    event.preventDefault()
    const mealId = event.target.dataset.mealid
    if (mealId) {
        const response = await fetch(`/api/tracking/saveMealId`, {
            method: 'POST',
            body: JSON.stringify({ mealId }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.status === 200) {
            window.location.replace('/foods')
        }
    }
}

//Calls api to logout of account
const logout = async (event) => {
    event.preventDefault()
    const response = await fetch(`/api/person/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.status === 204) {
        window.location.replace('/login')
    }
}
document.querySelector('#breakfastButton').addEventListener('click', saveMealId)
document.querySelector('#lunchButton').addEventListener('click', saveMealId)
document.querySelector('#dinnerButton').addEventListener('click', saveMealId)
document.querySelector('#logout').addEventListener('click', logout)
