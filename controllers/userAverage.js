const validationUserAverageService = require("../services/validationUserAverageService");
const userAverageService = require("../services/userAverageService");

const setGradeInformation = async (req, res) => {
    try {
        const data = req.body;
        const error = validationUserAverageService.isValidUserAverageInformation(data);
        
        if (error) 
        {
          throw new Error(error.message);
        }
        
        const averageCosts = await userAverageService.addUserAverageData(data);

        return res.json(averageCosts);
    } catch (err) {
      res.status(400).send(err.message);
    }
};

module.exports = { setGradeInformation };