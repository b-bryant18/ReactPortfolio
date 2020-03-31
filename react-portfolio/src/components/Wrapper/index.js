import React from "react";
import "./style.css";
// import Red from "./red.jpg";

function Wrapper(props) {
    return <div >
        <main className="wrapper" {...props} />
        </div>
}

export default Wrapper;
