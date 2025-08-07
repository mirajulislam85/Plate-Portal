import React from "react";
import QRCode from "react-qr-code";

const QRGenerator = () => {
  const url = "https://plate-portal-menu.netlify.app/";

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl font-bold mb-3">
        📱 Scan QR to Visit Plate Portal
      </h2>
      <div className="inline-block bg-white p-3 rounded shadow">
        <QRCode value={url} size={150} />
      </div>
    </div>
  );
};

export default QRGenerator;
