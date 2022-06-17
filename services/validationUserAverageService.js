const Joi = require("joi");

const createUserSchema = Joi.object({
    courseName: Joi.string().min(2).required(),
    grade: Joi.number().max(100).required(),
    year: Joi.number().min(2000).required(),
    semester: Joi.number().min(1).max(3).required(),
});

const isValidUserAverageInformation = (data) => {
  const { error } = createUserSchema.validate(data);
  
  return error || null;
};

module.exports = {
    isValidUserAverageInformation,
};
