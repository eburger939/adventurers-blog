const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashRoutes = require('./dashboardRoutes')
const commentRoutes = require('./comment')

router.use('/users', userRoutes);
router.use('/dash', dashRoutes);
// router.use('/comment', commentRoutes)

module.exports = router;
