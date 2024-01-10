import * as yup from "yup";

const EventsSchema = yup.object().shape({
  img: yup.string().required(),
  title: yup.string().required(),
  description: yup.array().required(),
  type: yup.string().required(),
  articleName: yup.string().required(),
  location: yup.string().required(),
  totalFunds: yup.number().required(),
  fundsRaised: yup.number().required(),
});

export default EventsSchema;
