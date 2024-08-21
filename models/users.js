const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    height: {
      type: DataTypes.DECIMAL,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    is_woman: {
      type: DataTypes.BOOLEAN,
    },
    exercise_intensity: {
      type: DataTypes.STRING,
    },
    weight_goal: {
      type: DataTypes.INTEGER,
    },
    calorie_goal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    protien_goal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carb_goal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fat_goal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    creds_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user_creds",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "users",
  }
);

module.exports = Users;
