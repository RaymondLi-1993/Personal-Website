import React from "react"

const Footer = () => {
    const date = new Date();

    return <div className="bg-dracula-currentLine h-24 flex items-center justify-center">
      <h1 className=" text-lg font-openSans text-white text-semibold">{`Created by Raymond Li all rights reserved © ${date.getFullYear()}`}</h1>  
    </div>
}


export default Footer;

