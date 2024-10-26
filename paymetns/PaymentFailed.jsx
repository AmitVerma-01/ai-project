import React from 'react';

const PaymentFailed = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <img
          src="https://via.placeholder.com/150/FF0000/FFFFFF?text=Failed"
          alt="Payment Failed"
          className="mx-auto mb-4 w-24 h-24 rounded-full"
        />
        <h1 className="text-2xl font-semibold text-red-600 mb-4">Payment Failed!</h1>
        <p className="text-gray-600 mb-6">Unfortunately, your payment could not be processed.</p>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => window.location.href = '/retry-payment'}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default PaymentFailed;
