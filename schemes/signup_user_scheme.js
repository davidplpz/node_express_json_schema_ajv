import SchemeValidator from "../scheme-validator.js";

const signupScheme = {
  title: "Signup User",
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
    user_data: {
      type: "object",
      properties: {
        name: { type: "string" },
        address: {
          type: "object",
          properties: {
            type: { enum: ["Street", "Avenue", "Boulevard"] },
            name: { type: "string" },
          },
          additionalProperties: false,
        },
        phone: {
          type: "string",
        },
      },
      required: ["name", "address", "phone"],
    },
  },
  required: ["email", "password", "user_data"],
};

const signupValidator = SchemeValidator.compile(signupScheme);

export default signupValidator;
