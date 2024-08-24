const signup = async (event) => {
    event.preventDefault()
    const signUsername = document.querySelector('#signUsername').value
    const signPassword = document.querySelector('#signPassword').value

    if(signUsername && signPassword){
        const response = await fetch('/api/person/signup',{
            method: 'POST',
            body:JSON.stringify({signUsername,signPassword}),
            headers: {'Content-Type': 'application/json'}
        })
        if(response.status === 200){
        document.location.replace('/questionnare')
        // document.location.replace('/')
        }
        else{
            alert(response.statusText)
        }
    }
    
    
}

const login = async (event) => {
    event.preventDefault()
    const loginUsername = document.querySelector('#loginUsername')
    const loginPassword = document.querySelector('#loginPassword')

    if(loginUsername && loginPassword){
        const response = await fetch('/api/person/signup',{
            method: 'POST',
            body:JSON.stringify({loginUsername,loginPassword}),
            headers: {'Content-Type': 'application/json'}
        })
        if(response.status === 200){
            document.location.replace('/')
        }

    }
    
}

document.querySelector('#login').addEventListener('click',login)
document.querySelector('#signup').addEventListener('click',signup)
