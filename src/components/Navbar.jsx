import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-8 py-4 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold">Plate Portal 🍽️</h1>
        <div className="flex gap-6"></div>
      </div>
    </nav>
  );
};

export default Navbar;
