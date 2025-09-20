"use client";
import CookieConsent from "react-cookie-consent";

const CookieTerms = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="mySiteCookieConsent"
      buttonStyle={{
        color: "#4e503b",
        fontSize: "13px",
        borderRadius: "4px",
        width: "100px",
        height: "35px",
      }}
      expires={0}
      style={{
        width: "100%",
        height: "100px",
        zIndex: 100,
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        color: "black",
      }}
    >
      We use cookies to improve your experience.{" "}
      <span style={{ fontSize: "10px" }}>
        Read our <a href="/Privacy">privacy policy</a>.
      </span>
    </CookieConsent>
  );
};

export default CookieTerms;
