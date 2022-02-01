const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
       autoIncrement: true,
       allowNull: false,
      primaryKey: true,
     
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    entry_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'entries',
          key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;