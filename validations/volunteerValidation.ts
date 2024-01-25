import * as yup from "yup";

const VolunteerSchema = yup.object().shape({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

export default VolunteerSchema;
