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

function RedesSociales({ iconsToShow = [], animateIcons = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (e) => {
    e.stopPropagation(); // Evita que el clic en el formulario cierre el footer
    setIsModalOpen(!isModalOpen);
  };

  const handleIconClick = (url, e) => {
    e.stopPropagation(); // Asegura que el clic solo afecte al ícono y no a otros elementos
    if (url) {
      window.open(url, "_blank");
    } else {
      toggleModal(e);
    }
  };

  const baseDelay = 0.1; // Base delay en segundos
  const delayIncrement = 0.1; // Incremento de delay para cada icono adicional

  const renderIcon = (Icon, delayMultiplier, url, className) => {
    const iconElement = (
      <div
        className={`cursor-pointer ${className}`}
        onClick={(e) => handleIconClick(url, e)}
      >
        <Icon
          size="25"
          color="#8964e8"
          className={`icon ${animateIcons ? "animated" : ""}`}
        />
      </div>
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

      {/* Modal */}
      <ModalCustom isVisible={isModalOpen} onClose={toggleModal}>
        <Formulario onClose={toggleModal} />
      </ModalCustom>
    </div>
  );
}

export default RedesSociales;
