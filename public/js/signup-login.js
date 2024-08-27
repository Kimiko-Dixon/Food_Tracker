const signup = async (event) => {
  event.preventDefault();
  const signUsername = document.querySelector("#signUsername").value;
  const signPassword = document.querySelector("#signPassword").value;

  if (signUsername && signPassword) {
    const response = await fetch("/api/person/signup", {
      method: "POST",
      body: JSON.stringify({ signUsername, signPassword }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      window.location.replace("/questionnaire");
    }
  }
};

const login = async (event) => {
  event.preventDefault();
  const loginUsername = document.querySelector("#loginUsername").value;
  const loginPassword = document.querySelector("#loginPassword").value;

  if (loginUsername && loginPassword) {
    const response = await fetch("/api/person/login", {
      method: "POST",
      body: JSON.stringify({ loginUsername, loginPassword }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
        const date = new Date().toJSON().slice(0,10)
        const response = await fetch(`/api/tracking/createMeals`,{
        method: 'POST',
        body:JSON.stringify({date}),
        headers: {'Content-Type': 'application/json'}
    })
    
        if(response.status === 200){
          document.location.replace('/')
        }  
    }
  }
};

document.querySelector("#login").addEventListener("click", login);
document.querySelector("#signup").addEventListener("click", signup);
