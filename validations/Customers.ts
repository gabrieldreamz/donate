import * as yup from "yup";

const customerSchema = yup.object().shape({
  amount: yup.string().required(),
  fullname: yup.string().required(),
  address: yup.string(),
  apt: yup.string(),
});

export default customerSchema;
