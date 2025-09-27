import React, { useState } from "react";
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
import ModalCustom from "./ModalCustom";
import Formulario from "./Formulario/Formulario";

function RedesSociales({ iconsToShow = [], animateIcons = false, size = "25", initialDelay = 0 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  };

  const handleIconClick = (url, e) => {
    e.stopPropagation();
    if (url) {
      window.open(url, "_blank");
    } else {
      toggleModal(e);
    }
  };

  const baseDelay = 0.1;
  const delayIncrement = 0.1;

  const renderIcon = (Icon, delayMultiplier, url, className) => {
    const iconElement = (
      <div
        className={`cursor-pointer ${className}`}
        onClick={(e) => handleIconClick(url, e)}
      >
        <Icon
          size={size}
          color="#8964e8"
          className={`icon ${animateIcons ? "animated" : ""}`}
        />
      </div>
    );
    return animateIcons ? (
      <TransicionDeMovimiento
        type="entrarAbajoArriba"
        delay={initialDelay + baseDelay + delayMultiplier * delayIncrement}
      >
        {iconElement}
      </TransicionDeMovimiento>
    ) : (
      iconElement
    );
  };

  return (
    <div className="flex items-center justify-center space-x-4">
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
        renderIcon(
          EmailIcon,
          2,
          "mailto:anterior.sembrar-0o@icloud.com",
          "email-icon"
        )}
      {iconsToShow.includes("whatsapp") &&
        renderIcon(
          WhatsAppIcon,
          3,
          "https://wa.me/yourphonenumber",
          "whatsapp-icon"
        )}
      {iconsToShow.includes("formulario") &&
        renderIcon(FormularioIcon, 4, null, "formulario-icon")}
      {iconsToShow.includes("instagram") &&
        renderIcon(
          InstagramIcon,
          5,
          "https://www.instagram.com/stianlauro/",
          "instagram-icon"
        )}

      <ModalCustom isVisible={isModalOpen} onClose={toggleModal}>
        <Formulario onClose={toggleModal} />
      </ModalCustom>
    </div>
  );
}

export default RedesSociales;
