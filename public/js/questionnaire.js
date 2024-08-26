const questionnaire = async (event) => {
  event.preventDefault();
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const age = parseInt(document.querySelector("#age").value);
  const gender = document.querySelector("#gender").value;

  const exerciseIntensity = document.querySelector("#exerciseIntensity").value;

  const calorieGoal = 2000
  const protienGoal = Math.floor((calorieGoal * 0.3) / 4);
  const carbGoal = Math.floor((calorieGoal * 0.4) / 4);
  const fatGoal = Math.floor((calorieGoal * 0.3) / 9);

  if (height && weight && age && gender && exerciseIntensity && calorieGoal && protienGoal && carbGoal && fatGoal) {
    
    const response = await fetch("/api/tracking/questionnaire",{
      method: "POST",
      body: JSON.stringify({height,weight,age,gender,exerciseIntensity,calorieGoal,protienGoal,carbGoal,fatGoal}),
      headers: { "Content-Type": "application/json" }
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

document
  .querySelector("#submitQuestionnaire")
  .addEventListener("click", questionnaire);
