const {Person} = require('../models')

const people = [
    {
      username: 'test 1',
      password: '12345',
      height:62,
      weight:120,
      age:24,
      is_woman:true,
      exercise_intensity: 'Moderate',
      weight_goal:112,
      calorie_goal: 20000,
      protien_goal: 175,
      carb_goal: 225,
      fat_goal: 45,
    },
    {
      username: 'test 2',
      password: '123456',
      height:70,
      weight:150,
      age:20,
      is_woman:false,
      exercise_intensity: 'Heavy',
      weight_goal:140,
      calorie_goal: 20000,
      protien_goal: 175,
      carb_goal: 225,
      fat_goal: 45,
    },
    {
      username: 'test 3',
      password: '1234567',
      height:60,
      weight:130,
      age:28,
      is_woman:true,
      exercise_intensity: 'No',
      weight_goal:105,
      calorie_goal: 20000,
      protien_goal: 175,
      carb_goal: 225,
      fat_goal: 45,
    },
    {
      username: 'test 4',
      password: '12345678',
      height:72,
      weight:120,
      age:21,
      is_woman:false,
      exercise_intensity: 'Full',
      weight_goal:150,
      calorie_goal: 20000,
      protien_goal: 125,
      carb_goal: 275,
      fat_goal: 45,
    },
]

const peopleSeeds = () => Person.bulkCreate(people)

module.exports = peopleSeeds