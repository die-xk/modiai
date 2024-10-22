import React, { useState } from 'react';
import { FaCreditCard, FaHistory, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Billing = () => {
  const [currentPlan, setCurrentPlan] = useState('Pro');
  const [paymentHistory, setPaymentHistory] = useState([
    { date: '2023-05-01', amount: 4999.99, status: 'Paid' },
    { date: '2023-04-01', amount: 4999.99, status: 'Paid' },
    { date: '2023-03-01', amount: 4999.99, status: 'Paid' },
  ]);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '**** **** **** 1234',
    expiryDate: '12/24',
    cardHolder: 'John Doe'
  });

  const handleUpdateCard = (e) => {
    e.preventDefault();
    // Here you would typically handle the card update process
    console.log('Updating card information...');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-montserrat font-bold mb-6">Billing & Invoices</h1>
      
      {/* Current Plan */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <h2 className="text-2xl font-montserrat font-semibold mb-4">Current Plan</h2>
        <p className="font-lato text-lg mb-2">You are currently on the <strong>{currentPlan}</strong> plan.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Upgrade Plan
        </button>
      </div>

      {/* Payment Method */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <h2 className="text-2xl font-montserrat font-semibold mb-4">Payment Method</h2>
        <div className="flex items-center mb-4">
          <FaCreditCard className="text-gray-500 mr-2" />
          <span className="font-lato">{cardInfo.cardNumber}</span>
        </div>
        <p className="font-lato mb-2">Expiry: {cardInfo.expiryDate}</p>
        <p className="font-lato mb-4">Card Holder: {cardInfo.cardHolder}</p>
        <button 
          onClick={handleUpdateCard}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Card
        </button>
      </div>

      {/* Payment History */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-montserrat font-semibold mb-4">Payment History</h2>
        <table className="w-full">
          <thead>
            <tr className="font-montserrat text-left">
              <th className="pb-2">Date</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody className="font-lato">
            {paymentHistory.map((payment, index) => (
              <tr key={index}>
                <td className="py-2">{payment.date}</td>
                <td className="py-2">${payment.amount.toFixed(2)}</td>
                <td className="py-2 flex items-center">
                  {payment.status === 'Paid' ? (
                    <>
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <span className="text-green-500">{payment.status}</span>
                    </>
                  ) : (
                    <>
                      <FaExclamationCircle className="text-red-500 mr-2" />
                      <span className="text-red-500">{payment.status}</span>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Billing;
