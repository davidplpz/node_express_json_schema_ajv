import SchemeValidator from "../scheme-validator.js";

const signupScheme = {
  title: "Register User",
  description: "User data for registration",
  type: "object",
  properties: {
    email: {
      description: "User email",
      type: "string",
      format: "email",
    },
    password: {
      description: "User password",
      type: "string",
      format: "password",
      minLength: 8,
    },
  },
  required: ["email", "password"],
};

const signupValidator = SchemeValidator.compile(signupScheme);

export default signupValidator;
