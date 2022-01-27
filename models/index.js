const Users = require('./Users')
const Entries = require('./Entries')

Users.hasMany(Entries, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Entries.belongsTo(Users, {
    foreignKey: 'user_id'
});

module.exports = { Users, Entries }