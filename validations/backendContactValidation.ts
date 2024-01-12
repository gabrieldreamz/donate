import * as yup from "yup";

const BackendContactSchema = yup.object().shape({
  fullname: yup.string().required(),
  email: yup
    .string()
    .required("Please enter your name")
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
  message: yup.string().required("This field cannot be empty"),
  foundus: yup.string().required(),
  help: yup.string().required(),
});

export default BackendContactSchema;
