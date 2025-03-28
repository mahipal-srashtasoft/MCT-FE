import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="max-w-2xl w-full p-6">
        <div className="mb-4">
          <img
            src="https://demo.awaikenthemes.com/lenity/wp-content/themes/lenity/assets/images/404-error-img.png"
            alt="404 Error"
            className="w-full"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Page not found</h2>
        <p className="text-gray-600 mb-4">Sorry, we can't find the page you're looking for.</p>
        
        <NavLink
          className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          to={"/"}
        >
          Back To Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="ml-2"
          >
            <path
              d="M18.9225 9.40857L13.0892 3.57524C12.932 3.42344 12.7215 3.33944 12.503 3.34134C12.2845 3.34324 12.0755 3.43088 11.921 3.58539C11.7665 3.73989 11.6789 3.9489 11.677 4.1674C11.6751 4.3859 11.7591 4.5964 11.9109 4.75357L16.3217 9.1644H1.66671C1.44569 9.1644 1.23373 9.2522 1.07745 9.40848C0.921171 9.56476 0.833374 9.77672 0.833374 9.99774C0.833374 10.2187 0.921171 10.4307 1.07745 10.587C1.23373 10.7433 1.44569 10.8311 1.66671 10.8311H16.3217L11.9109 15.2419C11.8313 15.3188 11.7678 15.4107 11.7241 15.5124C11.6804 15.6141 11.6575 15.7234 11.6565 15.8341C11.6555 15.9447 11.6766 16.0545 11.7185 16.1569C11.7604 16.2593 11.8223 16.3523 11.9005 16.4306C11.9788 16.5088 12.0718 16.5707 12.1742 16.6126C12.2767 16.6545 12.3864 16.6756 12.497 16.6746C12.6077 16.6736 12.717 16.6507 12.8187 16.607C12.9204 16.5633 13.0123 16.4998 13.0892 16.4202L18.9225 10.5869C19.0788 10.4306 19.1665 10.2187 19.1665 9.99774C19.1665 9.77677 19.0788 9.56484 18.9225 9.40857Z"
              fill="white"
            ></path>
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;