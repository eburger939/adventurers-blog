const Users = require('./Users')
const Entries = require('./Entries')

Users.hasMany(Entries, {
    foreignKey: 'users_id',
    onDelete: 'cascase'
});

Entries.belongsTo(Users, {
    foreignKey: 'users_id'
});

module.exports = { Users }