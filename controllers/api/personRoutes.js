const router = require('express').Router();
const { UserCreds,Users } = require('../../models');


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

  // Delete route for a Users with a matching id
// router.delete('/:Users_id', (req, res) => {
//     // Looks for the books based book_id given in the request parameters
//     Users.destroy({
//       where: {
//         id: req.params.Users_id,
//       },
//     })
//       .then((deletedUsers) => {
//         res.json(deletedUsers);
//       })
//       .catch((err) => res.json(err));
//   });

  //signup
  router.post('/signup', async (req, res) => {
    try{
      const signup = await UserCreds.create({
        username: req.body.signUsername,
        password: req.body.signPassword
      })
      console.log(signup)
      req.session.save(() => {
        req.session.LoggedIn = true
        req.session.userInfo = {
          id:signup.id,
          username:signup.username
        }
      })
      res.status(200).json(signup)
      // res.render('questionnare')  
    }
    catch{
      res.status(500).json('error creating account')
    }
    
    
  })

  //login
  router.post('/login', async (req, res) => {
    
  })

  //logout
  // router.post('/logout', async (req, res) => {
    
  // })

  router.post('/calories', async (req, res) => {
    const userStats = await Users.create()
  })


  module.exports = router;