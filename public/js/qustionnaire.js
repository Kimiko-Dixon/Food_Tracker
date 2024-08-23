const nutrition = require("nutrition");
const questionnaire = async (event) => {
  event.preventDefault();
  const height = document.querySelector("#height").value.trim();
  const weight = document.querySelector("#weight").value.trim();
  const age = document.querySelector("#age").value.trim();
  const gender = document.querySelector("#gender").value;
  let isWoman;
  if (gender === "Male") {
    isWoman = false;
  } else if (gender === "Female") {
    isWoman = true;
  }
  const exerciseIntensity = document.querySelector("#exerciseIntensity").value;

  if (height && weight && age && isWoman && exerciseIntensity) {
    const bmrstats = {
      weight: weight,
      height: height,
      age: age,
      woman: isWoman,
    };
    const calorieGoal = nutrition.dailyCalories({
      bmr: nutrition.bmr(bmrstats),
      exerciseType: exerciseIntensity,
    });
    const protienGoal = Math.floor((calorieGoal * 0.3) / 4);
    const carbGoal = Math.floor((calorieGoal * 0.4) / 4);
    const fatGoal = Math.floor((calorieGoal * 0.3) / 9);

    const response = await fetch("/api/personRoute/questionnaire  ", {
      method: "POST",
      body: JSON.stringify({
        height,
        weight,
        age,
        isWoman,
        exerciseIntensity,
        calorieGoal,
        protienGoal,
        carbGoal,
        fatGoal,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      document.location.replace("/");
    }
  }
};

document
  .querySelector("#submitquestionnaire")
  .addEventListener("click", questionnaire);
