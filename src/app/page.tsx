import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <header className="header">
        <div className="container">
            <Image src="/../../public/imagenes/fondo.jpg " width={500} height={500} alt="SMILE Clinic"></Image>
            <nav className="nav-links">
                
                <a href="#">Especialidades</a>
                <a href="#">Horarios</a>
                <a href="#">Contacto</a>
                <a href="#">Mi Cuenta</a>
            </nav>
        </div>
    </header>

    <section className="hero">
        <div className="hero-content">
            <h2>CENTRO DE REGISTRO MÉDICO ONLINE</h2>
            <h1>Un Vínculo para tu Salud</h1>
            <p>Accede a los mejores servicios de la red médica online. Estaremos contigo en todo el proceso de agendamiento.</p>
            <a href="#" className="btn">Login</a>
        </div>
        <div className="doctor-container">
            <div className="doctor">
                <Image src="/imagenes/doctor.png"  className= "doctor__img" width={500} height={500}alt="Doctor Image"></Image>
            </div>
        </div>
    </section>

    <section className="services">
        <h2>Nuestros Servicios</h2>
        <div className="service-item">
            <img src="/../../public/imagenes/doctor.png" width={500} height={500} alt="Servicio 1"></img>
            <h3>Atención 24/7</h3>
            <p>Acceso a atención médica en cualquier momento del día.</p>
        </div>
        <div className="service-item">
            <Image src="" alt="Servicio 2"></Image>
            <h3>Especialistas</h3>
            <p>Los mejores especialistas a tu disposición.</p>
        </div>
        <div className="service-item">
            <Image src="" alt="Servicio 3"></Image>
            <h3>Consulta en Línea</h3>
            <p>Realiza tus consultas desde la comodidad de tu hogar.</p>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 SMILE Clinic. Todos los derechos reservados.</p>
        <p>
            <a href="#">Política de Privacidad</a> | 
            <a href="#">Términos de Servicio</a>
        </p>
    </footer>
    </main>
  );
}
