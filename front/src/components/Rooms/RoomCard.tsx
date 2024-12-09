import React from "react";
import styles from "./RoomCard.module.css";
import { Image } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";
import { Room } from "@/interfaces";

const RoomCard: React.FC<Room> = ({ roomType, title, size, beds, rating = 0, image, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          className={styles.image} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.info}>
        <h2>{roomType}</h2>
        <h1>{title}</h1>
        <p>{size}</p>
      </div>
      <div className={styles.separator} />
      <div className={styles.footer}>
        <div className={styles.left}>
          <p>{beds} camas</p>
        </div>
        <div className={styles.right}>
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar 
              key={i} 
              className={i < rating ? styles.star : styles.starEmpty} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

