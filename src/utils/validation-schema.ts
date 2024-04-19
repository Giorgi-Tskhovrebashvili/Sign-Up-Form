import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(10, "Must be 10 characters or less")
    .required("First Name cannot be empty"),
  lastName: Yup.string()
    .max(16, "Must be 16 characters or less")
    .required("Last Name cannot be empty"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Looks like this is not an email"),
  password: Yup.string()
    .min(8, "Must be 8 characters or less")
    .required("Password cannot be empty"),
});
