"use client";
import React, { useState, useEffect } from "react";
import RoomCard from "@/components/Rooms/RoomCard";
import { getRooms } from "@/api/getRooms";
import { Room } from "@/interfaces/index";
import { useRouter } from 'next/navigation';

const Page = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [sortedRooms, setSortedRooms] = useState<Room[]>([]);
  const [sortCriteria, setSortCriteria] = useState<string>("default");
  const router = useRouter();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const fetchedRooms = await getRooms();
        console.log("Fetched rooms:", fetchedRooms);
        setRooms(fetchedRooms);
        setSortedRooms(fetchedRooms);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  const handleSort = (criteria: string) => {
    let sorted: Room[] = [...rooms];

    if (criteria === "price") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (criteria === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (criteria === "default") {
      sorted = [...rooms];
    }

    setSortCriteria(criteria);
    setSortedRooms(sorted);
  };

  const handleRegisterRoom = () => {
    router.push("/roomsManagement");
  };

  return (
    <div className="min-h-[75vh] pt-20 px-16">
      <div className="flex flex-col gap-6 mb-6">
        <div className="text-center pt-10">
          <h1 className="text-2xl font-bold">Habitaciones y Suites del Hotel Elysium</h1>
          <h2 className="text-sm text-gray-600 pt-5">
            Descubra nuestras elegantes opciones de alojamiento diseñadas para
            ofrecerle una experiencia única de confort y lujo
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-between ">
          <button
            className="bg-tertiary text-white py-2 px-6 rounded-lg hover:bg-primary-dark shadow-md"
            onClick={handleRegisterRoom}
          >
            Registrar nueva habitación
          </button>
          <select
            className="bg-tertiary text-white border border-tertiary rounded-lg py-2 px-3 hover:bg-opacity-90 shadow-md"
            value={sortCriteria}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="price">Sort by Price</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 pl-10">
        {sortedRooms.length > 0 ? (
          sortedRooms.map((room, i) => <RoomCard key={i} {...room} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No rooms available</p>
        )}
      </div>
    </div>
  );
};

export default Page;
