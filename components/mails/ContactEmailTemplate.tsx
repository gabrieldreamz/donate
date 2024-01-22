import React from "react";

export const ContactEmailTemplate = ({ fullname }: { fullname: string }) => {
  const containerStyle: React.CSSProperties = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  };

  const headingStyle: React.CSSProperties = {
    color: "#333",
    textAlign: "center",
  };

  const paragraphStyle: React.CSSProperties = {
    marginBottom: "15px",
    textAlign: "justify",
  };

  const regardsStyle: React.CSSProperties = {
    marginTop: "20px",
    textAlign: "center",
  };

  const logoStyle: React.CSSProperties = {
    display: "block",
    margin: "0 auto",
    width: "100px", // Adjust as needed
    height: "auto",
  };

  return (
    <div style={containerStyle}>
      {/* <img src="logo" alt="Your Logo" style={logoStyle} /> */}
      <h1 style={headingStyle}>📬 Thank You for Contacting Amordivina</h1>
      <p style={paragraphStyle}>Dear {fullname},</p>

      <p style={paragraphStyle}>
        We hope this message finds you well. 🌟 Thank you for reaching out to
        Amordivina! We have received your email and appreciate you taking the
        time to contact us.
      </p>

      <p style={paragraphStyle}>
        Our team is currently reviewing your inquiry and will get back to you as
        soon as possible. In the meantime, if you have any additional
        information to share, feel free to do so.
      </p>

      <p style={paragraphStyle}>
        📬 Contact Information:
        <br />
        Email: support@amordivina.org
        <br />
      </p>

      <p style={paragraphStyle}>
        We value your interest and are committed to providing you with the best
        assistance. Thank you for choosing Amordivina!
      </p>

      <p style={regardsStyle}>
        Best regards,
        <br />
        The Amordivina Team
      </p>
    </div>
  );
};
