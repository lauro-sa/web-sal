// RedesSociales.jsx
import React from "react";
import {
  EmailIcon,
  LinkedInIcon,
  WhatsAppIcon,
  GitHubIcon,
  InstagramIcon,
} from "../config/IconosRedes";

function RedesSociales({ iconsToShow = [] }) {
  return (
    <div className="flex items-center justify-center space-x-4">
      {iconsToShow.includes("linkedin") && (
        <LinkedInIcon
          size="24"
          color="#8964e8"
          className="icon"
          url="https://www.linkedin.com/in/yourprofile"
        />
      )}
      {iconsToShow.includes("github") && (
        <GitHubIcon
          size="26"
          color="#8964e8"
          className="icon"
          url="https://github.com/yourusername"
        />
      )}
      {iconsToShow.includes("email") && (
        <EmailIcon
          size="25"
          color="#8964e8"
          className="icon"
          url="mailto:your-email@example.com"
        />
      )}
      {iconsToShow.includes("whatsapp") && (
        <WhatsAppIcon
          size="25"
          color="#8964e8"
          className="icon"
          url="https://wa.me/yourphonenumber"
        />
      )}
      {iconsToShow.includes("instagram") && (
        <InstagramIcon
          size="25"
          color="#8964e8"
          className="icon"
          url="https://www.instagram.com/yourusername"
        />
      )}
    </div>
  );
}

export default RedesSociales;
