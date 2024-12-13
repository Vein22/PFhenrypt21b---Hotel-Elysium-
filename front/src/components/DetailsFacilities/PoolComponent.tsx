import Style from '../FacilitiesComponent/facilities.module.css'
import Styles from '../DetailsFacilities/detailsStyles.module.css'
import Image from 'next/image';
import restaurantIMG from '../../../public/saul/piscina-detail.jpg';
import restaurantIMG2 from '../../../public/saul/piscina-detail-2.jpg';
import Link from 'next/link';

export const PoolComponent = () => {
    return (
        <section className={Styles.container}>
            <button className={Styles.volver}><Link href='facilities'>VOLVER</Link></button>
        <div className={Styles.portadaPiscina}>
            <h1>PISCINA</h1>
            <h2>RELAX Y DIVERSIÓN EN NUESTRA PISCINA</h2>
        </div>

        <article className={Style.article0Container}>
            <h2>PISCINAs</h2>
            <h1>DISFRUTA DE NUESTRAS EXCLUSIVAS INSTALACIONES ACUÁTICAS</h1>
        </article>
{/*Gimnasio de entrenamiento*/}
        <article className={Styles.gimnasioContainer}>
            <Image src={restaurantIMG} width={780} height={755} alt='Gimnasio'/>

            <div className={Styles.containerGim}>
            <Image src={restaurantIMG2} width={780} height={955} alt='Gimnasio'/>
            <p>Las piscina estan equipadas con zonas de descanso y camastros para que disfrutes del sol de manera segura.</p>
            </div>
        </article>

        {/*Alimentos*/}
        <article className={Styles.alimentosContainer}>
            <h2 className={Styles.subTitulos}>NIVELES</h2>
            <h1>PISCINAS CON VARIOS NIVELES</h1>
            <p className={Styles.detalles}>
            Sumérgete en la comodidad y tranquilidad de nuestra piscina de varios niveles, diseñada para ofrecerte una experiencia única
            . Con áreas especialmente pensadas tanto para adultos como para niños, podrás disfrutar de un ambiente seguro y relajante,
             adaptado a todas las edades. Desde la zona de profundidades más suaves ideales para los más pequeños, hasta el nivel más 
             profundo para aquellos que buscan nadar y relajarse en sus aguas cristalinas, nuestra piscina es el lugar perfecto para disfrutar de un día en el agua.

La piscina está rodeada por un paisaje impresionante que ofrece vistas panorámicas de la naturaleza circundante, creando un ambiente 

perfecto para relajarte bajo el sol. Además, nuestras tumbonas cómodas y espaciosas están dispuestas en áreas estratégicas para que 
puedas disfrutar del sol mientras tomas un refresco, leyendo un libro o simplemente contemplando las vistas.

Ya sea que busques un lugar para disfrutar de la paz y la relajación o prefieras pasar un rato de diversión en familia, nuestra 
piscina se adapta a tus necesidades, brindándote lo mejor de ambos mundos. Con un ambiente sereno para desconectar del estrés y 
opciones de actividades acuáticas para mantenerte activo, es el espacio perfecto para liberarte de la rutina.

¡Disfruta del lujo de nuestra piscina y crea recuerdos inolvidables!.
             </p>

             <h1>REGLAS DE LA PISCINAS</h1>
            <p className={Styles.detalles}>
            Para asegurar una experiencia agradable y segura para todos nuestros huéspedes, te pedimos que sigas estas simples reglas:
             </p>
            
                <p className={Styles.detalles}>1- Uso obligatorio de traje de baño adecuado. No se permite el ingreso a la piscina sin él.</p>
                <p className={Styles.detalles}>2- No correr ni realizar actividades peligrosas cerca de la piscina.</p>
                <p className={Styles.detalles}>3- Niños menores de 12 años deben estar acompañados por un adulto en todo momento.</p>
                <p className={Styles.detalles}>4- No se permiten animales dentro del área de la piscina.</p>
                <p className={Styles.detalles}>5- Uso responsable de las tumbonas y sillas. Por favor, no ocupes más de una tumbona si no la estás utilizando.</p>


             <h1>CÓDIGO DE VESTIMENTA</h1>
            <p className={Styles.detalles}>
            Nuestro código de vestimenta en la piscina es sencillo, pero fundamental para mantener un ambiente cómodo para todos los huéspedes:
             </p>

             <p className={Styles.detalles}>
             Traje de baño adecuado para adultos y niños.
             </p>

             <p className={Styles.detalles}>
             Toallas y sombrillas disponibles a solicitud en el área.
             </p>

             <p className={Styles.detalles}>
             Uso de protector solar recomendado.
             </p>
            </article>
        <hr className={Styles.hr}/>
        {/*Restaurante*/}
        <article className={Styles.gimnasioContainer}>
            <div>
                <h1>MENÚ EN EL ÁREA DE LA PISCINA</h1>
                <nav>
                    <a href="">DESAYUNO</a>
                    <a href="">COMIDA</a>
                    <a href="">CENA</a>
                </nav>
            </div>
            <div>
                
            </div>
        </article>
        </section>
    );
};

export default PoolComponent;