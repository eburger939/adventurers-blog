const router = require('express').Router();
const { text } = require('express');
const { Entries, Users } = require('../../models')
const withAuth = require('../../utils/auth')


router.get('/', withAuth, async (req, res) => {
    try {
        const userBlogs = await Entries.findAll({
            where:{
                user_id: req.session.user_id,
            },
        })
        const blogs = userBlogs.map((blog) => blog.get({ plain: true }));
        res.render('dashboard', {
          blogs,
          loggedIn: req.session.loggedIn,
        });
        // res.json(blogs)
      } catch (err) {
        res.status(500).json(err);
      }
});

router.post('/', async (req, res) => {
    try{
    const newEntry = await Entries.create({
        title: req.body.title,
        text: req.body.text,
        user_id: req.session.user_id,
    });
    res.status(200).json(newEntry);
} catch (err) {
    res.status(400).json(err)
}
})

router.put('/:id',  async (req, res) => {
    try {
        const updateEntry = await Entries.update({
            title: req.body.title,
            text: req.body.text,
            user_id: req.session.user_id,
        },
        {
        where: {
            id: req.params.id,
        }
        });
        // res.redirect('/api/dash')
        res.status(200).json(updateEntry);
    } catch(err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', async (req, res) =>{
    try {
        const oldEntry = await Entries.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!oldEntry) {
            res.status(404).json({ message: 'Entry not found'});
            return;
        }
   
        res.status(200).json(oldEntry)
    } catch (err) {
        res.status(500).json(err);
    }
})


router.get('/:id', withAuth, async (req, res) => {
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
       const edit = entryData.get({ plain: true });
      //  res.json(entry)
      res.render('edit',
         {edit,
          loggedIn: req.session.loggedIn,
        });
     } catch (err) {
       res.status(500).json(err);
     }
   })

module.exports = router;