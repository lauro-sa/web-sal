import React from "react";
import ContenedorPagina from "../components/Contenedores/ContenedorPagina";
import Contenedor from "../components/Contenedores/Contenedor";

function DesarrolloPaginasWeb() {
    const imagePlaceholderStyle = {
        width: '100%',
        height: '100%',
        backgroundColor: '#e0e0e0', // Color de fondo gris claro
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#888',
        fontSize: '1.2rem',
    };

    return (
        <ContenedorPagina className="px-4">
            <h1 className="mt-16 text-2xl font-bold">Desarrollo de Páginas Web</h1>
            <Contenedor>
                <section className="my-12 flex flex-col lg:flex-row items-center gap-8">
                    {/* Texto */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-xl font-bold mb-3">Creo tu página web personalizada</h2>
                        <p className="text-sm mb-3">
                            Escucho tus necesidades y me pongo manos a la obra para transformar tus ideas en una realidad digital impresionante. Desarrollo tu sitio web desde cero, asegurándome de cuidar cada detalle. Personalizo el contenido, selecciono imágenes impactantes, y programo y diseño el sitio, culminando con su publicación. Todo listo en apenas dos semanas.
                        </p>
                        <button className="mt-4 px-6 py-2 bg-violeta-marca text-white rounded-full">
                            ¡Hablemos!
                        </button>
                    </div>

                    {/* Contenedor Provisorio para la Imagen */}
                    <div className="lg:w-1/2 h-64 rounded shadow-md">
                        <div style={imagePlaceholderStyle}>
                            Imagen 640x480
                        </div>
                    </div>
                </section>

                <section className="my-12 flex flex-col-reverse lg:flex-row items-center gap-8">
                    {/* Contenedor Provisorio para la Imagen */}
                    <div className="lg:w-1/2 h-64 rounded shadow-md">
                        <div style={imagePlaceholderStyle}>
                            Imagen de página web
                        </div>
                    </div>
                    {/* Texto */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-xl font-bold mb-3">Beneficios de tener tu propio sitio web:</h2>
                        <ul className="list-disc pl-5 text-sm mb-3 space-y-2">
                            <li>Establece una presencia digital robusta para tu negocio.</li>
                            <li>Construye confianza y credibilidad con tus clientes.</li>
                            <li>Diferénciate de la competencia.</li>
                            <li>Atrae y fideliza nuevos clientes.</li>
                            <li>Tu negocio disponible 24/7, todos los días del año.</li>
                            <li>Expande tu alcance a nuevas ciudades y países.</li>
                        </ul>
                        <p className="text-sm">
                            Integramos estrategia, diseño y tecnología para desarrollar un sitio web que no solo fortalezca tu presencia online, sino que también mejore la experiencia de usuario y genere más oportunidades de negocio para aumentar tus ventas.
                        </p>
                    </div>
                </section>
            </Contenedor>


            <section className="my-12 bg-violeta-marca text-white text-center py-12 rounded-lg shadow-md bg-opacity-50">
                <h2 className="text-xl font-bold mb-4">¿Todavía no tienes tu propia página web?</h2>
                <p className="text-sm mb-4">No esperes más. Vamos a trabajar juntos para alcanzar tus metas y transformar tus ideas en realidad.</p>
                <button className="mt-4 px-6 py-2 bg-white text-violeta-marca rounded-full font-bold">
                    ¡Hablemos!
                </button>
            </section>



            <Contenedor>
                <section className="my-12 space-y-8">
                    <h2 className="text-xl font-bold mb-4">¿Cómo desarrollo tu página web?</h2>
                    <p className="text-sm">
                        No te preocupes, me ocupo de todo el proceso.
                    </p>
                    <p className="text-sm">
                        Te asesoraré y acompañaré de principio a fin para asegurarnos de obtener los mejores resultados.
                    </p>

                    <div className="space-y-6">
                        {/* Primer Paso */}
                        <div className="flex flex-col lg:flex-row items-center gap-4">
                            <div className="lg:w-1/4 h-32 rounded shadow-md bg-gray-200 flex items-center justify-center">
                                <p className="text-center text-sm text-gray-600">Imagen del primer paso</p>
                            </div>
                            <div className="lg:w-3/4 text-sm">
                                <p>Me pondré en contacto contigo para agendar una llamada o videollamada y planificar juntos tu sitio web.</p>
                                <p>Seleccionaremos la plantilla de diseño que más se adecúe a tus necesidades y la personalizaré completamente.</p>
                            </div>
                        </div>

                        {/* Segundo Paso */}
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-4">
                            <div className="lg:w-1/4 h-32 rounded shadow-md bg-gray-200 flex items-center justify-center">
                                <p className="text-center text-sm text-gray-600">Imagen del segundo paso</p>
                            </div>
                            <div className="lg:w-3/4 text-sm">
                                <p>Con toda la información recabada, procederé a construir tu sitio. También gestionaré la compra del dominio y las cuentas de correo necesarias.</p>
                            </div>
                        </div>

                        {/* Tercer Paso */}
                        <div className="flex flex-col lg:flex-row items-center gap-4">
                            <div className="lg:w-1/4 h-32 rounded shadow-md bg-gray-200 flex items-center justify-center">
                                <p className="text-center text-sm text-gray-600">Imagen del tercer paso</p>
                            </div>
                            <div className="lg:w-3/4 text-sm">
                                <p>Te enviaré un correo con los detalles de acceso a tu nuevo sitio web para que puedas revisarlo y confirmar que todo esté correcto.</p>
                                <p>¡Y eso es todo! En 20 días hábiles tu página estará activa y en línea.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Contenedor>




            <section className="my-12 space-y-8">
                {/* Imagen de Dispositivos */}
                <div className="flex justify-center">
                    <div className="w-full lg:w-3/4 h-64 rounded shadow-md bg-gray-200 flex items-center justify-center">
                        <p className="text-center text-sm text-gray-600">Vista de la página web en diferentes dispositivos</p>
                    </div>
                </div>

                {/* Descripción de Servicios */}
                <Contenedor>
                    <div className="text-center lg:text-left">
                        <h2 className="text-xl font-bold mb-4">¿Qué incluye la creación de tu página web?</h2>
                        <ul className="list-disc pl-5 text-sm space-y-2">
                            <li>Asesoramiento personalizado con un gestor especializado.</li>
                            <li>Redacción de contenido a medida.</li>
                            <li>Optimización para dispositivos móviles.</li>
                            <li>Acceso a herramientas de autogestión.</li>
                            <li>Certificado de seguridad SSL para tu dominio.</li>
                            <li>Integración de una tienda con hasta 10 productos.</li>
                        </ul>
                    </div>
                </Contenedor>

                {/* Tipos de Páginas Web */}
                <Contenedor>
                    <div className="text-center lg:text-left">
                        <h2 className="text-xl font-bold mb-4">Tipos de páginas web que ofrezco</h2>
                        <p className="text-sm mb-4">
                            Ofrezco dos tipos de páginas web ideales para negocios locales y PYMES. Puedes elegir la opción que mejor se adapte a tus objetivos:
                        </p>

                        <div className="flex flex-col lg:flex-row lg:space-x-6">
                            {/* Web Básica */}
                            <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md mb-6 lg:mb-0">
                                <h3 className="text-lg font-bold mb-3">Web Básica</h3>
                                <p className="text-sm mb-4">
                                    La opción básica es perfecta para presentar tu negocio de manera simple y efectiva. Ideal si tienes un presupuesto ajustado o no necesitas funcionalidades avanzadas.
                                </p>
                                <ul className="list-disc pl-5 text-sm space-y-2">
                                    <li>Hasta 2 páginas con servicios incluidos.</li>
                                    <li>2 páginas auto-administrables.</li>
                                    <li>3 cuentas de correo electrónico.</li>
                                    <li>5 modificaciones mensuales.</li>
                                </ul>
                            </div>

                            {/* Web Premium */}
                            <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold mb-3">Web Premium</h3>
                                <p className="text-sm mb-4">
                                    La opción premium está diseñada para negocios más grandes o que requieren funcionalidades avanzadas. Incluye todo lo necesario para potenciar tu negocio en línea y aumentar tus ventas.
                                </p>
                                <ul className="list-disc pl-5 text-sm space-y-2">
                                    <li>Hasta 6 páginas con servicios incluidos.</li>
                                    <li>Páginas auto-administrables ilimitadas.</li>
                                    <li>8 cuentas de correo electrónico.</li>
                                    <li>Modificaciones ilimitadas.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Contenedor>
            </section>


            <section className="my-12 bg-violeta-marca text-white text-center py-12 rounded-lg shadow-md bg-opacity-50">
                <h2 className="text-xl font-bold mb-4">¿No estás segur@ de qué tipo de página web es la mejor para vos?</h2>
                <p className="text-sm mb-4">Contáctame y te brindaré la asesoría que necesitas para elegir la opción ideal para tu negocio.</p>
                <button className="mt-4 px-6 py-2 bg-white text-violeta-marca rounded-full font-bold">
                    Asesorarme
                </button>
            </section>


            <section className="my-12 space-y-8">
                {/* Texto Explicativo */}
                <Contenedor>
                    <div className="text-center lg:text-left">
                        <h2 className="text-xl font-bold mb-4">¿Por qué deberías tener una página web?</h2>
                        <p className="text-sm mb-4">Es sencillo: tu negocio necesita estar donde todos están.</p>
                        <p className="text-sm mb-4">
                            Los usuarios pasan un promedio de 7 horas al día en internet. <span className="font-semibold">Digital 2022 Global Overview Report</span>
                        </p>
                        <p className="text-sm mb-4">
                            Cada minuto, se realizan 4 millones de búsquedas en Google. <span className="font-semibold">Estudio Data Never Sleeps</span>
                        </p>
                        <p className="text-sm mb-4">
                            Se estima que para 2040, el 95% de las compras se realizarán en línea. <span className="font-semibold">NASDAQ</span>
                        </p>
                        <p className="text-sm mb-4">
                            Pasamos cada vez más tiempo utilizando dispositivos como smartphones, computadoras y tabletas, que se han convertido en grandes aliados para los negocios.
                        </p>
                        <p className="text-sm mb-4">
                            La forma de comprar y vender ha cambiado drásticamente en los últimos años. Con todos estos cambios, los negocios enfrentan el desafío de ganar un lugar en la mente y el corazón de sus clientes.
                        </p>
                        <p className="text-sm">
                            Uno de esos desafíos es construir una presencia digital sostenible a lo largo del tiempo, y esto se logra con un sitio web bien estructurado.
                        </p>
                    </div>
                </Contenedor>

                {/* Imágenes Representativas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="h-48 rounded shadow-md bg-gray-200 flex items-center justify-center">
                        <p className="text-center text-sm text-gray-600">Imagen: Mujer joven feliz navegando en una página web</p>
                    </div>
                    <div className="h-48 rounded shadow-md bg-gray-200 flex items-center justify-center">
                        <p className="text-center text-sm text-gray-600">Imagen: Hombre joven navegando en una página web desde su celular</p>
                    </div>
                </div>

                {/* Ventajas de un Sitio Web */}
                <Contenedor>
                    <div className="text-center lg:text-left">
                        <h3 className="text-lg font-bold mb-3">Ventajas de tener un sitio web:</h3>
                        <ul className="list-disc pl-5 text-sm space-y-2">
                            <li>Miles de usuarios están buscando en internet productos o servicios como los que ofreces. Tu página web te permite estar presente donde tus clientes potenciales ya están.</li>
                            <li>Te ayuda a atraer más clientes y a llegar a aquellos que están más lejos.</li>
                            <li>Mejora la imagen y la credibilidad de tu marca.</li>
                            <li>Hace que la inversión en publicidad sea más efectiva.</li>
                            <li>Tu página web está disponible las 24 horas del día, los 365 días del año.</li>
                        </ul>
                    </div>
                </Contenedor>
            </section>


            <section className="my-12 space-y-8">
                {/* Imagen Representativa */}
                <div className="flex justify-center">
                    <div className="w-full lg:w-3/4 h-64 rounded shadow-md bg-gray-200 flex items-center justify-center">
                        <p className="text-center text-sm text-gray-600">Imagen de una persona trabajando en una computadora</p>
                    </div>
                </div>

                {/* Título y Descripción */}
                <Contenedor>
                    <div className="text-center lg:text-left">
                        <h2 className="text-xl font-bold mb-4">¿Qué debe tener una página web efectiva?</h2>
                        <p className="text-sm mb-4">
                            Para captar la atención de los usuarios y ofrecer una experiencia excepcional, tu sitio web debe cumplir con ciertos criterios esenciales. Aquí te menciono algunos de los más importantes:
                        </p>
                    </div>

                    {/* Lista de Requisitos */}
                    <div className="space-y-6">
                        {/* Dominio */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600">🌐</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Dominio</h3>
                                <p className="text-sm">
                                    El dominio es el nombre de tu sitio web. Debe ser corto, memorable y representativo de tu marca. Es lo que identifica y diferencia a tu página de las demás.
                                </p>
                            </div>
                        </div>

                        {/* Hosting */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600">💻</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Hosting</h3>
                                <p className="text-sm">
                                    El hosting es el espacio en servidores donde se aloja tu sitio web, permitiendo que esté disponible en línea las 24 horas del día, los 7 días de la semana. Es fundamental para asegurar que tu página esté siempre accesible.
                                </p>
                            </div>
                        </div>

                        {/* Diseño Adaptativo */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600">📱</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Diseño adaptativo</h3>
                                <p className="text-sm">
                                    Dado que cada vez más personas acceden a internet desde dispositivos móviles, es crucial que el diseño de tu sitio web se adapte a diferentes tamaños de pantalla, asegurando una experiencia de usuario consistente.
                                </p>
                            </div>
                        </div>

                        {/* Diseño Centrado en el Usuario */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600">🎨</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Diseño centrado en el usuario</h3>
                                <p className="text-sm">
                                    Un diseño enfocado en el usuario facilita la navegación y la realización de acciones clave (como comprar o descargar) en tu sitio web, mejorando así la experiencia de tus clientes.
                                </p>
                            </div>
                        </div>

                        {/* Estructura SEO */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600">🔍</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Estructura SEO</h3>
                                <p className="text-sm">
                                    El SEO (Search Engine Optimization) consiste en técnicas que mejoran la visibilidad de tu sitio web en los motores de búsqueda, ayudándote a aparecer en los resultados de Google sin necesidad de pagar por anuncios.
                                </p>
                            </div>
                        </div>

                        {/* Conexión con Redes Sociales */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600">📢</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Conexión con redes sociales</h3>
                                <p className="text-sm">
                                    Tu página web y tus redes sociales deben trabajar juntas. Las redes sociales pueden ser un excelente canal para dirigir tráfico hacia tu sitio web, aumentando así tu alcance y visibilidad.
                                </p>
                            </div>
                        </div>

                        {/* Blog */}
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600">✍️</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Blog</h3>
                                <p className="text-sm">
                                    Un blog es una herramienta poderosa para conectar con tu audiencia. Te permite compartir contenido valioso, responder preguntas frecuentes y ofrecer información exclusiva, ayudando a construir una relación más cercana con tus clientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </Contenedor>
            </section>


            <section className="my-12 space-y-8">
                {/* Imagen Representativa */}
                <div className="flex justify-center">
                    <div className="w-full lg:w-3/4 h-64 rounded shadow-md bg-gray-200 flex items-center justify-center">
                        <p className="text-center text-sm text-gray-600">Imagen de un hombre diseñando una página web en una laptop</p>
                    </div>
                </div>

                {/* Título y Descripción */}
                <Contenedor>
                    <div className="text-center lg:text-left">
                        <h2 className="text-xl font-bold mb-4">¿Cómo crear un sitio web efectivo?</h2>
                        <p className="text-sm mb-4">
                            La planificación es esencial para desarrollar una página web que realmente funcione. Es crucial definir con claridad tus objetivos, conocer a tu público, establecer un presupuesto, planificar el contenido y determinar cómo medirás el éxito de tu sitio.
                        </p>
                    </div>

                    {/* Puntos Clave */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600">🎯</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Objetivos claros</h3>
                                <p className="text-sm">Define el objetivo principal de tu página web para garantizar que sea efectiva y cumpla con su propósito.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600">👥</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Conoce a tu cliente ideal</h3>
                                <p className="text-sm">Comprender a tu público objetivo te permitirá crear un sitio que realmente conecte y resuene con ellos.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600">💰</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Presupuesto adecuado</h3>
                                <p className="text-sm">Es vital definir cuánto estás dispuesto a invertir en tu página web para asegurar que cumpla con tus expectativas.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600">📄</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Contenido de calidad</h3>
                                <p className="text-sm">Planifica cuidadosamente el contenido que vas a incluir en tu página web para que sea relevante y atractivo.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600">📊</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Métricas de éxito</h3>
                                <p className="text-sm">Mide el rendimiento de tu sitio web para asegurarte de que esté cumpliendo con los objetivos que te has planteado.</p>
                            </div>
                        </div>
                    </div>
                </Contenedor>
            </section>


            <section className="my-12 space-y-8">
                {/* Imagen Representativa */}
                <div className="flex justify-center">
                    <div className="w-full lg:w-3/4 h-64 rounded shadow-md bg-gray-200 flex items-center justify-center">
                        <p className="text-center text-sm text-gray-600">Mujer sosteniendo una notebook</p>
                    </div>
                </div>

                {/* Título y Descripción */}
                <Contenedor>
                    <div className="text-center lg:text-left">
                        <h2 className="text-xl font-bold mb-4">¿Querés crear tu página web pero no sabés por dónde empezar?</h2>
                        <p className="text-sm mb-4">No te preocupes, estoy aquí para ayudarte. Crear una página web puede parecer un desafío, pero con la planificación adecuada y el apoyo necesario, el proceso puede ser sencillo y sin complicaciones.</p>
                        <p className="text-sm mb-4">Me encargaré de todo, desde la planificación hasta el diseño y desarrollo, siempre enfocándome en crear una página web efectiva y centrada en el usuario.</p>
                        <p className="text-sm">Si querés saber más sobre cómo puedo ayudarte a crear la página web de tu negocio, no dudes en contactarme. ¡Estoy aquí para asistirte en cada paso del camino!</p>
                    </div>
                </Contenedor>
            </section>



        </ContenedorPagina>
    );
}

export default DesarrolloPaginasWeb;
