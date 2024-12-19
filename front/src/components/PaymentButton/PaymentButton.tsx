'use client'

import React, { useState } from 'react';
import axios from 'axios';

interface PaymentButtonProps {
  amount: number;
  currency: string;
  description: string;
}


//hecho sin IA pa´que seguro cambien

export const PaymentButton: React.FC<PaymentButtonProps> = ({ amount, currency, description }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/payments/checkout`, {
        amount,
        currency,
        description,
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error('Error al iniciar el pago:', error);
      alert('Hubo un error al iniciar el pago');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-mostaza border-mostaza uppercase text-white py-2 px-4 hover:bg-opacity-70 transition-all"
      disabled={loading}
    >
      {loading ? 'Procesando...' : 'Pagar'}
    </button>
  );
};
