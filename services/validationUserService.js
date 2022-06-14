const Joi = require("joi");

const createUserSchema = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "il"] } })
    .required(),
  password: Joi.string().min(4).required(),
  birthday: Joi.string().min(4).required(),
  marital_status: Joi.string().min(4).required(),
  phone: Joi.string().min(10).max(10).required(),
  country: Joi.string().min(2).required(),
  city: Joi.string().min(2).required(),
});

const isCreateValid = (user) => {
  const { error } = createUserSchema.validate(user._doc);
  return error || null;
};

module.exports = {
  isCreateValid,
};
