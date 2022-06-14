const UserAverage = require("../models/userAverage");

const addUserAverageData = async (userData) => {
    try {
      const userAverage = new UserAverage(userData);
      await userAverage.save();
  
      return userAverage;
    } catch (err) {
      throw new Error(`User Not created, ${err.message}`);
    }
  };

module.exports = { addUserAverageData };