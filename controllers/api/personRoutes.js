const router = require('express').Router();
const { Users } = require('../../models');


//goal settings
router.put('/:Users_id', (req, res) => {
    //Calls the update method on the Users model
    Users.update(
      {
        // All the fields you can update and the data attached to the request body.
        height: req.body.height,
        weight: req.body.weight,
        age: req.body.age,
      },
      {
        where: {
          id: req.params.Users_id,//req.session.userid
        },
      }
    )
      .then((updatedUsers) => {
        res.json(updatedUsers);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });

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
  // router.get('/signup', async (req, res) => {
    
  // })

  //login
  // router.get('/login', async (req, res) => {
    
  // })

  //logout
  // router.get('/logout', async (req, res) => {
    
  // })

  //account settings change password
  // router.get('/account', async (req, res) => {
    
  // })

  module.exports = router;