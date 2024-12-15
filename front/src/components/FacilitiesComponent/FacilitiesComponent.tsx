import Style from "./facilities.module.css";
import Image from "next/image";
import gimnasioImg from "../../../public/saul/instalaciones-gimnasio_prueba.jpg";
import piscinaImg from "../../../public/saul/instalaciones-piscina_prueba.jpg";
import restauranteImg from "../../../public/saul/instalaciones-restaurante-1_prueba.jpg";
import spaImg from "../../../public/saul/instalaciones-spa_prueba.jpg";
import Link from "next/link";

export const FacilitiesComponent = () => {
  return (
    <>
      <section className={Style.container}>
        <div className={Style.portadaContainer}>
          <h2>HOTEL Y RESORT DE LUJO</h2>
          <h1>INSTALACIONES</h1>
          <p>Disfruta de unas instalaciones completas y de mejor calidad</p>
        </div>
      </section>

      <section className={Style.containerBody}>
        <article className={Style.article0Container}>
          <h2>INSTALACIONES</h2>
          <p>
            DISFRUTA DE LAS MÁS COMPLETAS Y MEJORES INSTALACIONES DE CALIDAD
          </p>
        </article>
        <hr className={Style.hr}/>
        {/*Restaurante*/}
        <article className={Style.gimnasioContainer}>
            <Image src={restauranteImg} width={810} height={755} alt='Gimnasio'/>
            <p>03</p>
            <div className={Style.containerGim}>
                <p className={Style.aptttud}>Gastronomía exclusiva</p>
                <h1>Restaurante</h1>
                <p className={Style.descriptionGim}>Déjate sorprender por una experiencia culinaria inolvidable. 
                    Nuestro restaurante combina sabores locales e internacionales,
                     preparados con ingredientes frescos y de alta calidad. Vive un viaje gastronómico único.</p>
                <button className={Style.saberMas}><Link href='restaurant'>Saber más</Link></button>
            </div>
        </article>
        <hr className={Style.hr} />

        {/*Piscina con varios niveles*/}
        <article className={Style.gimnasioContainer}>
          <div className={Style.containerGim}>
            <h3 className={Style.aptttud}>Relajación y diversión</h3>
            <h1>Piscina con varios niveles</h1>
            <p className={Style.descriptionGim}>
              Relájate en nuestra piscina de diseño único, con áreas para
              adultos y niños. Rodeada de vistas espectaculares y cómodas
              tumbonas, es el lugar perfecto para disfrutar del sol y la
              tranquilidad.
            </p>
            <button className={Style.saberMas}>
              <Link href="pool">Saber más</Link>
            </button>
          </div>
          <span className={Style.span}>02</span>
          <Image src={piscinaImg} width={810} height={755} alt="Gimnasio" />
        </article>
        </article>
        <hr className={Style.hr} />

        {/*SPA y sala de estar*/}
        <article className={Style.gimnasioContainer}>
          <div className={Style.containerGim}>
            <h3 className={Style.aptttud}>Bienestar y lujo</h3>
            <h1>SPA y sala de estar</h1>
            <p className={Style.descriptionGim}>
              Sumérgete en un oasis de relajación en nuestro SPA. Disfruta de
              masajes, tratamientos exclusivos y áreas de descanso diseño para
              renovar cuerpo y mente. Perfecto para desconectarte del estrés
              diario.
            </p>
            <button className={Style.saberMas}>
              <Link href="">Saber más</Link>
            </button>
          </div>
          <span className={Style.span}>04</span>
          <Image src={spaImg} width={810} height={755} alt="Gimnasio" />

        </article>
      </section>
    </>
  );
};

export default FacilitiesComponent;
