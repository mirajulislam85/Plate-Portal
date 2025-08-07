import React from "react";
import QRGenerator from "../components/QRGenerator";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center h-[70vh] p-5 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(/images/beef-burger.jpg)` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl text-blue-500 md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to Plate Portal 🍽️
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto drop-shadow-md">
            Your ultimate digital restaurant companion. Order seamlessly and
            dine with joy.
          </p>
        </div>
      </section>
      {/* QR Section */}
      <section className="max-w-4xl mx-auto p-8 text-center text-gray-800">
        <div className="mb-8 flex justify-center">
          <QRGenerator value="https://plateportal.example/order-summary" />
        </div>
        <p className="text-lg mb-12 text-black">
          Scan the QR code to view your order summary instantly or explore our
          full menu and payment options.
        </p>
      </section>
    </div>
  );
};

export default Home;
