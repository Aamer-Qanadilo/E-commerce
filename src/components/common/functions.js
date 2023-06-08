import Joi from "joi";

const FindStars = (itemStars) => {
  let stars = itemStars;
  let starsContainer = [];
  for (let i = 0; i < 5; i++) {
    if (stars >= 0.9)
      starsContainer.push(
        <li>
          <i className="fa-solid fa-star"></i>
        </li>,
      );
    else if (stars >= 0.25)
      starsContainer.push(
        <li>
          <i className="fa-solid fa-star-half-stroke"></i>
        </li>,
      );
    else
      starsContainer.push(
        <li>
          <i className="fa-regular fa-star"></i>
        </li>,
      );
    stars--;
  }
  return [...starsContainer];
};

const findPrice = (price) => {
  return (
    price[0] + "." + (price.length === 2 ? price[1].substring(0, 2) : "00")
  );
};

const validateInput = (inputName, inputValue, inputSchema) => {
  const inputToValidate = {
    [inputName]: inputValue,
  };

  const fieldSchema = Joi.object({
    [inputName]: inputSchema,
  });

  const validation = fieldSchema.validate(inputToValidate);

  if (!validation.error) {
    return { [inputName]: "" };
  }
  return { [inputName]: validation.error.details[0].message };
};

const validateForm = (inputs, schema, options = { abortEarly: false }) => {
  let newUser = { ...inputs };
  const validation = schema.validate(newUser, options);
  let errors = {};
  if (!validation.error) {
    return null;
  }
  for (let error of validation.error.details) {
    errors[error.path[0]] = error.message;
  }
  return errors;
};

export default {
  FindStars,
  findPrice,
  validateInput,
  validateForm,
};
