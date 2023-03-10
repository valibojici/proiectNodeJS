'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Student.belongsToMany(models.Course, {
        through: models.CourseStudent,
        foreignKey: 'studentId'
      });

      models.Student.belongsToMany(models.Course, {
        through: models.Grade,
        foreignKey: 'studentId'
      });

      models.Student.hasMany(models.Grade);
    }
  }
  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};