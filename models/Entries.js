const sequelize = require('../config/connection');
const { Model, DataTypes, Sequelize } = require('sequelize');


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
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
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