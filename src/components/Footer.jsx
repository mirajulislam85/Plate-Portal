import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-300 text-center py-2 text-lg">
      <p className="text-black m-0">
        &copy; {new Date().getFullYear()} Plate Portal. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
