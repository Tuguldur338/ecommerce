"use client";
import CookieConsent from "react-cookie-consent";

const CookieTerms = () => {
  return (
    <div className="absolute bottom-0 w-full h-[200px] z-100">
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="mySiteCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={0}
      >
        We use cookies to improve your experience.{" "}
        <span style={{ fontSize: "10px" }}>
          Read our <a href="/Privacy">privacy policy</a>.
        </span>
      </CookieConsent>
    </div>
  );
};

export default CookieTerms;
