import ContactForm from "./ContactForm";
import IntroMsg from "./IntroMsg";

export default function ContactComponent() {
  return (
    <section className="px-5  lg:px-0 flex flex-col justify-center sm:items-center">
      <IntroMsg />
      <ContactForm />
    </section>
  );
}
