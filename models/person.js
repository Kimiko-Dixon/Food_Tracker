const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Person extends Model {}

Person.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    /* daily_cal_intake:{
            type: DataTypes.INTEGER,
            references:{
                model:'meals_in_day',
                key:'id'
            }
        }, */
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "person",
  }
);

module.exports = Person;
