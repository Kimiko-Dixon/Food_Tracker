const createStandardPortion = async (event) => {
    event.preventDefault()
    const portion = document.querySelector('#portion')
    if(portion){
        const response = await fetch(`/api/tracking/${id}/portion`,{
            method: 'POST',
            body:JSON.stringify({portion}),
            headers: {'Content-Type': 'application/json'}
        })
        if(response.status === 200){
            document.location.replace('/')
        }
    }
}