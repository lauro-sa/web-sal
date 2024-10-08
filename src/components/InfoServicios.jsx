import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Componentes
import Contenedor from "./Contenedores/Contenedor";
import TransicionDeMovimiento from "./TransicionDeMovimiento";

// Estilos
import "../estilos.css";

// Datos
import { servicios } from "../config/datos";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function InfoServicios() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <TransicionDeMovimiento type="entrarDesdeCentro">
      <Contenedor className="h-full">
        <Link to="/servicios">
          <p className="text-lg uppercase tracking-wider mb-4 text-violeta-marca cursor-pointer">
            Servicios
          </p>
        </Link>
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          className="p-3 h-[300px] w-[325px] md:w-full"
        >
          {servicios.map((servicio, index) => (
            <SwiperSlide key={index}>
              <Link
                to={
                  servicio.slug === "desarrollo-paginas-web"
                    ? "/desarrollo-paginas-web" // Redirigir a la nueva página exclusiva
                    : "/servicios"
                }
                className="flex flex-col items-center rounded-md shadow-md hover:shadow-lg p-2 transition-all duration-300 ease-in-out border border-solid border-azul-custom hover:border-violeta-marca hover:bg-violeta-marca/5 hover:scale-105 mb-6"
              >
                <div className="w-10 h-12 my-4 svg-icon">{servicio.icon}</div>
                <h3 className="mt-2 mb-4 text-sm font-bold">{servicio.title}</h3>
                <p className="text-sm text-gray-600 text-center">
                  {servicio.description}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Contenedor>
    </TransicionDeMovimiento>
  );
}

export default InfoServicios;
