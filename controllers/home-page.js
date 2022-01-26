const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Entries, Users } = require('../models')

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
    res.render('homepage', {entries})
    console.log(entries)
});



module.exports = router