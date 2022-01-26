const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class Entries extends Model {}

Entries.init(
  {
    id: {
      type: DataTypes.INTEGER,
       autoIncrement: true,
       allowNull: false,
      primaryKey: true,
     
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'users',
          key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'entries',
  }
);

module.exports = Entries;