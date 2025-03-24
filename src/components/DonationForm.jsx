import { QRCodeCanvas } from 'qrcode.react';
import React, { useState } from 'react';
import { X } from 'lucide-react';

function DonationForm() {
  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("test");
  const [showQR, setShowQR] = useState(false);
  const upiId = "9099792454@jio"; // Replace with actual UPI ID

  const presetAmounts = [10, 25, 50, 100, 250];

  // Generate UPI Payment URL
  const generateUpiUrl = () => {
    if (!amount || isNaN(amount) || amount <= 0) return "";
    return `upi://pay?pa=${upiId}&pn=મોક્ષ ચેરિટેબલ ટ્રસ્ટ&mc=&tid=&tr=&tn=Donation&am=${amount}&cu=INR`;
  };

  return (
    <>
      <div className="max-w-4xl mx-auto my-12 bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold text-gray-800">Your Donation</h2>
        <p className="text-gray-600 mt-2">
          Your donation is more than just financial support; it is a powerful act of kindness that drives meaningful change.
        </p>
        
        <div className="bg-orange-100 p-3 mt-4 flex items-start text-orange-600 rounded">
            <span>⚠️ </span>
          <span className="font-bold mr-2"> Notice:</span> 
          <span>Test mode is enabled. While in test mode, no live donations are processed.</span>
        </div>

        <div className="mt-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="$100.00"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {presetAmounts.map((val) => (
              <button
                key={val}
                onClick={() => setAmount(val)}
                className={`px-4 py-2 rounded border w-full sm:w-auto text-center ${amount == val ? "bg-orange-500 text-white" : "bg-gray-200"}`}
              >
                ${val}.00
              </button>
            ))}
            <button className="px-4 py-2 border rounded bg-gray-200 w-full sm:w-auto">Custom Amount</button>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Select Payment Method</h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2 space-y-2 sm:space-y-0 sm:space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                checked={selectedMethod === "test"}
                onChange={() => setSelectedMethod("test")}
              />
              <span>Test Donation</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                checked={selectedMethod === "offline"}
                onChange={() => setSelectedMethod("offline")}
              />
              <span>Offline Donation</span>
            </label>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Personal Info</h3>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border rounded p-2 w-full" />
            <input type="text" placeholder="Last Name" className="border rounded p-2 w-full" />
          </div>
          <input type="email" placeholder="Email Address" className="border rounded p-2 w-full mt-2" />
        </div>

        {selectedMethod === "offline" && (
          <div className="mt-6 bg-gray-100 p-4 rounded">
            <h3 className="font-semibold">Offline Donation Instructions</h3>
            <p className="mt-2">To make an offline donation toward this cause, follow these steps:</p>
            <ul className="list-decimal ml-6 mt-2">
              <li>Write a check payable to "Your NGO Name"</li>
              <li>On the memo line of the check, indicate that the donation is for "Your NGO Cause"</li>
              <li>Mail your check to:</li>
            </ul>
            <p className="mt-2 font-semibold">Your NGO Name</p>
            <p>123 NGO Street, City, State, ZIP Code</p>
          </div>
        )}

        <div className="mt-6 bg-orange-500 text-white p-3 rounded flex justify-between items-center">
          <span className="font-semibold">Donation Total:</span>
          <span>${amount}.00</span>
        </div>

        <div className="text-center mt-4">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition w-full sm:w-auto"
            onClick={() => amount > 0 && setShowQR(true)}
          >
            Donate {amount ? "₹" + Number(amount).toLocaleString("en-IN") : "Now"}
          </button>
        </div>
      </div>

      {showQR && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative flex flex-col justify-center items-center">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowQR(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold mb-4">Scan to Pay ₹{amount ? Number(amount).toLocaleString("en-IN") : amount}</h2>
            <QRCodeCanvas value={generateUpiUrl()} size={200} />
            <p className="text-sm text-gray-600 mt-2">Scan this QR code using any UPI app.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default DonationForm;
