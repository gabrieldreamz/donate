import SocialLinks from "@components/contact/contact-msg/SocialLinks";

export default function Share() {
  return (
    <div className="grid gap-2 mb-10">
      <p className="text-dark text-lg font-medium">Share this post:</p>
      <SocialLinks />
    </div>
  );
}
