// config/datos.jsx
import React from "react";

// Datos liena de tiempo
export const eventos = [
  { 
    año: 'En curso', 
    tema: 'Formación',
    titulo: 'Diplomatura Full Stack',
    descripcion: 'Diplomatura en Programación Full Stack - UTN Buenos Aires' 
  },
  { 
    año: '2024', 
    tema: 'Proyecto',
    titulo: 'Web Marketing España',
    descripcion: 'Desarrollo de la página web de una empresa de marketing para España, realizada con React.' 
  },
  { 
    año: 'nov. 2023', 
    tema: 'Formación',
    titulo: 'Especialización React JS',
    descripcion: 'Desarrollador Web en React JS - Argentina Programa 4.0' 
  },
  { 
    año: '2023', 
    tema: 'Proyecto',
    titulo: 'PWA Gestión de Servicios',
    descripcion: 'Proyecto de una PWA para una empresa de servicios, gestionada completamente por mí. La PWA permite agendar clientes, realizar cotizaciones y agendar eventos con hasta 5 usuarios. Realizada con React.' 
  },
  { 
    año: 'feb. 2023', 
    tema: 'Formación',
    titulo: 'Curso Frontend Avanzado',
    descripcion: 'Desarrollo Frontend - Argentina Programa 4.0' 
  },
  { 
    año: 'jul. 2022', 
    tema: 'Formación',
    titulo: 'Curso Se Programar',
    descripcion: 'Curso Se Programar del trayecto formativo INTI' 
  },
  { 
    año: 'oct. 2021', 
    tema: 'Formación',
    titulo: 'Diplomatura en Ads',
    descripcion: 'Diplomatura en Publicidad y Ads para Social Media - UTN Buenos Aires' 
  },
  { 
    año: 'jun. 2021', 
    tema: 'Formación',
    titulo: 'Certificación Google Ads',
    descripcion: 'Google Ads - Publicidad con Búsqueda avanzada - UTN Buenos Aires' 
  },
  { 
    año: 'abr. 2020', 
    tema: 'Formación',
    titulo: 'Fundamentos IoT',
    descripcion: 'Fundamentos IoT - EducacionIT' 
  },
  { 
    año: 'dic. 2018', 
    tema: 'Formación',
    titulo: 'Certificación FrontEnd',
    descripcion: 'Certificación en Programación Inicial FrontEnd - Digital House' 
  },
  { 
    año: '2015 - 2021', 
    tema: 'Proyecto',
    titulo: 'Desarrollo Web Empresa',
    descripcion: 'Desarrollo de la web de una empresa de servicios. Realicé el diseño y la funcionalidad de la web, evolucionando desde HTML y CSS puro hasta React JS y SCSS.' 
  },
];
// Fin datos liena de tiempo

// Datos de los servicios ofrecidos

// Importación de las imágenes de servicios
import DesarrolloPaginasWeb01 from "../assets/img/servicios/DesarrolloPaginasWeb-01.webp";
import DesarrolloPaginasWeb02 from "../assets/img/servicios/DesarrolloPaginasWeb-02.webp";
import DesarrolloPaginasWeb03 from "../assets/img/servicios/DesarrolloPaginasWeb-03.webp";

import DisenoComponentes01 from "../assets/img/servicios/DisenoComponentes-01.webp";
import DisenoComponentes02 from "../assets/img/servicios/DisenoComponentes-02.webp";
import DisenoComponentes03 from "../assets/img/servicios/DisenoComponentes-03.webp";

import DesarrolloPWA01 from "../assets/img/servicios/DesarrolloPWA-01.webp";
import DesarrolloPWA02 from "../assets/img/servicios/DesarrolloPWA-02.webp";
import DesarrolloPWA03 from "../assets/img/servicios/DesarrolloPWA-03.webp";

import AlojamientoWeb01 from "../assets/img/servicios/AlojamientoWeb-01.webp";
import AlojamientoWeb02 from "../assets/img/servicios/AlojamientoWeb-02.webp";
import AlojamientoWeb03 from "../assets/img/servicios/AlojamientoWeb-03.webp";

import DisenoWebIntegral01 from "../assets/img/servicios/DisenoWebIntegral-01.webp";
import DisenoWebIntegral02 from "../assets/img/servicios/DisenoWebIntegral-02.webp";
import DisenoWebIntegral03 from "../assets/img/servicios/DisenoWebIntegral-03.webp";

import OptimizacionWeb01 from "../assets/img/servicios/OptimizacionWeb-01.webp";
import OptimizacionWeb02 from "../assets/img/servicios/OptimizacionWeb-02.webp";
import OptimizacionWeb03 from "../assets/img/servicios/OptimizacionWeb-03.webp";

import MantenimientoWeb01 from "../assets/img/servicios/MantenimientoWeb-01.webp";
import MantenimientoWeb02 from "../assets/img/servicios/MantenimientoWeb-02.webp";
import MantenimientoWeb03 from "../assets/img/servicios/MantenimientoWeb-03.webp";

import OptimizacionSEO01 from "../assets/img/servicios/OptimizacionSEO-01.webp";
import OptimizacionSEO02 from "../assets/img/servicios/OptimizacionSEO-02.webp";
import OptimizacionSEO03 from "../assets/img/servicios/OptimizacionSEO-03.webp";

export const servicios = [
  {
    id: 1,
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>Swagger</title>
        <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c6.616 0 12-5.383 12-12S18.616 0 12 0zm0 1.144c5.995 0 10.856 4.86 10.856 10.856 0 5.995-4.86 10.856-10.856 10.856-5.996 0-10.856-4.86-10.856-10.856C1.144 6.004 6.004 1.144 12 1.144zM8.37 5.868a6.707 6.707 0 0 0-.423.005c-.983.056-1.573.517-1.735 1.472-.115.665-.096 1.348-.143 2.017-.013.35-.05.697-.115 1.038-.134.609-.397.798-1.016.83a2.65 2.65 0 0 0-.244.042v1.463c1.126.055 1.278.452 1.37 1.629.033.429-.013.858.015 1.287.018.406.073.808.156 1.2.259 1.075 1.307 1.435 2.575 1.218v-1.283c-.203 0-.383.005-.558 0-.43-.013-.591-.12-.632-.535-.056-.535-.042-1.08-.075-1.62-.064-1.001-.175-1.988-1.153-2.625.503-.37.868-.812.983-1.398.083-.41.134-.821.166-1.237.028-.415-.023-.84.014-1.25.06-.665.102-.937.9-.91.12 0 .235-.017.369-.027v-1.31c-.16 0-.31-.004-.454-.006zm7.593.009a4.247 4.247 0 0 0-.813.06v1.274c.245 0 .434 0 .623.005.328.004.577.13.61.494.032.332.031.669.064 1.006.065.669.101 1.347.217 2.007.102.544.475.95.941 1.283-.817.549-1.057 1.333-1.098 2.215-.023.604-.037 1.213-.069 1.822-.028.554-.222.734-.78.748-.157.004-.31.018-.484.028v1.305c.327 0 .627.019.927 0 .932-.055 1.495-.507 1.68-1.412.078-.498.124-1 .138-1.504.032-.461.028-.927.074-1.384.069-.715.397-1.01 1.112-1.057a.972.972 0 0 0 .199-.046v-1.463c-.12-.014-.204-.027-.291-.032-.536-.023-.804-.203-.937-.71a5.146 5.146 0 0 1-.152-.993c-.037-.618-.033-1.241-.074-1.86-.08-1.192-.794-1.753-1.887-1.786zm-6.89 5.28a.844.844 0 0 0-.083 1.684h.055a.83.83 0 0 0 .877-.78v-.046a.845.845 0 0 0-.83-.858zm2.911 0a.808.808 0 0 0-.834.78c0 .027 0 .05.004.078 0 .503.342.826.859.826.507 0 .826-.332.826-.853-.005-.503-.342-.836-.855-.831zm2.963 0a.861.861 0 0 0-.876.835c0 .47.378.849.849.849h.009c.425.074.853-.337.881-.83.023-.457-.392-.854-.863-.854z" />
      </svg>
    ),
    title: "Desarrollo de páginas web",
    slug: "desarrollo-paginas-web",
    description:
      "Creo y diseño sitios web adaptativos y a medida, optimizados para una experiencia de usuario excepcional en cualquier dispositivo.",
    description2:
      "Me especializo en la creación de sitios web responsivos, lo que significa que el diseño y la funcionalidad se adaptan perfectamente a cualquier tamaño de pantalla, desde móviles hasta escritorios. Esto es crucial para mantener la relevancia en un mundo donde el tráfico móvil sigue creciendo.",
    description3:
      "Además de la adaptabilidad, también priorizo la velocidad y la seguridad de los sitios que desarrollo. Implemento prácticas de optimización para mejorar los tiempos de carga y utilizo técnicas avanzadas para proteger los datos de los usuarios, asegurando así una experiencia segura y eficiente.",
    images: [DesarrolloPaginasWeb01, DesarrolloPaginasWeb02, DesarrolloPaginasWeb03], // Imágenes de muestra para este servicio
  },
  {
    id: 2,
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>Figma</title>
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
      </svg>
    ),
    title: "Diseño de componentes",
    slug: "diseno-componentes",
    description:
      "Diseño componentes web personalizados que se integran perfectamente en tu sitio, mejorando la funcionalidad y la estética de tu presencia online.",
    description2:
      "Al diseñar componentes, me aseguro de que cada elemento esté alineado con la identidad visual de la marca, creando una coherencia que fortalece la presencia online de mis clientes. Utilizo un enfoque centrado en el usuario, lo que significa que cada componente está diseñado para ser intuitivo y fácil de usar.",
    description3:
      "La integración de estos componentes personalizados en el sitio web no solo mejora la funcionalidad, sino que también añade un toque único que diferencia a la página de las demás. Trabajo en estrecha colaboración con mis clientes para entender sus necesidades específicas y así crear componentes que cumplan con sus objetivos.",
    images: [DisenoComponentes01, DisenoComponentes02, DisenoComponentes03], // Imágenes de muestra para este servicio
  },
  {
    id: 3,
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="50"
      >
        <title>PWA</title>
        <path d="M20.5967 7.482L24 16.518h-2.5098l-.5816-1.6184h-3.2452l.6933-1.7532h2.0019l-.95-2.6597 1.1881-3.0047zm-8.111 0l1.7722 5.8393L16.75 7.482h2.4154l-3.6433 9.036h-2.3833l-1.6395-5.2366-1.7196 5.2366h-2.377l-1.233-2.1161 1.2144-3.7415 1.342 2.6609 1.9029-5.8393h1.8566zm-8.7453 0c1.0635 0 1.8713.3055 2.4234.9166a2.647 2.647 0 01.2806.3684l-1.0753 3.3128-.3847 1.1854c-.352.1006-.7533.1509-1.204.1509H2.2928v3.102H0V7.482zm-.5816 1.7532h-.866v2.4276h.8597c.5577 0 .9406-.1194 1.1485-.3582.1896-.215.2845-.5058.2845-.8724 0-.364-.1079-.6544-.3235-.8714-.2157-.217-.5834-.3256-1.1032-.3256z" />
      </svg>
    ),
    title: "Desarrollo de aplicaciones (PWA)",
    slug: "desarrollo-aplicaciones-pwa",
    description:
      "Desarrollo aplicaciones web progresivas que ofrecen una experiencia de usuario de nivel de aplicación nativa, accesible directamente desde cualquier navegador web.",
    description2:
      "Me aseguro de que cada PWA que creo sea rápida, confiable y esté optimizada para ofrecer una excelente experiencia de usuario. Utilizo tecnologías modernas que permiten a las PWAs cargar rápidamente y funcionar sin problemas, incluso en condiciones de red limitadas.",
    description3:
      "Además, las PWAs que desarrollo están diseñadas para ser instalables directamente desde el navegador, lo que permite a los usuarios acceder a ellas fácilmente desde sus pantallas de inicio, sin ocupar espacio en sus dispositivos. Esto las convierte en una solución ideal para empresas que buscan ofrecer una experiencia de aplicación sin los inconvenientes de las descargas tradicionales.",
    images: [DesarrolloPWA01, DesarrolloPWA02, DesarrolloPWA03], // Imágenes de muestra para este servicio
  },
  {
    id: 4,
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="35"
      >
        <title>Hostinger</title>
        <path d="M16.415 0v7.16l5.785 3.384V2.949L16.415 0ZM1.8 0v11.237h18.815L14.89 8.09l-7.457-.003V3.024L1.8 0Zm14.615 20.894v-5.019l-7.514-.005c.007.033-5.82-3.197-5.82-3.197l19.119.091V24l-5.785-3.106ZM1.8 13.551v7.343l5.633 2.949v-6.988L1.8 13.551Z" />
      </svg>
    ),
    title: "Alojamiento de sitios web",
    slug: "alojamiento-sitios-web",
    description:
      "Ofrezco servicios de alojamiento web seguro y confiable, asegurando que tu sitio esté disponible y funcione eficientemente las 24 horas del día.",
    description2:
      "Mis soluciones de alojamiento incluyen opciones escalables que se adaptan al crecimiento de tu sitio web. Ya sea que estés comenzando con un pequeño blog o gestionando un gran portal de comercio electrónico, tengo la infraestructura necesaria para mantener tu sitio funcionando sin problemas.",
    description3:
      "Además, proporciono soporte técnico continuo para resolver cualquier problema que pueda surgir, asegurando tiempos de inactividad mínimos y una experiencia de usuario excelente. Trabajo con las mejores plataformas de hosting para garantizar la velocidad y seguridad de tu sitio.",
    images: [AlojamientoWeb01, AlojamientoWeb02, AlojamientoWeb03], // Imágenes de muestra para este servicio
  },
  {
    id: 5,
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>Tailwind CSS</title>
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
    title: "Diseño web integral",
    slug: "diseno-web-integral",
    description:
      "Ofrezco servicios de diseño web que cubren desde la interfaz hasta la experiencia de usuario, garantizando un sitio atractivo y fácil de navegar.",
    description2:
      "Me especializo en crear diseños que no solo sean visualmente impactantes, sino también prácticos y accesibles. Esto incluye la optimización del flujo de navegación y la disposición de contenido para maximizar la conversión de visitantes en clientes.",
    description3:
      "Además, cada diseño que realizo es completamente personalizable, lo que significa que puedo adaptar el sitio a las necesidades específicas de tu marca, garantizando una presencia en línea coherente y profesional.",
    images: [DisenoWebIntegral01, DisenoWebIntegral02, DisenoWebIntegral03], // Imágenes de muestra para este servicio
  },
  {
    id: 6,
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>Microsoft SQL Server</title>
        <path d="M4.724 2.505s-.08.127-.004.315c.046.116.186.256.34.404 0 0 1.615 1.576 1.813 1.804.895 1.033 1.284 2.05 1.32 3.453.022.9-.151 1.692-.573 2.613-.756 1.649-2.35 3.468-4.81 5.49l.36-.12c.233-.173.548-.359 1.292-.766 1.713-.936 3.636-1.798 5.999-2.686 3.399-1.277 8.99-2.776 12.172-3.263l.331-.051-.05-.08c-.292-.452-.49-.731-.73-1.027-.697-.863-1.542-1.567-2.577-2.146-1.422-.797-3.267-1.416-5.6-1.88a67.93 67.93 0 00-2.191-.375 209.29 209.29 0 01-3.924-.64c-.425-.075-1.06-.181-1.481-.272a9.404 9.404 0 01-.961-.258c-.268-.105-.645-.207-.726-.515zm.936.909c.003-.002.063.017.137.042.136.046.316.1.526.159.146.04.307.084.479.127.218.056.399.104.401.107.024.027.391 1.198.516 1.647.048.172.084.315.081.318a.789.789 0 01-.09-.14c-.424-.746-1.097-1.505-1.874-2.116a3.104 3.104 0 01-.176-.144zm1.79.494c.018-.001.099.012.195.034.619.136 1.725.35 2.435.47.119.02.216.04.216.047a.348.348 0 01-.098.062c-.119.06-.602.349-.763.457-.403.27-.766.559-1.03.821a5.4 5.4 0 01-.197.192c-.003 0-.022-.062-.041-.137a12.09 12.09 0 00-.65-1.779 1.801 1.801 0 01-.071-.165c0-.001 0-.002.004-.002zm3.147.598c.02.007.06.13.129.404a6.05 6.05 0 01.153 1.977l-.012.038-.187-.06c-.388-.124-1.02-.31-1.562-.46a6.625 6.625 0 01-.56-.17c0-.022.449-.471.642-.642.369-.326 1.362-1.098 1.397-1.087zm.25.036c.011-.01 1.504.248 2.182.378.506.097 1.237.25 1.281.269.022.008-.054.05-.297.16-.96.432-1.672.82-2.38 1.293-.186.124-.341.226-.344.226-.004 0-.006-.104-.006-.23 0-.69-.139-1.387-.391-1.976a.688.688 0 01-.045-.12zm3.86.764c.011.011-.038.306-.08.48-.132.54-.482 1.344-.914 2.099a2.26 2.26 0 01-.152.246 1.499 1.499 0 01-.219-.115c-.422-.247-.9-.48-1.425-.697a4.588 4.588 0 01-.278-.12c-.024-.022 1.143-.795 1.762-1.166.495-.297 1.292-.741 1.306-.727zm.276.043c.033 0 .695.18 1.037.283.853.255 1.837.614 2.475.904l.265.12-.187.043c-1.561.36-2.9.773-4.188 1.296-.107.044-.2.08-.207.08a.911.911 0 01.075-.185c.388-.823.638-1.687.703-2.42.006-.067.018-.121.027-.121zm-6.58 1.512c.01-.01.514.108.789.185.413.116 1.292.41 1.292.433 0 .004-.097.089-.215.188-.475.397-.934.813-1.483 1.343a5.27 5.27 0 01-.308.285c-.007 0-.01-.023-.006-.05.083-.611.065-1.395-.05-2.193a1.29 1.29 0 01-.02-.19zm10.61.01c.007.008-.234.385-.384.6-.22.314-.537.726-1.261 1.637l-.954 1.202a9.418 9.418 0 01-.269.333c-.003 0-.05-.066-.103-.146a7.584 7.584 0 00-1.47-1.625 9.59 9.59 0 00-.27-.218.427.427 0 01-.074-.063c0-.01.617-.274 1.088-.466a37.02 37.02 0 012.778-.99c.442-.135.912-.27.919-.264zm.278.073a.93.93 0 01.207.1 12.274 12.274 0 012.428 1.824c.194.19.667.683.66.687l-.363.029c-1.53.115-3.486.44-5.37.893-.128.03-.238.056-.246.056-.007 0 .133-.14.311-.312 1.107-1.063 1.611-1.734 2.205-2.934.088-.178.163-.333.166-.342h.002zm-8.088.83c.051.01.523.23.879.408.325.163.818.426.843.449.003.003-.17.093-.386.201-.683.342-1.268.664-1.878 1.037-.175.107-.32.194-.325.194-.015 0-.01-.013.088-.191a7.702 7.702 0 00.738-2.002c.014-.062.03-.1.041-.097zm-.475.084c.01.01-.112.46-.19.7a9.092 9.092 0 01-.835 1.808l-.09.147-.203-.197a2.671 2.671 0 00-.676-.5 1.009 1.009 0 01-.176-.102c0-.03.62-.593 1.098-.998.343-.29 1.064-.867 1.072-.858zm2.888 1.188l.177.115c.407.264.888.619 1.255.924.206.172.605.53.687.616l.044.047-.294.082a53.8 53.8 0 00-4.45 1.424c-.167.061-.31.112-.32.112-.021 0-.042.019.333-.326.96-.883 1.807-1.856 2.44-2.802zm-.759.19c.009.009-.492.71-.789 1.106-.356.473-.99 1.265-1.426 1.78a8.769 8.769 0 01-.346.397c-.01.003-.015-.05-.016-.133 0-.44-.112-.91-.308-1.308-.083-.168-.097-.208-.08-.224.068-.062 1.127-.666 1.794-1.023.459-.246 1.163-.604 1.171-.595zm-4.59 1.125a3.988 3.988 0 01.812.518c.008.005-.087.083-.21.172-.345.249-.87.644-1.173.886-.32.255-.331.263-.295.207.24-.367.36-.574.486-.84.113-.236.224-.516.304-.76a.675.675 0 01.077-.183zm1.223.96c.017-.003.04.028.139.175.207.31.366.722.407 1.058l.008.073-.497.192c-.89.346-1.711.687-2.266.94-.155.072-.428.202-.607.292-.179.09-.325.16-.325.156 0-.004.112-.089.25-.188 1.087-.79 2.025-1.654 2.732-2.519.075-.092.144-.172.153-.178a.016.016 0 01.006-.002zm-.564.14c.015.014-.401.484-.681.77-.7.715-1.396 1.275-2.256 1.821-.108.069-.206.13-.22.138-.023.014.008-.022.386-.434.238-.259.42-.474.628-.743.136-.177.162-.202.362-.346.537-.388 1.767-1.221 1.781-1.207zM9.925 0c-.08-.01-1.371.455-2.2.791-1.123.457-1.996.894-2.534 1.272-.2.14-.452.393-.488.49a.356.356 0 00-.021.123l.488.46 1.158.37L9.087 4l3.153.542.032-.27-.028-.005-.415-.066-.085-.148a27.702 27.702 0 01-1.177-2.325 12.264 12.264 0 01-.53-1.465C9.969.02 9.962.005 9.925 0zm-.061.186h.005c.003.003.017.105.032.225.062.508.176 1 .354 1.53.134.4.136.377-.024.332-.37-.103-2.032-.388-3.234-.555a8.796 8.796 0 01-.357-.053c-.015-.015.867-.477 1.258-.66.501-.232 1.867-.8 1.966-.819zM6.362 1.814l.141.048c.772.262 2.706.632 3.775.72.12.01.222.021.225.024.003.003-.1.058-.228.122-.515.258-1.083.573-1.476.819-.115.072-.22.13-.235.129a4.868 4.868 0 01-.17-.027l-.144-.023-.365-.355c-.641-.62-1.141-1.1-1.335-1.28zm-.143.114l.511.638c.282.35.564.699.626.774.063.075.111.138.108.14-.014.011-.74-.13-1.125-.219a8.532 8.532 0 01-.803-.212l-.2-.064.001-.049c.003-.245.312-.607.836-.976zm4.352.869c.015.001.032.032.077.131.124.272.51 1.008.603 1.15.03.047.08.05-.433-.033-1.23-.198-1.629-.265-1.629-.273a.36.36 0 01.083-.054 7.13 7.13 0 001.107-.767l.175-.147c.006-.005.012-.008.017-.007zm4.309 8.408l-4.808 1.568-4.18 1.846-1.17.31c-.298.282-.613.568-.948.86-.37.321-.716.612-.98.822a7.46 7.46 0 00-.953.945c-.332.414-.592.854-.704 1.193-.2.61-.103 1.228.285 1.798.495.728 1.48 1.468 2.625 1.972.585.256 1.57.588 2.31.774 1.233.312 3.614.65 4.926.7.266.01.62.01.637-.002.028-.019.233-.405.47-.89.806-1.646 1.389-3.19 1.703-4.508.19-.799.338-1.863.434-3.125.027-.354.037-1.533.016-1.934a13.564 13.564 0 00-.183-1.706.435.435 0 01-.012-.15c.014-.01.059-.025.65-.197zm-1.1.645c.045 0 .16 1.114.191 1.82.006.151.005.247-.004.247-.028 0-.615-.345-1.032-.606a28.716 28.716 0 01-1.162-.772c-.035-.028-.031-.029.266-.131.505-.174 1.704-.558 1.742-.558zm-2.448.803c.03 0 .115.047.315.172.75.47 1.766 1.035 2.2 1.225.136.06.151.036-.16.247-.662.45-1.486.892-2.497 1.342a7.59 7.59 0 01-.331.142.989.989 0 01.043-.2c.245-.905.383-1.82.387-2.554.002-.362.002-.364.037-.373h.006zm-.504.193c.021.022.006.834-.02 1.056a9.206 9.206 0 01-.418 1.837c-.014.017-.511-.468-.676-.66a4.918 4.918 0 01-.669-.973c-.082-.162-.214-.484-.202-.493.056-.04 1.971-.78 1.985-.767zm-2.375.936c.004 0 .008.001.01.004a.881.881 0 01.056.131c.116.315.376.782.602 1.08a6.247 6.247 0 001.017 1.06c.023.02.03.016-.562.24a48.53 48.53 0 01-2.294.8c-.327.106-.604.195-.615.2-.033.011-.023-.009.073-.158.427-.666 1.073-1.97 1.435-2.892.062-.16.122-.32.133-.356.015-.052.031-.07.08-.092a.149.149 0 01.065-.017zm-.728.3c.01.009-.174.398-.356.751-.351.686-.739 1.361-1.253 2.185l-.182.288c-.018.027-.026.018-.082-.094a3.307 3.307 0 01-.28-.842 3.39 3.39 0 01.02-1.083c.047-.227.045-.222.152-.276.462-.237 1.966-.942 1.981-.929zm6.268.255v.154a20.106 20.106 0 01-.255 2.992 9.362 9.362 0 01-1.898-.782c-.354-.194-.865-.507-.85-.522.003-.004.154-.083.334-.177.714-.37 1.395-.77 1.988-1.166.222-.148.555-.389.629-.454zM4.981 15.41c.015 0 .011.028-.012.161a4.137 4.137 0 00-.041.39c-.03.532.057.924.32 1.46.074.15.132.274.129.276-.027.023-2.43.726-3.186.933l-.435.12c-.027.008-.029.002-.02-.06.083-.533.49-1.232 1.058-1.82.378-.39.68-.622 1.195-.915a30.782 30.782 0 01.992-.545zm5.669 1.015c.002-.002.091.045.197.107.777.449 1.86.87 2.783 1.081l.084.02-.115.063c-.482.268-2.071.929-3.694 1.537a68.82 68.82 0 00-.513.194.314.314 0 01-.082.027c0-.004.067-.132.149-.286.456-.852.91-1.887 1.144-2.605.023-.073.044-.135.047-.138zm-.578.19a1.39 1.39 0 01-.063.169 23.534 23.534 0 01-1.261 2.54 9.009 9.009 0 01-.252.433c-.005 0-.114-.066-.244-.145-.77-.472-1.452-1.052-1.9-1.617l-.064-.08.332-.091a23.616 23.616 0 003.19-1.103c.142-.06.26-.109.262-.106zm3.59 1.253c.001 0 .002.001.002.003 0 .08-.183.828-.336 1.37-.128.453-.236.808-.435 1.437a8.533 8.533 0 01-.168.504 15.004 15.004 0 01-3-.841 7.964 7.964 0 01-.639-.283c-.006-.007.213-.11.486-.23 1.655-.721 3.369-1.543 3.955-1.896a.432.432 0 01.135-.064zm-8.287.283c.009.009-.454.671-1.1 1.576l-.587.823c-.097.139-.245.358-.329.488l-.153.236-.162-.137c-.191-.16-.525-.501-.677-.69-.312-.389-.523-.798-.607-1.174-.038-.174-.04-.262-.003-.273a176.26 176.26 0 011.934-.455l1.3-.305c.209-.05.382-.09.384-.089zm.465.178l.117.131a6.763 6.763 0 001.706 1.394c.115.066.202.124.195.128a281.967 281.967 0 01-4.33 1.53.858.858 0 01-.072-.048l-.067-.048.105-.152c.34-.493.768-1.035 1.705-2.162zm2.9 2.073c.003-.003.165.054.362.128.473.177.844.292 1.347.418.617.155 1.51.31 2.038.354.08.006.122.016.11.024-.025.016-.56.194-.953.318a258.526 258.526 0 01-4.636 1.363c-.035.007-.157-.025-.157-.04 0-.009.087-.119.193-.246a22.027 22.027 0 001.476-1.984 56.9 56.9 0 01.22-.335zm-.642.018c.005.005-.253.418-.706 1.132-.192.301-.409.645-.483.762-.075.118-.184.298-.242.4l-.107.185-.054-.014c-.13-.035-1.049-.36-1.291-.456-.301-.12-.615-.264-.846-.389-.289-.156-.655-.388-.627-.397l1.105-.302c1.592-.434 2.473-.683 3.05-.864.109-.033.199-.059.2-.057zm4.523 1.061h.006c.015.038-.575 1.67-.79 2.188-.049.116-.066.145-.092.143a55.54 55.54 0 01-1.433-.2c-.906-.138-2.423-.403-2.806-.49l-.089-.02.543-.122c1.164-.262 1.723-.403 2.29-.577a16.544 16.544 0 002.138-.824c.113-.052.21-.093.233-.098Z" />
      </svg>
    ),
    title: "Optimización web",
    slug: "optimizacion-web",
    description:
      "Soluciono problemas técnicos y mejoro tu sitio web actual para maximizar su rendimiento y mejorar la experiencia del usuario.",
    description2:
      "Realizo una revisión exhaustiva de tu sitio para detectar áreas de mejora, como la optimización de imágenes, la minificación de archivos CSS y JavaScript, y la configuración de caché del navegador. Cada ajuste está dirigido a reducir los tiempos de carga y mejorar la respuesta del servidor.",
    description3:
      "Además, monitorizo continuamente el rendimiento de tu sitio para asegurarme de que sigue funcionando de manera óptima, implementando ajustes adicionales cuando sea necesario. Mi objetivo es proporcionar una experiencia rápida y fluida para todos los usuarios de tu sitio web.",
    images: [OptimizacionWeb01, OptimizacionWeb02, OptimizacionWeb03], // Imágenes de muestra para este servicio
  },
  {
    id: 7,
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>Fing</title>
        <path d="M12.706 9.583c1.359.018 2.375 1.094 2.347 2.485-.027 1.317-1.117 2.352-2.46 2.337-1.333-.015-2.352-1.113-2.334-2.515.018-1.334 1.069-2.325 2.447-2.307zm6.259-3.852c-.654-.716-1.447-1.271-2.316-1.726-.26-.136-.535-.241-.8-.367-.444-.211-.719-.539-.579-1.052.147-.537.547-.738 1.071-.597 1.196.323 2.198 1.004 3.15 1.769.114.092.225.189.333.288.194.179.346.542.611.459.254-.08.079-.446.129-.681.048-.228.161-.422.405-.402.256.021.519.141.511.455a46.98 46.98 0 0 1-.116 2.518c-.03.375-.31.509-.68.491a72.177 72.177 0 0 0-2.081-.068c-.329-.006-.679.012-.685-.439-.005-.435.333-.47.667-.483.118-.002.256.039.38-.165zm-4.422-3.714c-.007 1.068-.87 1.938-1.917 1.934-1.063-.004-1.98-.923-1.971-1.973.009-1.057.944-1.993 1.973-1.978 1.059.016 1.922.926 1.915 2.017zM5.465 20.792c-1.049-.013-1.895-.891-1.894-1.964.001-1.106.893-2.018 1.949-1.993 1.063.025 1.925.959 1.893 2.049-.032 1.081-.89 1.921-1.948 1.908zm5.267 1.174c.023-1.124.857-1.896 2.017-1.866 1.04.026 1.9.948 1.861 1.992-.039 1.04-.955 1.92-1.984 1.908-1.062-.013-1.917-.931-1.894-2.034zM5.649 6.814c-1.13.002-1.966-.822-1.964-1.937.001-1.051.875-1.947 1.911-1.96 1.046-.012 1.953.868 1.965 1.907.013 1.126-.816 1.988-1.912 1.99zm-2.954 7.082a1.92 1.92 0 0 1-1.927-1.923c-.004-1.08.894-1.988 1.96-1.981 1.08.007 1.94.912 1.916 2.014-.025 1.099-.845 1.894-1.949 1.89zm18.931 5.047c-.009 1.103-.872 1.926-1.997 1.906-1.077-.02-1.84-.844-1.831-1.979.009-1.11.811-1.921 1.899-1.92 1.077.002 1.938.892 1.929 1.993zm1.606-6.87a10.458 10.458 0 0 1-.856 4.046c-.188.443-.51.724-1.044.546-.495-.164-.75-.587-.542-1.095a9.8 9.8 0 0 0 .731-4.062c-.016-.522.304-.818.836-.814.487.003.793.245.843.75.021.208.022.419.032.629zm-6.363 7.897c.575-.027.804.255.925.598a.808.808 0 0 1-.351.989c-.404.25-.84.473-1.328.529-.418.048-.741-.114-.918-.502-.168-.369-.102-.738.216-.965a4.064 4.064 0 0 1 1.456-.649zM4.67 7.84c-.027.8-.622 1.588-1.179 1.563-.441-.02-.886-.47-.885-.896.001-.762.622-1.615 1.161-1.595.512.017.92.437.903.928zm5.254 13.317c.003.597-.317.906-.902.853-.495-.045-.914-.299-1.291-.586-.302-.23-.411-.589-.213-.958.192-.358.472-.564.919-.497.838.124 1.484.627 1.487 1.188zm-6.456-6.743c.531.002 1.093.781 1.075 1.491a.871.871 0 0 1-.859.835c-.508.009-1.082-.738-1.1-1.432-.011-.423.456-.895.884-.894zM9.102 2.002c.53.009.839.344.818.885-.021.528-.81 1.1-1.487 1.078-.47-.015-.783-.369-.778-.879.006-.596.675-1.097 1.447-1.084z" />
      </svg>
    ),
    title: "Mantenimiento web",
    slug: "mantenimiento-web",
    description:
      "Ofrezco planes de mantenimiento web para asegurar que tu sitio se mantenga actualizado, seguro y funcional.",
    description2:
      "Me aseguro de que todos los componentes de tu sitio estén al día, incluyendo actualizaciones de seguridad para protegerte contra vulnerabilidades. También realizo pruebas de rendimiento periódicas para detectar y corregir cualquier problema antes de que afecte a tus usuarios.",
    description3:
      "Además, mis planes de mantenimiento incluyen soporte técnico para resolver cualquier inconveniente que pueda surgir, asegurando tiempos de inactividad mínimos y una experiencia de usuario sin interrupciones. Mi objetivo es que puedas concentrarte en tu negocio mientras yo me encargo de la salud de tu sitio web.",
    images: [MantenimientoWeb01, MantenimientoWeb02, MantenimientoWeb03], // Imágenes de muestra para este servicio
  },
  {
    id: 8,
    icon: (
      <svg
        role="img"
        viewBox="0 0 22 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="32"
      >
        <title>Google Analytics</title>
        <path d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z" />
      </svg>
    ),
    title: "Optimización SEO",
    slug: "optimizacion-seo",
    description:
      "Mejoro la visibilidad de tu sitio web en los motores de búsqueda con mis estrategias de optimización SEO adaptadas a tus necesidades específicas.",
    description2:
      "Mi enfoque SEO abarca tanto la optimización on-page, que incluye la mejora de contenido y palabras clave, como la optimización técnica, que asegura que tu sitio cumpla con los estándares de los motores de búsqueda. Esto incluye mejorar la velocidad de carga, la estructura del sitio, y la indexación de contenido.",
    description3:
      "Además, realizo un análisis continuo del rendimiento SEO para ajustar la estrategia según sea necesario y asegurar que tu sitio siga siendo competitivo en los resultados de búsqueda. Mi objetivo es ayudarte a alcanzar una mayor visibilidad y generar más oportunidades de negocio.",
    images: [OptimizacionSEO01, OptimizacionSEO02, OptimizacionSEO03], // Imágenes de muestra para este servicio
  },
];
// Fin datos de los servicios ofrecidos


// Datos de los proyectos

// Importación de las imágenes
import imgHE01 from "../assets/img/proyectos/he-01.png";
import imgHE02 from "../assets/img/proyectos/he-02.png";
import imgHE04 from "../assets/img/proyectos/he-04.png";
import imgEV01 from "../assets/img/proyectos/EV-01.png";
import imgEV02 from "../assets/img/proyectos/EV-02.png";
import imgEV03 from "../assets/img/proyectos/EV-03.png";
import imgL24701 from "../assets/img/proyectos/L247-01.png";
import imgL24702 from "../assets/img/proyectos/L247-02.png";
import imgL24703 from "../assets/img/proyectos/L247-03.png";
import imgPWAHE01 from "../assets/img/proyectos/PWA-HE-01.png";
import imgPWAHE02 from "../assets/img/proyectos/PWA-HE-02.png";
import imgPWAHE03 from "../assets/img/proyectos/PWA-HE-03.png";
import imgEsAr01 from "../assets/img/proyectos/ESAR-01.png";
import imgEsAr02 from "../assets/img/proyectos/ESAR-02.png";
import imgEsAr03 from "../assets/img/proyectos/ESAR-03.png";
import imgWVENTA01 from "../assets/img/proyectos/WVENTA-01.png";

export const proyectos = [
  {
    id: 1,
    images: [imgHE01, imgHE02, imgHE04],
    title: "Web - HERREELEC",
    description:
      "Este proyecto es una muestra de innovación y funcionalidad, desarrollado con las últimas tecnologías web como React JS, SCSS y Firebase, ofreciendo una experiencia de usuario fluida y moderna. Se trata del sitio web de un taller especializado en portones, diseñado para facilitar la gestión de visitas programadas directamente a través de la página. Además de proporcionar información detallada sobre servicios y productos, la web dispone de un sistema de reservas intuitivo que simplifica la programación de citas para los clientes. La integración de formularios y la base de datos de Firebase aseguran la eficiencia y seguridad en la gestión de la información.",
    tecnologias: "React JS, SCSS, Firebase",
    link: "https://www.herreelec.com/",
  },
  {
    id: 2,
    images: [imgEV03, imgEV01, imgEV02],
    title: "Logo - Equipo Volar",
    description:
      "Este logotipo fue creado para un equipo interdisciplinario de profesionales dedicados a la salud integral de niños y niñas, reflejando el espíritu de crecimiento y libertad. Representa a una persona elevando un barrilete, que funciona como metáfora de superación y aspiraciones. Los colores azul y coral aportan serenidad y energía positiva, mientras que la tipografía contemporánea subraya nuestra profesionalidad. Diseñado en Photoshop, este trabajo ejemplifica cómo la simplicidad visual puede comunicar un mensaje potente y optimista.",
    tecnologias: "Photoshop, Canva, Drive",
    link: "https://ejemplo-link-proyecto2.com",
  },
  {
    id: 3,
    images: [imgL24701, imgL24702, imgL24703],
    title: "Web - Lactancia 24/7",
    description:
      "Lactancia 24/7 es un sitio web diseñado para una puericultora especializada en ofrecer videollamadas y consultas relacionadas con la lactancia materna. A través de esta plataforma, las madres pueden acceder a asesoramiento profesional, solicitar artículos específicos y recibir consejos personalizados para mejorar su experiencia de lactancia. El sitio también ofrece la posibilidad de contactar directamente a la puericultora para programar consultas o adquirir productos recomendados.",
    tecnologias: "HTML5, CSS, Photoshop",
    link: "https://lactancia247.com",
  },
  {
    id: 4,
    images: [imgPWAHE01, imgPWAHE02, imgPWAHE03],
    title: "PWA - HE",
    description:
      "Esta Progressive Web App (PWA) fue desarrollada para una empresa de servicios que gestiona una amplia gama de actividades, incluyendo la administración de clientes, estados de proyectos, visitas programadas y usuarios para todo el personal. La aplicación incluye un sistema de gestión interna con un bloc de notas, creación de presupuestos y otras funcionalidades que mejoran la eficiencia operativa. Gracias a la implementación con React JS, SCSS y Firebase, la PWA ofrece una experiencia intuitiva, accesible desde cualquier dispositivo y con capacidades offline.",
    tecnologias: "React JS, SCSS, Firebase",
    link: "https://ejemplo-link-proyecto4.com",
  },
  {
    id: 5,
    images: [imgEsAr01, imgEsAr02, imgEsAr03],
    title: "Web - EsAr digital",
    description:
      "EsAr digital es una plataforma web creada para un grupo de jóvenes profesionales que ofrecen servicios digitales como marketing, diseño gráfico y desarrollo web, trabajando desde Argentina y España. La página web está diseñada para promover estos servicios y facilitar la colaboración entre clientes y el equipo de EsAr digital, proporcionando una experiencia de usuario moderna y eficiente.",
    tecnologias: "Vite, React JS, Tailwind, Firebase",
    link: "https://esar-c221b.web.app/",
  },
  {
    id: 6,
    images: [imgWVENTA01],
    title: "Web - Ventas Online",
    description:
      "Desarrollo de una plataforma de ventas en línea, enfocada en proporcionar una experiencia de compra rápida y segura. El proyecto incluye un sistema de carrito de compras, integración de pasarelas de pago y gestión de inventario. Utilizando React JS y SCSS para la interfaz de usuario y Firebase para la base de datos, la plataforma está optimizada para su uso tanto en dispositivos móviles como en desktop.",
    tecnologias: "React JS, SCSS, Firebase",
    link: "https://ejemplo-link-proyecto6.com",
  },
];
// Fin datos de los proyectos