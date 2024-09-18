import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <header className="header">
      <Image
              src="/imagenes/DOCLINK2.png"
              className="IMG"
              width={500}
              height={500}
              alt="logo"
            ></Image>
        <nav className="nav-links">
          <a href="#">Especialidades</a>
          <a href="#">Horarios</a>
          <a href="#">Contacto</a>
          <a href="#">Cuenta</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>CENTRO DE REGISTRO MÉDICO ONLINE</h2>
          <h1>Un Vínculo para tu Salud</h1>
          <p>
            Accede a los mejores servicios de la red médica online. Estaremos
            contigo en todo el proceso de agendamiento.
          </p>
          <a href="#" className="btnDer">
            Login
          </a>
          <a href="#" className="btnIzq">
            Ingresar Personal
          </a>
        </div>
        <div className="doctor-container">
          <div className="doctor">
            <Image
              src="/imagenes/doctor.png"
              className="doctor__img"
              width={500}
              height={500}
              alt="Doctor Image"
            ></Image>
          </div>
          <div className="background-gradient"></div>
        </div>
      </section>

      <section className="services">
        <div className="service-item">
          <img
            src="/imagenes/history.jpg"
            width={500}
            height={500}
            alt="Servicio 1"
          ></img>
          <h3>Historial Medico</h3>
          <p>Acceso a atención médica en cualquier momento del día.</p>
          <a href="#" className="btn1">
            Entrar
          </a>
        </div>
        <div className="service-item">
        <img
            src="/imagenes/consulta.jpg"
            width={500}
            height={500}
            alt="Servicio 1"
          ></img>
          <h3>Citas Online</h3>
          <p>Los mejores especialistas a tu disposición.</p>
          <a href="#" className="btn1">
            Entrar
          </a>
        </div>
        <div className="service-item">
        <img
            src="/imagenes/historial.jpg"
            width={500}
            height={500}
            alt="Servicio 1"
          ></img>
          <h3>Compartir Historial</h3>
          <p>Realiza tus consultas desde la comodidad de tu hogar.</p>
          <a href="#" className="btn1">
            Entrar
          </a>
        </div>

        <section className="services">
          <div className="service-item">
            <img
              src="/imagenes/noticia.jpg"
              width={500}
              height={500}
              alt="Servicio 1"
            ></img>
            <h3>Noticia</h3>
            <p>Acceso a atención médica en cualquier momento del día.</p>
            <a href="#" className="btn1">
            Entrar
          </a>
          </div>
          <div className="service-item">
          <img
            src="/imagenes/educacion.jpg"
            width={500}
            height={500}
            alt="Servicio 1"
          ></img>
            <h3>Educacion </h3>
            <p>Los mejores especialistas a tu disposición.</p>
            <a href="#" className="btn1">
            Entrar
          </a>
          </div>
          <div className="service-item">
          <img
            src="/imagenes/mapa.jpg"
            width={500}
            height={500}
            alt="Servicio 1"
          ></img>
            <h3>Mapa</h3>
            <p>Realiza tus consultas desde la comodidad de tu hogar.</p>
            <a href="#" className="btn1">
            Entrar
          </a>
          </div>
        </section>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
          <Image
              src="/imagenes/DOCLINK2.png"
              className="IMG"
              width={500}
              height={500}
              alt="logo"
            ></Image>
            <p className="inf">
              Brindando atención médica de calidad en línea, donde y cuando la
              necesites.
            </p>
            <div className="social-icons">
              <a href="#">
               
              </a>
              <a href="#">
              
              </a>
              <a href="#">
             
              </a>
              <a href="#">
               
              </a>
            </div>
          </div>
          <div className="footer-section links">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li>
                <a href="#">Política de Privacidad</a>
              </li>
              <li>
                <a href="#">Términos de Servicio</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h4>Contáctanos</h4>
            <p>Email: info@DocLink.com</p>
            <p>Teléfono: +1 234 567 890</p>
            <p>Dirección: Calle Falsa 123, Ciudad</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 DOCLINK. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}