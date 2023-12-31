import ContactMsg from "./contact-form/ContactMsg";
import Form from "./contact-form/Form";

export default function ContactForm() {
  return (
    <section className="flex flex-col md:flex-row gap-20 md:gap-32 my-10">
      <Form />
      <ContactMsg />
    </section>
  );
}
