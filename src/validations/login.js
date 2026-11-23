import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .min(10, "The minimum number of characters is 10.")
    .max(30, "The maximum number of characters is 30.")
    .required(),
  password: Yup.string()
    .min(8, "The minimum number of characters is 8.")
    .max(12, "The maximum number of characters is 12.")
    .required(),
});

export default loginSchema;
