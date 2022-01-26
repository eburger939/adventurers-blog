const { Users } = require('../models');

const userData = [
    {
        user_name: 'eburger',
        email: "eburger@yahoo.com",
        password: "12345678910"
    },
    {
        user_name: 'sgarter',
        email: "garter@yahoo.com",
        password: "password"
    },
    {
        user_name: 'popcorn',
        email: "popcorn@yahoo.com",
        password: "ilikepopcorn"
    },
    {
        user_name: 'ljohnson',
        email: "ljohnson@yahoo.com",
        password: "tillyriggs"
    }
];

const seedUsers = () => Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});
module.exports = seedUsers