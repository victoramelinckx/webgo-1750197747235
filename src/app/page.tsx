
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza Tu Negocio en 24 Horas" subheadline="Para dueños de negocios que deseen aumentar sus ventas, entregamos un sitio web en menos de 24 horas y brindamos soporte continuo 24/7." cta1="Comienza Ahora" />
<How step1Title="Comparte tu visión" step1Desc="Dinos sobre tu negocio y tus metas." step2Title="Creación exprés" step2Desc="Desarrollamos tu web de ventas en 24 horas." step3Title="Ventas digitalizadas" step3Desc="Vende online sin preocuparte por la gestión." />
<Aboutus headline="WebGo: boostea tus ventas digitalmente" subheadline="WebGo digitaliza tu negocio facilitando ventas online y gestionando tu web por ti" beneficiotitulo1="Ventas Digitales Simplificadas" beneficio1="Guía tus ventas desde recomendaciones hasta online" beneficiotitulo2="Gestión Web Integral" beneficio2="Nos encargamos de tu web. Tú, descansa" />
<Services heading="Digitaliza tus ventas y acelera tu crecimiento" description="Con WebGo, transformamos tu negocio en una máquina de ventas online. No necesitas preocuparte por el tiempo ni el conocimiento técnico." services={[{"name":"Creación de Sitio Web","icon":"globe","description":"Desarrollamos tu tienda online en menos de 24 horas."},{"name":"Soporte Técnico 24/7","icon":"life-ring","description":"Siempre disponibles para resolver tus dudas y problemas."},{"name":"Optimización SEO","icon":"search","description":"Aseguramos que tu sitio sea fácil de encontrar en Google."},{"name":"Estrategia Digital","icon":"chart-line","description":"Diseñamos un plan para atraer y convertir a tus clientes online."},{"name":"Formación Digital","icon":"chalkboard-teacher","description":"Te enseñamos a gestionar y optimizar tu tienda online."},{"name":"Integración con Redes Sociales","icon":"users","description":"Conectamos tu sitio web con tus redes para aumentar tu alcance."}]} />
<BeforeAndAfter subheadline="Transformaciones WebGo: Donde los sueños digitales se hacen realidad" />
<Faq faqs={[{"pregunta":"¿Qué es exactamente lo que WebGo ofrece para ayudarme a digitalizar mi negocio?","respuesta":"WebGo ofrece soluciones integrales para la digitalización de tu negocio. Nuestros servicios incluyen la creación de un sitio web profesional, optimizado para SEO, y el diseño de una estrategia de ventas en línea. Todo esto te permitirá aumentar tus ventas y llegar a un público más amplio, sin importar dónde se encuentren."},{"pregunta":"¿Cómo puede WebGo ayudar a mis clientes a hacer compras en línea?","respuesta":"En WebGo, creamos sitios web intuitivos y fáciles de navegar. Tus clientes podrán encontrar y comprar tus productos o servicios con facilidad. Además, proporcionamos opciones de pago seguras y convenientes para garantizar una experiencia de compra positiva."},{"pregunta":"Soy dueño de un pequeño negocio y no tengo tiempo para gestionar un sitio web. ¿Cómo puede WebGo ayudarme?","respuesta":"Entendemos lo ocupado que puedes estar al dirigir tu propio negocio. Por eso, en WebGo, ofrecemos la gestión completa del sitio web, permitiéndote concentrarte en lo que mejor sabes hacer. Nos encargamos de todo, desde la actualización de contenido hasta el monitoreo de SEO, para que tu sitio web siga funcionando de manera óptima."},{"pregunta":"Estoy acostumbrado a obtener clientes a través de recomendaciones. ¿Cómo puede WebGo ayudarme a aumentar mis ventas en línea?","respuesta":"En WebGo, utilizamos técnicas de SEO y marketing digital para atraer tráfico relevante a tu sitio web. De esta manera, puedes llegar a un público más amplio y aumentar tus ventas en línea. Además, te ayudamos a fomentar el compromiso en línea para que puedas construir relaciones sólidas con tus clientes y fomentar las recomendaciones en línea."},{"pregunta":"¿Cuánto cuesta el servicio de WebGo y qué incluye?","respuesta":"El precio de nuestro servicio es de 123123. Incluye la creación y gestión de tu sitio web, así como la implementación de una estrategia de ventas en línea. Además, ofrecemos soporte continuo para asegurarnos de que tu sitio web esté siempre optimizado y funcionando correctamente."}]} />
<BookAppointment 
                      heading="Digitaliza tu negocio hoy" 
                      description="Aprovecha la fuerza del comercio en línea. Con WebGo, puedes vender en línea fácilmente sin tener que dedicar tiempo a la gestión del sitio web."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
