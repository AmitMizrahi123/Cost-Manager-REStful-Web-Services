const validationUserAverageService = require("../services/validationUserAverageService");
const userAverageService = require("../services/userAverageService");
const jwt = require("jsonwebtoken");

const setGradeInformation = async (req, res) => {
    try {
        var data = req.body;
        var token = req.cookies.auth.token;
        const error = validationUserAverageService.isValidUserAverageInformation(data);

        if (error) 
        {
          throw new Error(error.message);
        }
        
        if (token) {
            const decode = jwt.verify(token, 'secret');
            data.userId = decode.data._id;
        } else {
            return res.status(403).send('No token');
        }

        const averageCosts = await userAverageService.addUserAverageData(data);

        return res.json(averageCosts);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

const getSemesterAverage = async (req, res) => {
    try {
        const data = req.body;
        const semesterAverage = await userAverageService.getSemesterAverage(data);

        if (semesterAverage == 0) {
            return res.json(`There is no grades for ${data.userId} in ${data.year} ${data.semester}`)
        }

        return res.json(semesterAverage);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

const getYearAverage = async (req, res) => {
    try {
        const data = req.body;
        const semesterAverage = await userAverageService.getYearAverage(data);

        if (semesterAverage == 0) {
            return res.json(`There is no grades for ${data.userId} in ${data.year}`)
        }

        return res.json(semesterAverage);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = { setGradeInformation, getSemesterAverage, getYearAverage };