import Style from '../FacilitiesComponent/facilities.module.css'
import Styles from '../DetailsFacilities/detailsStyles.module.css'
import Image from 'next/image';
import restaurantIMG from '../../../public/saul/instalaciones-restaurante-prueba.jpg';

export const RestaurantComponent = () => {
    return (
        <section className={Style.container}>
        <div className={Styles.portadaDetails}>
            <h1>RESTAURANTE</h1>
            <h2>DISFRUTA DE NUESTRA VARIEDAD GASTRONÓMICA</h2>
        </div>

        <article className={Style.article0Container}>
            <h2>RESTAURANTE</h2>
            <h1>DISFRUTA DE NUESTRAS INSTALACIONES Y NUESTRA GRAN VARIEDAD GASTRONÓMICA</h1>
        </article>
{/*Gimnasio de entrenamiento*/}
        <article className={Style.gimnasioContainer}>
            <Image src={restaurantIMG} width={780} height={755} alt='Gimnasio'/>

            <div className={Styles.containerGim}>
                <h1>Horas de Atención</h1>
                <p>Desayuno: <span>7:00 a 13:30</span></p>
                <p>Almuerzo: <span>13:00 a 14:00</span></p>
                <p>Cena: <span className={Styles.cena}>18:00 a 19:00</span></p>
                <p>Cena: <span className={Styles.cena}>20:30 a 22:00</span></p>
            </div>
        </article>
        <hr className={Style.hr}/>
        {/*Piscina con varios niveles*/}
        <article className={Style.gimnasioContainer}>
            <div className={Style.containerGim}>
                <p className={Style.aptttud}>Relajación y diversión</p>
                <h1>Piscina con varios niveles</h1>
                <p className={Style.descriptionGim}>Relájate en nuestra piscina de diseño único, 
                    con áreas para adultos y niños. Rodeada de vistas espectaculares y cómodas tumbonas, 
                    es el lugar perfecto para disfrutar del sol y la tranquilidad.</p>
                <button className={Style.saberMas}>Saber más</button>
            </div>
            <p>02</p>
            <Image src='' width={810} height={755} alt='Gimnasio'/>
        </article>
        <hr className={Style.hr}/>
        {/*Restaurante*/}
        <article className={Style.gimnasioContainer}>
            <Image src='' width={810} height={755} alt='Gimnasio'/>
            <p>03</p>
            <div className={Style.containerGim}>
                <p className={Style.aptttud}>Gastronomía exclusiva</p>
                <h1>Restaurante</h1>
                <p className={Style.descriptionGim}>Déjate sorprender por una experiencia culinaria inolvidable. 
                    Nuestro restaurante combina sabores locales e internacionales,
                     preparados con ingredientes frescos y de alta calidad. Vive un viaje gastronómico único.</p>
                <button className={Style.saberMas}>Saber más</button>
            </div>
        </article>
        <hr className={Style.hr}/>
        {/*SPA y sala de estar*/}
        <article className={Style.gimnasioContainer}>
            <div className={Style.containerGim}>
                <p className={Style.aptttud}>Bienestar y lujo</p>
                <h1>SPA y sala de estar</h1>
                <p className={Style.descriptionGim}>Sumérgete en un oasis de relajación en nuestro SPA. 
                    Disfruta de masajes, tratamientos exclusivos y áreas de descanso diseñadas
                     para renovar cuerpo y mente. Perfecto para desconectarte del estrés diario.</p>
                <button className={Style.saberMas}>Saber más</button>
            </div>
            <Image src='' width={810} height={755} alt='Gimnasio'/>
            <p>01</p>
        </article>
        </section>
    );
};

export default RestaurantComponent;