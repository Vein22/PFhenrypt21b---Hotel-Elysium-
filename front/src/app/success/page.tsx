'use client';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useLoggin } from '@/context/logginContext';

const SuccessPage: FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [reservationId, setReservationId] = useState<string | null>(null);
  const { userData } = useLoggin();
  const token = userData?.token;

  useEffect(() => {
    const storedReservation = localStorage.getItem('reservation');
    if (storedReservation) {
      const parsedReservation = JSON.parse(storedReservation);
      setReservationId(parsedReservation.id);
    } else {
      setError('No se pudo encontrar el ID de la reserva en el almacenamiento local.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log(reservationId);

    const updatePaymentStatus = async () => {
      if (!reservationId) {
        setError('No se pudo encontrar el ID de la reserva.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/payments/success?reservationId=${reservationId}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Hubo un error al actualizar el estado del pago.');
        }

        const data = await response.json();
        console.log('Respuesta del servidor:', data);

        setPaymentSuccess(true);

        localStorage.removeItem('reservation');
      } catch (err) {
        setError('Hubo un error al procesar tu pago. Intenta nuevamente.');
        console.error(err);

        localStorage.removeItem('reservation');
      } finally {
        setLoading(false);
      }
    };

    if (reservationId && token) {
      updatePaymentStatus();
    }
  }, [reservationId, token]);

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-6xl font-extrabold mb-12 text-center bg-gradient-to-r text-titulo bg-clip-text">
        Pago Exitoso
      </h2>
      <h1 className="text-4xl text-center mb-8">¡Gracias por tu compra!</h1>
      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          {paymentSuccess ? (
            <p className="text-center mb-8">
              Tu transacción se ha completado con éxito. Pronto recibirás un correo electrónico con los detalles de tu compra.
            </p>
          ) : (
            <p className="text-center text-red-500">
              Hubo un problema con el pago. Por favor, intenta nuevamente.
            </p>
          )}
        </>
      )}
      <div className="text-center">
        <Link href="/myBookings" legacyBehavior>
          <a className="bg-mostaza border-mostaza uppercase text-white py-2 px-4 hover:bg-opacity-70 transition-all">
            Volver al Inicio
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
