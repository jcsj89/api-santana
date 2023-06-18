import { Joi, Segments } from 'celebrate';

const uploadProductValidation = () => {
  const validate = {
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string()
        .guid({ version: ['uuidv4'] })
        .required(),
    }),
  };

  return validate;
};

export default uploadProductValidation;
