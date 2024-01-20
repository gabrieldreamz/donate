import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const NewsletterEmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = () => (
  <div>
    <h1>Welcome aboard!</h1>
    <p>You have subsrcibe to our newsletter</p>
  </div>
);
