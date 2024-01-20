import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const ContactEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>We are thrilled to have you on our platform</p>
  </div>
);
