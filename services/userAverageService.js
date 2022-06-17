const UserAverage = require("../models/userAverage");

const findAllGradesByIdYearSemester = async (data) => {
  try {
    const grades = await UserAverage.find({}).lean().exec();
    const gradesById = grades.map(element => {
      if (element.userId == data.userId &&
          element.year == data.year &&
          element.semester == data.semester) {
        return element;
      }
    });

    return gradesById;
  } catch (err) {
    throw err;
  }
}

const findAllGradesByIdYear = async (data) => {
  try {
    const grades = await UserAverage.find({}).lean().exec();
    const gradesById = grades.map(element => {
      if (element.userId == data.userId &&
          element.year == data.year) {
        return element;
      }
    });

    return gradesById;
  } catch (err) {
    throw err;
  }
}

const userGradeAverage = async (userGrades) => {
  try {
    let sum = 0;
    let numberOfGrades = userGrades.length;

    for (let index = 0; index < userGrades.length; index++) {
      if (userGrades[index] === undefined) {
        numberOfGrades -= 1;
        continue;
      }

      const grade = userGrades[index].grade;
      sum += grade;
    }

    return sum / numberOfGrades;
  } catch (err) {
    throw err;
  }
}

const addUserAverageData = async (userData) => {
    try {
      const userAverage = new UserAverage(userData);
      await userAverage.save();
  
      return userAverage;
    } catch (err) {
      throw new Error(`User Not created, ${err.message}`);
    }
  };

const getSemesterAverage = async (userData) => {
    try {
      const userGrades = await findAllGradesByIdYearSemester(userData);

      return await userGradeAverage(userGrades);
    } catch (err) {
      throw new Error(`User grades failed, ${err.message}`);
    }
}

const getYearAverage = async (userData) => {
  try {
    const userGrades = await findAllGradesByIdYear(userData);

    return await userGradeAverage(userGrades);
  } catch (err) {
    throw new Error(`User grades failed, ${err.message}`);
  }
}

module.exports = { addUserAverageData, getSemesterAverage, getYearAverage };