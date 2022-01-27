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
        foreignKey: 'user_id',
        onDelete: 'cascade'
    });

Comment.belongsTo(Users, {
    foreignKey: 'user_id'
})

module.exports = { Users, Entries, Comment }