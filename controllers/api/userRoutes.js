const router = require('express').Router();
const { Users } = require('../../models');




router.post('/register', async (req, res) => {
    try {
      const newUser = await Users.create({
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.loggedIn = true;
        req.session.email = newUser.email;

        
        res.status(200).json(newUser);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



router.post('/login', async (req, res) => {
    try {
      const userData = await Users.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }

      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
        req.session.email = userData.email;
        
        // res.json(userData)
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  


module.exports = router;