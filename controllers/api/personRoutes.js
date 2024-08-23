const router = require('express').Router();
const { Person } = require('../../models');


//goal settings
router.put('/:person_id', (req, res) => {
    //Calls the update method on the Person model
    Person.update(
      {
        // All the fields you can update and the data attached to the request body.
        height: req.body.height,
        weight: req.body.weight,
        age: req.body.age,
      },
      {
        where: {
          id: req.params.person_id,//req.session.userid
        },
      }
    )
      .then((updatedPerson) => {
        res.json(updatedPerson);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });

  // Delete route for a person with a matching id
router.delete('/:person_id', (req, res) => {
    // Looks for the books based book_id given in the request parameters
    Person.destroy({
      where: {
        id: req.params.person_id,
      },
    })
      .then((deletedPerson) => {
        res.json(deletedPerson);
      })
      .catch((err) => res.json(err));
  });

  //signup
  router.get('/signup', async (req, res) => {
    
  })

  //login
  router.get('/login', async (req, res) => {
    
  })

  //logout
  router.get('/logout', async (req, res) => {
    
  })

  //account settings change password
  router.get('/account', async (req, res) => {
    
  })