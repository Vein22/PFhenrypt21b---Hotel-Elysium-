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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis saepe necessitatibus maiores possimus.
             Repellendus fugit, neque inventore aliquam, nihil quam quae impedit a, pariatur minima unde numquam qui porro nesciunt.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis saepe necessitatibus maiores possimus.
             Repellendus fugit, neque inventore aliquam, nihil quam quae impedit a, pariatur minima unde numquam qui porro nesciunt.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis saepe necessitatibus maiores possimus.
             Repellendus fugit, neque inventore aliquam, nihil quam quae impedit a, pariatur minima unde numquam qui porro nesciunt.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis saepe necessitatibus maiores possimus.
             Repellendus fugit, neque inventore aliquam, nihil quam quae impedit a, pariatur minima unde numquam qui porro nesciunt.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis saepe necessitatibus maiores possimus.
             Repellendus fugit, neque inventore aliquam, nihil quam quae impedit a, pariatur minima unde numquam qui porro nesciunt.
             </p>

             <h1>REGLAS DEL RESTAURANTE</h1>
            <p className={Styles.detalles}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis saepe necessitatibus maiores possimus.
             Repellendus fugit, neque inventore aliquam, nihil quam quae impedit a, pariatur minima unde numquam qui porro nesciunt.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis saepe necessitatibus maiores possimus.
             Repellendus fugit, neque inventore aliquam, nihil quam quae impedit a, pariatur minima unde numquam qui porro nesciunt.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis saepe necessitatibus maiores possimus.
             Repellendus fugit, neque inventore aliquam, nihil quam quae impedit a, pariatur minima unde numquam qui porro
             </p>

             <h1>CÓDIGO DE VESTIMENTA</h1>
            <p className={Styles.detalles}>
            Lorem ipsum, dolor sit amet cons
             </p>

             <p className={Styles.detalles}>
            Lorem ipsum, dolor sit amet cons
             </p>

             <p className={Styles.detalles}>
            Lorem ipsum, dolor sit amet cons
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
        </article>
        </section>
    );
};

export default RestaurantComponent;