const router = require('express').Router();
const { Entries } = require('../../models')
const withAuth = require('../../utils/auth')

router.post('/', async (req, res) => {
    try{
    const newEntry = await Entries.create({
        ...req.body,
        user_id: req.session.user_id,
    });
    res.status(200).json(newEntry);
} catch (err) {
    res.status(400).json(err)
}
})

router.put('/:id', withAuth, async (req, res) => {
    try {
        const updateEntry = await Entries.update({
            ...req.body,
            user_id: req.session.user_id,
        },
        {
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
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
                user_id: req.session.user_id,
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