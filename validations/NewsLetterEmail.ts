import * as yup from "yup";

const newsLetterEmailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
});

export default newsLetterEmailSchema;
