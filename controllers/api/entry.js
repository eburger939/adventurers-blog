const router = require('express').Router();
const { Entries, Users } = require('../../models')
// const withAuth = require('../../utils/auth')

router.get('/:id', async (req, res) => {
  try {
   const entryData = await Entries.findOne({
    include: [
      {
          model: Users,
          attributes: ['user_name'],
      },
  ],
    where: {
       id: req.params.id,
     },
    });
     const entry = entryData.get({ plain: true });
    res.render('comment',
       {entry,
        loggedIn: req.session.loggedIn,});
   } catch (err) {
     res.status(500).json(err);
   }
 })


 router.post('/', async (req, res) => {
   
 })

module.exports =  router;