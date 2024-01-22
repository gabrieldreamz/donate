import React from "react";

const NewsletterEmailTemplate = () => {
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
      <img src="logo" alt="AmorDivina Logo" style={logoStyle} />
      <h1 style={headingStyle}>🌟 Welcome to AmorDivina Insights!</h1>

      <p style={paragraphStyle}>
        Thanks a lot for joining our AmorDivina newsletter! By being a part of
        it, you're saying you want to know about cool stuff and share in
        positive vibes.
      </p>

      <p style={paragraphStyle}>
        In the next few weeks, we'll be sending you interesting things, special
        announcements, and heartwarming stories. Your subscription makes our
        community stronger and more vibrant.
      </p>

      <p style={paragraphStyle}>
        At AmorDivina, we're all about spreading kindness and understanding.
        Together, let's explore new perspectives and make the world a better
        place. Your subscription is the start of a journey to make a positive
        impact together.
      </p>

      <p style={regardsStyle}>
        Best regards,
        <br />
        The AmorDivina Team
      </p>
    </div>
  );
};

export default NewsletterEmailTemplate;
