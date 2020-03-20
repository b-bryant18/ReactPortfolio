import React from "react";
import Link from "./linkedinIcon.png";


//Cannot call your function and an imported element the same name
function Icon() {
    return (
        <img src={Link} />
    )
};

export default Icon;