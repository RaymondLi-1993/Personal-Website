import React from "react";

const Footer = () => {
  const year = new Date();

  return (
    <div className="w-full h-10 bg-gray-900">
      <div className="container w-full h-full m-auto">
        <h1 className="text-white font-Nunito text-center pt-2">
          Designed and created By Raymond Li © {`${year.getFullYear()}`}.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
