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

  const renderIcon = (Icon, delayMultiplier, onClickHandler, className) => {
    return (
      <div
        className={`cursor-pointer ${className}`}
        onClick={onClickHandler}
      >
        <Icon
          size="25"
          color="#8964e8"
          className={`icon ${animateIcons ? "animated" : ""}`}
        />
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      {iconsToShow.includes("linkedin") &&
        renderIcon(
          LinkedInIcon,
          0,
          () => window.open("https://www.linkedin.com/in/laurosa/", "_blank"),
          "linkedin-icon"
        )}
      {iconsToShow.includes("github") &&
        renderIcon(
          GitHubIcon,
          1,
          () => window.open("https://github.com/lauro-sa", "_blank"),
          "github-icon"
        )}
      {iconsToShow.includes("email") &&
        renderIcon(
          EmailIcon,
          2,
          () => window.open("mailto:anterior.sembrar-0o@icloud.com"),
          "email-icon"
        )}
      {iconsToShow.includes("whatsapp") &&
        renderIcon(
          WhatsAppIcon,
          3,
          () => window.open("https://wa.me/yourphonenumber", "_blank"),
          "whatsapp-icon"
        )}
      {iconsToShow.includes("formulario") &&
        renderIcon(FormularioIcon, 4, toggleModal, "formulario-icon")}
      {iconsToShow.includes("instagram") &&
        renderIcon(
          InstagramIcon,
          5,
          () => window.open("https://www.instagram.com/stianlauro/", "_blank"),
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
