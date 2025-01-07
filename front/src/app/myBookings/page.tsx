"use client";

import { getReservations } from "@/api/getReservations";
import { Reservation, Room } from "@/interfaces";
import { useState, useEffect } from "react";
import { useLoggin } from "@/context/logginContext";

const ReservationsPage = () => {
  const { userData } = useLoggin();
  const userId = userData?.userData.id;

  const [reservations, setReservations] = useState<(Reservation & { room: Room | null })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      console.error("No userId available in context.");
      setLoading(false);
      return;
    }

    const fetchReservations = async () => {
      try {
        const fetchedReservations = await getReservations(userId);
        setReservations(fetchedReservations);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [userId]);

  const calculateTotal = (checkInDate: string | Date, checkOutDate: string | Date, price: number) => {
    const checkIn = typeof checkInDate === "string" ? new Date(checkInDate) : checkInDate;
    const checkOut = typeof checkOutDate === "string" ? new Date(checkOutDate) : checkOutDate;
    const days = Math.max(1, (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    return days * price;
  };

  const handleButtonAction = (reservation: Reservation) => {
    const today = new Date();
    const checkInDate = new Date(reservation.checkInDate);

    if (checkInDate < today) {
      alert(`Rating your stay for reservation ${reservation.id}`);
    } else if (reservation.paymentStatus === "Reserva no pagada") {
      alert(`Paying for reservation ${reservation.id}`);
    } else {
      alert(`Cancelling reservation ${reservation.id}`);
    }
  };

  if (loading) {
    return <p>Loading reservations...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>My Reservations</h1>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {reservations.map((reservation) => {
            const total = reservation.room
              ? calculateTotal(reservation.checkInDate, reservation.checkOutDate, reservation.room.price)
              : 0;

            const today = new Date();
            const checkInDate = new Date(reservation.checkInDate);
            const buttonLabel =
              checkInDate < today
                ? "Califica tu estadía"
                : reservation.paymentStatus === "Reserva no pagada"
                ? "Pagar"
                : "Cancelar";

            return (
              <div
                key={reservation.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "15px",
                  width: "100%",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                {/* Imagen en el lado izquierdo */}
                {reservation.room?.image ? (
                  <img
                    src={reservation.room.image}
                    alt={reservation.room.title}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "8px",
                      objectFit: "cover",
                      marginRight: "15px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "8px",
                      backgroundColor: "#f0f0f0",
                      marginRight: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "12px",
                      color: "#888",
                    }}
                  >
                    No Image
                  </div>
                )}
                {/* Información en el lado derecho */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ margin: "0 0 10px" }}>{reservation.room?.title || "Room not available"}</h3>
                  <p style={{ margin: "0 0 5px" }}>
                    <strong>Check-in:</strong> {new Date(reservation.checkInDate).toLocaleDateString()}
                  </p>
                  <p style={{ margin: "0 0 5px" }}>
                    <strong>Check-out:</strong> {new Date(reservation.checkOutDate).toLocaleDateString()}
                  </p>
                  <p style={{ margin: "0 0 5px" }}>
                    <strong>Total:</strong> ${total.toFixed(2)}
                  </p>
                  <p style={{ margin: "0 0 10px" }}>
                    <strong>Status:</strong> {reservation.paymentStatus}
                  </p>
                  <button
                    onClick={() => handleButtonAction(reservation)}
                    style={{
                      backgroundColor: "#007BFF",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      padding: "8px 12px",
                      cursor: "pointer",
                      fontSize: "14px",
                      alignSelf: "flex-start",
                    }}
                  >
                    {buttonLabel}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ReservationsPage;

