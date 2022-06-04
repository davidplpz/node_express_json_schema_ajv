import SchemeValidator from '../scheme-validator.js';
import { productSchema } from './product_schema.js';

const payScheme = {
  $id: 'pay',
  title: 'Pay the product',
  description: 'Amount to make a payment',
  type: 'object',
  properties: {
    amount: {
      description: 'Amount of money',
      type: 'number',
      format: 'float',
      minimum: 10,
    },
    currency: {
      description: 'Currency of the payment',
      type: 'string',
      enum: ['USD', 'EUR', 'RUB'],
    },
    product: { $ref: 'product' },
  },
  required: ['amount', 'currency', 'product'],
};

const payValidator = SchemeValidator.compile(payScheme);

export default payValidator;
