import React from "react";
import Link from "./linkedinIcon.png";
import Pin from "./pin.png";
import TX from "./TXoutline.png";
import "./style.css";


//Cannot call your function and an imported element the same name
function Icon() {
    return (
        <div>
        <img className="circle" src={Link} />
        <img className="circle" src={Pin} />
        <img className="circle" src={TX} />
        </div>
    )
};

export default Icon;