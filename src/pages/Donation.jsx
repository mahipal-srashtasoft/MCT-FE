
    // With UPI Id =-=-=-=-=-=-=-=-=-=--=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import React, { useState } from "react";
import { Heart, CheckCircle, X } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import DonationPopup from "../components/DonationPopup";


export default function DonationPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [amount, setAmount] = useState("");
  const [showQR, setShowQR] = useState(false);
  const upiId = "9099792454@jio"; // Replace with actual UPI ID

  const presetAmounts = [10, 25, 50, 100, 250];

  // Generate UPI Payment URL
  const generateUpiUrl = () => {
    if (!amount || isNaN(amount) || amount <= 0) return "";
    return `upi://pay?pa=${upiId}&pn=મોક્ષ ચેરિટેબલ ટ્રસ્ટ &mc=&tid=&tr=&tn=Donation&am=${amount}&cu=INR`;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-orange-500 text-white py-16 text-center">
        <Heart className="w-12 h-12 mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Make a Difference Today</h1>
        <p className="text-lg mt-2">Your donation helps change lives and spread hope.</p>
      </div>

      {/* Donation Section */}
      <div className="max-w-3xl mx-auto my-12 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">Choose Your Donation Amount</h2>

        <div className="flex flex-wrap justify-center gap-4 my-6">
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                amount == amt ? "bg-orange-500 text-white" : "bg-gray-200 hover:bg-orange-300"
              }`}
              onClick={() => setAmount(amt)}
            >
              ₹{amt}
            </button>
            
          ))}
        </div>

        {/* Custom Amount Input */}
        <div className="text-center mb-6">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border border-gray-300 p-3 rounded-md text-center w-1/2"
            placeholder="Enter Custom Amount"
          />
        </div>

        {/* Donate Button */}
        <div className="text-center">
          <button
            onClick={() => amount > 0 && setShowQR(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
           Donate ₹{amount ? Number(amount).toLocaleString("en-IN") : "Now"}
          </button>
        </div>
      </div>

      {/* QR Code Popup */}
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

{/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Make a Donation</h1>
      <p className="text-gray-700 mb-6 text-center max-w-lg">
        Your donation helps us continue our work. Please choose your preferred
        payment method and contribute to our cause.
      </p>
      <button
        onClick={() => setIsPopupOpen(true)}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md"
      >
        Donate Now
      </button>
      <DonationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div> */}

      {/* Why Donate? Section */}
      <div className="bg-gray-200 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Your Donation Matters?</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8 max-w-4xl mx-auto">
          <div className="bg-white shadow-md p-6 rounded-lg w-64">
            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Provide Education</h3>
            <p className="text-gray-600 text-sm mt-2">Your support helps provide education for underprivileged children.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg w-64">
            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Feed the Hungry</h3>
            <p className="text-gray-600 text-sm mt-2">Every ₹1 can provide a meal for someone in need.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg w-64">
            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Medical Aid</h3>
            <p className="text-gray-600 text-sm mt-2">Support urgent medical treatments and healthcare initiatives.</p>
          </div>
        </div>
      </div>

      {/* Footer Call to Action */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Join Us in Making an Impact</h2>
        <p className="text-gray-600 mt-2">Every contribution brings hope and change. Donate today!</p>
        <button
          onClick={() => amount > 0 && setShowQR(true)}
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}




    // With Bank Details =-=-=-=-=-=-=-=-=-=--=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=



//     import React, { useState } from "react";
// import { Heart, CheckCircle, X } from "lucide-react";
// import { QRCodeCanvas } from "@techiediaries/qrcode-react";

// export default function DonationPage() {
//   const [amount, setAmount] = useState("");
//   const [showQR, setShowQR] = useState(false);

//   // Bank Details
//   const bankDetails = `Bank Name: XYZ Bank\nAccount Name: Moksh Charitable Trust\nAccount Number: 1234567890\nIFSC Code: XYZB0000123`;

//   const presetAmounts = [10, 25, 50, 100, 250];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section */}
//       <div className="bg-orange-500 text-white py-16 text-center">
//         <Heart className="w-12 h-12 mx-auto mb-4" />
//         <h1 className="text-4xl font-bold">Make a Difference Today</h1>
//         <p className="text-lg mt-2">Your donation helps change lives and spread hope.</p>
//       </div>

//       {/* Donation Section */}
//       <div className="max-w-3xl mx-auto my-12 bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-2xl font-bold text-center text-gray-800">Choose Your Donation Amount</h2>

//         <div className="flex flex-wrap justify-center gap-4 my-6">
//           {presetAmounts.map((amt) => (
//             <button
//               key={amt}
//               className={`px-6 py-3 rounded-full font-semibold transition ${
//                 amount == amt ? "bg-orange-500 text-white" : "bg-gray-200 hover:bg-orange-300"
//               }`}
//               onClick={() => setAmount(amt)}
//             >
//               ₹{amt}
//             </button>
//           ))}
//         </div>

//         {/* Custom Amount Input */}
//         <div className="text-center mb-6">
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="border border-gray-300 p-3 rounded-md text-center w-1/2"
//             placeholder="Enter Custom Amount"
//           />
//         </div>

//         {/* Donate Button */}
//         <div className="text-center">
//           <button
//             onClick={() => amount > 0 && setShowQR(true)}
//             className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
//           >
//             View Bank Details
//           </button>
//         </div>
//       </div>

//       {/* QR Code Popup with Bank Details */}
//       {showQR && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center relative flex flex-col justify-center items-center">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//               onClick={() => setShowQR(false)}
//             >
//               <X className="w-6 h-6" />
//             </button>
//             <h2 className="text-xl font-bold mb-4">Scan to View Bank Details</h2>
//             <QRCodeCanvas value={bankDetails} size={200} />
//             <p className="text-sm text-gray-600 mt-2">Scan this QR code to view bank details.</p>
//           </div>
//         </div>
//       )}

//       {/* Footer Call to Action */}
//       <div className="text-center py-12">
//         <h2 className="text-2xl font-bold text-gray-800">Join Us in Making an Impact</h2>
//         <p className="text-gray-600 mt-2">Every contribution brings hope and change. Donate today!</p>
//       </div>
//     </div>
//   );
// }
