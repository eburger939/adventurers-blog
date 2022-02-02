const router = require('express').Router();
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
            ...req.body,
            user_id: 1
        },
        {
        where: {
            id: req.params.id,
            user_id: 1
        }
        });
        if(!updateEntry) {
            res.status(404).json({ message: 'No entry found'})
            return;
        }
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

module.exports = router;