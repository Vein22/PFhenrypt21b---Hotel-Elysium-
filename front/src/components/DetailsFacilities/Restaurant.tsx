import Style from '../FacilitiesComponent/facilities.module.css'
import Styles from '../DetailsFacilities/detailsStyles.module.css'
import Image from 'next/image';
import restaurantIMG from '../../../public/saul/instalaciones-restaurante-prueba.jpg';

export const RestaurantComponent = () => {
    return (
        <section className={Styles.container}>
        <div className={Styles.portadaDetails}>
            <h1>RESTAURANTE</h1>
            <h2>DISFRUTA DE NUESTRA VARIEDAD GASTRONÓMICA</h2>
        </div>

        <article className={Style.article0Container}>
            <h2>RESTAURANTE</h2>
            <h1>DISFRUTA DE NUESTRAS INSTALACIONES Y NUESTRA GRAN VARIEDAD GASTRONÓMICA</h1>
        </article>
{/*Gimnasio de entrenamiento*/}
        <article className={Styles.gimnasioContainer}>
            <Image src={restaurantIMG} width={780} height={755} alt='Gimnasio'/>

            <div className={Styles.containerGim}>
                <h1>Horas de Atención</h1>
                <p>Desayuno: <span>7:00 a 13:30</span></p>
                <p>Almuerzo: <span>13:00 a 14:00</span></p>
                <p>Cena: <span className={Styles.cena}>18:00 a 19:00</span></p>
                <p>Cena: <span className={Styles.cena}>20:30 a 22:00</span></p>
            </div>
        </article>

        {/*Alimentos*/}
        <article className={Styles.alimentosContainer}>
            <h2 className={Styles.subTitulos}>ALIMENTOS</h2>
            <h1>DETALLES DEL SERVICIO</h1>
            <p className={Styles.detalles}>
            En nuestro restaurante, nos enorgullece ofrecer un servicio impecable en cada uno de nuestros platillos. 
            Nuestro equipo de cocina trabaja con pasión para brindarte una experiencia gastronómica excepcional, 
            adaptada a tus gustos y necesidades dietéticas. Además, nuestro personal siempre está disponible 
            para asegurar que tu experiencia sea lo más cómoda posible. Desde opciones tradicionales hasta 
            innovadoras, cada plato está diseñado para deleitar tus sentidos.
             </p>

             <h1>REGLAS DEL RESTAURANTE</h1>
            <p className={Styles.detalles}>
            Nuestro restaurante sigue un código de conducta que garantiza una experiencia placentera para
             todos los comensales. Te pedimos que respetes las siguientes reglas:
             </p>
            
                <p className={Styles.detalles}>1- Por favor, mantén un tono de voz moderado.</p>
                <p className={Styles.detalles}>2- No está permitido fumar en el interior del restaurante.</p>
                <p className={Styles.detalles}>3- Se agradece la puntualidad para las reservas, para poder ofrecer un servicio más eficiente.</p>
                <p className={Styles.detalles}>4- Las mascotas no están permitidas dentro del restaurante.</p>


             <h1>CÓDIGO DE VESTIMENTA</h1>
            <p className={Styles.detalles}>
            Para asegurar que todos nuestros comensales disfruten de una experiencia agradable, 
            pedimos que se sigan las siguientes normas de vestimenta:
             </p>

             <p className={Styles.detalles}>
             Ropa casual o formal.
             </p>

             <p className={Styles.detalles}>
             No se permite el uso de trajes de baño o ropa deportiva dentro del restaurante.
             </p>
            </article>
        <hr className={Styles.hr}/>
        {/*Restaurante*/}
        <article className={Styles.gimnasioContainer}>
            <div>
                <h1>MENÚ DE COMIDA DEL RESTAURANTE</h1>
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

export default RestaurantComponent;