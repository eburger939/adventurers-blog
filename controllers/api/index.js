const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashRoutes = require('./dashboardRoutes')

router.use('/users', userRoutes);
router.use('/dash', dashRoutes);

module.exports = router;
