const router = require('express').Router();
const { Entries, Users, Comment } = require('../../models')
const withAuth = require('../../utils/auth')

router.get('/:id', async (req, res) => {
  try {
   const entryData = await Entries.findOne({
    include: [
      {
          model: Users,
          attributes: ['user_name'],
      },
      {model: Comment},
  ],
    where: {
       id: req.params.id,
     },
    });
     const entry = entryData.get({ plain: true });
    //  res.json(entry)
    res.render('comment',
       {entry,
        // loggedIn: req.session.loggedIn,
      });
   } catch (err) {
     res.status(500).json(err);
   }
 })


 router.post('/comment', async (req, res) => {
   try {
     const newComment = await Comment.create({
          comment_text: req.body.comment_text,
          entry_id: req.body.entry_id,
     });
     res.status(200).json(newComment)
   } catch (err) {
     res.status(400).json(err)
   }
 });

module.exports =  router;