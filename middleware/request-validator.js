const validateSchema = (validator) => (request, response, next) => {
  const body = request.body;
  const isValid = validator(body);
  if (!isValid) {
    const errors = validator.errors;
    response.status(400).json(errors);
  }
  next();
};

export default validateSchema;
