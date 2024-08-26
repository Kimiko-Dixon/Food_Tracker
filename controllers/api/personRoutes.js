const router = require("express").Router();
const { UserCreds, Users } = require("../../models");

//goal settings
// router.put('/:Users_id', (req, res) => {
//     //Calls the update method on the Users model
//     Users.update(
//       {
//         // All the fields you can update and the data attached to the request body.
//         height: req.body.height,
//         weight: req.body.weight,
//         age: req.body.age,
//       },
//       {
//         where: {
//           id: req.params.Users_id,//req.session.userid
//         },
//       }
//     )
//       .then((updatedUsers) => {
//         res.json(updatedUsers);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.json(err);
//       });
//   });

//signup
router.post("/signup", async (req, res) => {
  try {
    const signup = await UserCreds.create({
      username: req.body.signUsername,
      password: req.body.signPassword,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userInfo = {
        id: signup.id,
        username: signup.username,
      };
      req.session.meal = 0
      res.status(200).json(signup);
    });
    
  } catch {
    res.status(500).json("error creating account");
  }
});

router.post('/questionnaire', async (req, res) => {
  try{
  
    const userStats = await Users.create({
      weight: req.body.weight,
      height: req.body.height,
      age: req.body.age,
      gender: req.body.gender,
      exercise_intensity:req.body.exerciseIntensity,
      calorie_goal:req.body.calorieGoal,
      protien_goal:req.body.protienGoal,
      carb_goal: req.body.carbGoal,
      fat_goal:req.body.fatGoal,
      creds_id:req.session.userInfo.id
    })

    res.status(200).json(userStats)
  }
  catch{
    res.status(500).json('failed to save questionnaire')
  }
  
})

//login
router.post("/login", async (req, res) => {
  try{
    const user = await UserCreds.findOne({
      where:{
        username:req.body.loginUsername
      }
    })
    if(!user){
      res.status(400).json('Your username or password are incorrect')
      return
    }
    const verifyPassword = await user.isPassword(req.body.loginPassword)
    if(!verifyPassword){
      res.status(400).json('Your username or password are incorrect')
      return
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userInfo = {
        id: user.id,
        username: user.username,
      };
      req.session.meal = 0
      res.status(200).json(user);
    });
  }catch{
    res.status(500).json("error logging in")
  }
  

});

//logout
router.post('/logout', async (req, res) => {
  if(req.session.loggedIn){
    req.session.destroy((() => res.status(204).end()))
  }
  else{
    res.status(404).end()
  }
})

/* router.post("/calories", async (req, res) => {
  const userStats = await Users.create();
}); */

module.exports = router;
