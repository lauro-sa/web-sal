import React from "react";
import "../estilos.css";
import {
  EmailIcon,
  LinkedInIcon,
  WhatsAppIcon,
  GitHubIcon,
  InstagramIcon,
  FormularioIcon,
} from "../config/IconosRedes";
import TransicionDeMovimiento from "./TransicionDeMovimiento"; 

function RedesSociales({ iconsToShow = [], animateIcons = false }) {
  const baseDelay = 0.1; // Base delay en segundos
  const delayIncrement = 0.1; // Incremento de delay para cada icono adicional

  // Ahora renderIcon también recibe un className
  const renderIcon = (Icon, delayMultiplier, url, className) => {
    const iconElement = (
      <Icon
        size="25"
        color="#8964e8"
        className={`icon ${animateIcons ? "animated" : ""} ${className}`}
        url={url}
      />
    );
    return animateIcons ? (
      <TransicionDeMovimiento
        type="entrarAbajoArriba"
        delay={baseDelay + delayMultiplier * delayIncrement}
      >
        {iconElement}
      </TransicionDeMovimiento>
    ) : (
      iconElement
    );
  };

  return (
    <div className="flex items-center justify-center space-x-4 ">
      {iconsToShow.includes("linkedin") &&
        renderIcon(
          LinkedInIcon,
          0,
          "https://www.linkedin.com/in/laurosa/",
          "linkedin-icon"
        )}
      {iconsToShow.includes("github") &&
        renderIcon(
          GitHubIcon,
          1,
          "https://github.com/lauro-sa",
          "github-icon"
        )}

      {iconsToShow.includes("email") &&
        renderIcon(EmailIcon, 2, "mailto:anterior.sembrar-0o@icloud.com", "email-icon")}

      {iconsToShow.includes("whatsapp") &&
        renderIcon(
          WhatsAppIcon,
          3,
          "https://wa.me/yourphonenumber",
          "whatsapp-icon"
        )}

      {iconsToShow.includes("formulario") &&
        renderIcon(FormularioIcon, 4, "", "formulario-icon")}

      {iconsToShow.includes("instagram") &&
        renderIcon(
          InstagramIcon,
          4,
          "https://www.instagram.com/stianlauro/",
          "instagram-icon"
        )}
    </div>
  );
}

export default RedesSociales;
