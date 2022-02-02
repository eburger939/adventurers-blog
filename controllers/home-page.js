const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Entries, Users, Comment } = require('../models')


router.get('/', async (req, res) => {
    const dbEntryData = await Entries.findAll({
        include: [
            {
                model: Users,
                attributes: ['user_name'],
            },
        ],
    });
    const entries = dbEntryData.map((entry) => 
        entry.get({ plain: true }) 
    );
    // res.json(entries)
    res.render('homepage', {entries, loggedIn: req.session.loggedIn})
    // console.log(entries)
});

// router.get('/entry/:id', async (req, res) => {
//     try {
//     const oneEntry = await Entries.findByPk(req.params.id, {
//         include: [Users, {model: Comment, include: [Users]}]
//     });
//     const comments = oneEntry.get({ plain: true });
//     res.render('comment', {
//         ...comments,
//         loggedIn: req.session.loggedIn
//      });
//     } catch (err) {
//         res.status(500).json(err)
//     }

    // Entries.findOne(req.params.id, {
    //     include: [Users, {model: Comment, include: [Users]}]
    // }).then(data => {
    //     const post = data.map(post => {
    //         post.get({ plain: true })
    //     });
    //     res.render('comment', {post});
    // }) .catch(err => {
    //     if (err) throw err
    //     res.status(400).json(err)
    // })
// })

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})



module.exports = router