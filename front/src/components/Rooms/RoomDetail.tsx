"use client";
import React from "react";
import { Room } from "@/interfaces";
import { FaStar, FaCalendarAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLoggin } from "@/context/logginContext";
import Image from "next/image";

const RoomDetail = ({
  id,
  roomType,
  title,
  size,
  beds,
  rating,
  image,
  price,
  description,
}: Room) => {
  const router = useRouter();
  const { userData } = useLoggin();

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex">
      <div className="w-1/2 relative">
        <Image
          src={image}
          alt={title}
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-lg"
        />
        <div className="absolute top-2 right-2 bg-tertiary text-white text-sm font-semibold py-1 px-2 rounded-lg shadow-md">
          ${price} / noche
        </div>
      </div>


      <div className="w-1/2 p-6 flex flex-col justify-between">

        <div>
          <h2 className="text-text text-sm uppercase tracking-wide">{roomType}</h2>
          <h1 className="text-gray-900 font-bold text-xl mt-1 truncate">{title}</h1>
          <p className="text-gray-700 mt-4 text-sm">{description}</p>
        </div>


        <div className="mt-4 border-t pt-4">
          <p className="text-text text-sm mb-2">{size}</p>
          <p className="text-text text-sm mb-2">{beds} camas</p>
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={`text-lg ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
        <button
          onClick={() => router.push(`/rooms/${id}`)}
          disabled={!userData?.token}
          title={!userData?.token? "Debe iniciar sesión" : ""}
          className=" bg-tertiary focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center mt-6 text-white {`${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'`}"
        >
          <FaCalendarAlt className="mr-2" />
          Reservá ahora
        </button>
        </div>
      </div>
    </div>
  );
};


export default RoomDetail;
