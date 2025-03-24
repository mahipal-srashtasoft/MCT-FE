import React, { useState } from "react";
    import { X, CheckCircle } from "lucide-react";
    import { QRCodeCanvas } from "qrcode.react";
    
    export default function DonationPopup({ isOpen, onClose }) {
      const [amount, setAmount] = useState(100);
      const [paymentMethod, setPaymentMethod] = useState("test");
      const [showQR, setShowQR] = useState(false);
      const upiId = "9099792454@jio";
    
      const generateUpiUrl = () => {
        return `upi://pay?pa=${upiId}&pn=મોક્ષ ચેરિટેબલ ટ્રસ્ટ&am=${amount}&cu=INR`;
      };
    
      if (!isOpen) return null;
    
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">sddssdds
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold text-center mb-4">Select Payment Method</h2>
            <div className="flex gap-4 justify-center mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="test"
                  checked={paymentMethod === "test"}
                  onChange={() => setPaymentMethod("test")}
                />
                Test Donation
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="offline"
                  checked={paymentMethod === "offline"}
                  onChange={() => setPaymentMethod("offline")}
                />
                Offline Donation
              </label>
            </div>
    
            <h3 className="text-lg font-bold">Personal Info</h3>
            <input className="border p-2 w-full mt-2" placeholder="First Name" />
            <input className="border p-2 w-full mt-2" placeholder="Last Name" />
            <input className="border p-2 w-full mt-2" placeholder="Email Address" />
            
            {paymentMethod === "offline" && (
              <div className="mt-4 p-3 bg-gray-100 text-sm">
                <p>To make an offline donation, follow these steps:</p>
                <p>1. Write a check payable to "Lenity"</p>
                <p>2. Mail your check to:</p>
                <p><i>Lenity, 111 Not A Real St, Anytown, CA 12345</i></p>
              </div>
            )}
            
            <div className="flex justify-between bg-orange-500 text-white p-3 rounded-md mt-4">
              <span>Donation Total:</span>
              <span>₹{amount}</span>
            </div>
            
            <button
              onClick={() => setShowQR(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md w-full mt-4"
            >
              Donate Now
            </button>
          </div>
    
          {showQR && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => setShowQR(false)}>
                  <X className="w-6 h-6" />
                </button>
                <h2 className="text-xl font-bold mb-4">Scan to Pay ₹{amount}</h2>
                <QRCodeCanvas value={generateUpiUrl()} size={200} />
                <p className="text-sm text-gray-600 mt-2">Scan this QR code using any UPI app.</p>
              </div>
            </div>
          )}
        </div>
      );
    }