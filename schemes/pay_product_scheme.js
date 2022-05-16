import SchemeValidator from "../scheme-validator.js";

const payScheme = {
  title: "Pay the product",
  description: "Amount to make a payment",
  type: "object",
  properties: {
    amount: {
      description: "Amount of money",
      type: "number",
      format: "float",
      minimum: 10,
    },
    at: {
      description: "Date of payment",
      type: "string",
      format: "date",
    },
  },
  required: ["amount", "at"],
};

const payValidator = SchemeValidator.compile(payScheme);

export default payValidator;