const Comment = require('./Comment')
const Entries = require('./Entries')
const Users = require('./Users')

Users.hasMany(Entries, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Entries.belongsTo(Users, {
    foreignKey: 'user_id'
});

Entries.hasMany(Comment,
    {
        foreignKey: 'entry_id',
        onDelete: 'cascade'
    });

Comment.belongsTo(Entries, {
    foreignKey: 'entry_id'
})

module.exports = { Users, Entries, Comment }