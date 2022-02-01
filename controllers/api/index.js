const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashRoutes = require('./dashboardRoutes')
const commentRoutes = require('./entry')

router.use('/users', userRoutes);
router.use('/dash', dashRoutes);
router.use('/entry', commentRoutes)

module.exports = router;
