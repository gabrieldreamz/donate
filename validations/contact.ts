import * as yup from "yup";

const contactSchema = yup.object().shape({
  fullname: yup.string().required("This field is missing"),
  email: yup
    .string()
    .required("Please enter your name")
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
  message: yup.string().required("This field cannot be empty"),
});

export default contactSchema;
