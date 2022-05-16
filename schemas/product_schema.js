import SchemeValidator from "../scheme-validator.js";

export const productSchema = {
  $id: "product",
  title: "Product",
  description: "Product data",
  type: "object",
  properties: {
    id: {
      type: "string",
      format: "uuid",
    },
    name: {
      type: "string",
    },
  },
  required: ["id", "name"],
};

const productValidator = SchemeValidator.compile(productSchema);

export default productValidator;
