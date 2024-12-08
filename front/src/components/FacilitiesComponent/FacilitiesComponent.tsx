import Style from './facilities.module.css';
import Image from 'next/image';
import gimnasioImg from '../../../public/saul/instalaciones-gimnasio_prueba.jpg'
import piscinaImg from '../../../public/saul/instalaciones-piscina_prueba.jpg'
import restauranteImg from '../../../public/saul/instalaciones-restaurante-1_prueba.jpg'
import spaImg from '../../../public/saul/instalaciones-spa_prueba.jpg'

export const FacilitiesComponent = () => {
    return (
        <section className={Style.container}>
        <div className={Style.portadaContainer}>
            <p>HOTEL Y RESORT DE LUJO</p>
            <h1>INSTALACIONES</h1>
            <h2>Disfruta de unas inatalaciones completas y de mejor calidad</h2>
        </div>

        <article className={Style.article0Container}>
            <h2>INSTALACIONES</h2>
            <h1>DISFRUTA DE LAS MÁS COMPLETAS Y MEJORES ISTALACIONES DE CALIDAD</h1>
        </article>
        <hr className={Style.hr}/>
{/*Gimnasio de entrenamiento*/}
        <article className={Style.gimnasioContainer}>
            <Image src={gimnasioImg} width={810} height={755} alt='Gimnasio'/>
            <p>01</p>
            <div className={Style.containerGim}>
                <p className={Style.aptttud}>APTTTUD</p>
                <h1>Gimnasio de entrenamiento</h1>
                <p className={Style.descriptionGim}>Disfruta de un gimnasio completamente 
                    equipado con máquinas de última generación y áreas
                     especializadas para entrenamiento funcional, cardio y pesas.
                      Ideal para mantenerte en forma durante tu estancia.</p>
                <button className={Style.saberMas}>Saber más</button>
            </div>
        </article>
        <hr className={Style.hr}/>
        {/*Piscina con varios niveles*/}
        <article className={Style.gimnasioContainer}>
            <div className={Style.containerGim}>
                <p className={Style.aptttud}>APTTTUD</p>
                <h1>Piscina con varios niveles</h1>
                <p className={Style.descriptionGim}>Relájate en nuestra piscina de diseño único, 
                    con áreas para adultos y niños. Rodeada de vistas espectaculares y cómodas tumbonas, 
                    es el lugar perfecto para disfrutar del sol y la tranquilidad.</p>
                <button className={Style.saberMas}>Saber más</button>
            </div>
            <p>02</p>
            <Image src={piscinaImg} width={810} height={755} alt='Gimnasio'/>
        </article>
        <hr className={Style.hr}/>
        {/*Restaurante*/}
        <article className={Style.gimnasioContainer}>
            <Image src={restauranteImg} width={810} height={755} alt='Gimnasio'/>
            <p>03</p>
            <div className={Style.containerGim}>
                <p className={Style.aptttud}>APTTTUD</p>
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
                <p className={Style.aptttud}>APTTTUD</p>
                <h1>SPA y sala de estar</h1>
                <p className={Style.descriptionGim}>Sumérgete en un oasis de relajación en nuestro SPA. 
                    Disfruta de masajes, tratamientos exclusivos y áreas de descanso diseñadas
                     para renovar cuerpo y mente. Perfecto para desconectarte del estrés diario.</p>
                <button className={Style.saberMas}>Saber más</button>
            </div>
            <Image src={spaImg} width={810} height={755} alt='Gimnasio'/>
            <p>01</p>
        </article>
        </section>
    );
};

export default FacilitiesComponent;