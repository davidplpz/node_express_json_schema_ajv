import Ajv from "ajv";
import addFormats from "ajv-formats";

const validator = new Ajv({ allErrors: true });
addFormats(validator);

export default validator;
