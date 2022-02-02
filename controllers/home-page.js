const router = require('express').Router();
const { Entries, Users, Comment } = require('../models')
const withAuth = require('../utils/auth')


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

    res.render('homepage', {entries, loggedIn: req.session.loggedIn})
});

router.get('/home', withAuth, async (req, res) => {
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

    res.render('homepage', {entries, loggedIn: req.session.loggedIn})
});



router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})



module.exports = router