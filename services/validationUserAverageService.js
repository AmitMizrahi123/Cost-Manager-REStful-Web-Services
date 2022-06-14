const Joi = require("joi");

const createUserSchema = Joi.object({
    courseName: Joi.string().min(2).required(),
    credit: Joi.number().min(1).required(),
    grade: Joi.number().max(100).required(),
});

const isValidUserAverageInformation = (data) => {
  const { error } = createUserSchema.validate(data);
  return error || null;
};

module.exports = {
    isValidUserAverageInformation,
};
