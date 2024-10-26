import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <img
          src="https://via.placeholder.com/150/00FF00/FFFFFF?text=Success"
          alt="Payment Success"
          className="mx-auto mb-4 w-24 h-24 rounded-full"
        />
        <h1 className="text-2xl font-semibold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">Your payment has been successfully processed.</p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => window.location.href = '/'}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
