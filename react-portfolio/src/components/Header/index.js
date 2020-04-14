import React from "react";
import Red from "./red.jpg";
import "./style.css";

function Header() {
    return (
        <div className="header text-center">
            <h1 style = {{backgroundImage: {Red}, color: "white"}}>Brad Bryant </h1>
            {/* <img src={Red} alt="red rocks" style={{width:"100%"}}/> */}        
        </div>
    );
}
export default Header;