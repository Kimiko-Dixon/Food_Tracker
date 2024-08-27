const questionnaire = async (event) => {
  event.preventDefault();
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const age = parseInt(document.querySelector("#age").value);
  const gender = document.querySelector("#gender").value;
  const exerciseIntensity = document.querySelector("#exerciseIntensity").value;

  let bmr = 0;
  if(gender === 'Male'){
    bmr = 10*weight + 6.25*height - 5*age + 5
  }
  else{
    bmr = 10*weight + 6.25*height - 5*age - 161
  }

  let calorieGoal = 0
  switch(exerciseIntensity){
    case 'Sedentary':
      calorieGoal = Math.floor(bmr*1.2)
      break
    case 'Moderate':
      calorieGoal = Math.floor(bmr*1.55)
      break
    case 'Very Active':
      calorieGoal = Math.floor(bmr*1.725)
      break
    case 'Extra Active':
      calorieGoal = Math.floor(bmr*1.9)
      break
  }

  
  const protienGoal = Math.floor((calorieGoal * 0.3) / 4);
  const carbGoal = Math.floor((calorieGoal * 0.4) / 4);
  const fatGoal = Math.floor((calorieGoal * 0.3) / 9);

  console.log(calorieGoal,protienGoal,carbGoal,fatGoal)

  if (height && weight && age && gender && exerciseIntensity && calorieGoal && protienGoal && carbGoal && fatGoal) {
    
    const response = await fetch("/api/person/questionnaire",{
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
