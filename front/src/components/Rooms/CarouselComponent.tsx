"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import RoomCard from "./RoomCard";
import { mockRooms } from "@/app/mocks/rooms";
import styles from "./CarouselComponent.module.css";

const SwiperComponent = () => {
  const swiperRef = useRef<any>(null);
  return (
    <div className={styles.swiperContainer}>
      <Swiper
      ref={swiperRef}
        modules={[Navigation]}
        slidesPerView={3}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        loop={true}
      >
        {mockRooms.map((room) => (
          <SwiperSlide key={room.id} className={styles.swiperSlide}>
            <RoomCard {...room} />
          </SwiperSlide>
        ))}

        {/* Botones personalizados */}
        {/* <button className={`${styles.swiperButtonNext}`}>→</button>
        <button className={`${styles.swiperButtonPrev}`}>←</button> */}
        <button
        className={styles.swiperButtonPrev}
        onClick={() => swiperRef.current?.swiper.slidePrev()}
      >
        &#x276E;
      </button>
      <button
        className={styles.swiperButtonNext}
        onClick={() => swiperRef.current?.swiper.slideNext()}
      >
        &#x276F;
      </button>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;










