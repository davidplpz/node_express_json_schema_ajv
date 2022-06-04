import SchemeValidator from '../scheme-validator.js';

const payScheme = {
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
  },
  required: ['amount', 'currency'],
};

const payValidator = SchemeValidator.compile(payScheme);

export default payValidator;
