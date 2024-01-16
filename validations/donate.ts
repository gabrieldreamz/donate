import * as yup from "yup";

const DonateSchema = yup.object().shape({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string(),
  apt: yup.string(),
});

export default DonateSchema;
