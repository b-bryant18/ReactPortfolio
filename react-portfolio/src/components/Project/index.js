import React from "react";
import Food from "./food&brew.png";
import Note from "./Note-taker.png";
// import Quiz 
import Fitness from "./Fitness2.png";
import Planner from "./dayPlanner.png";
// import Prehab 


import "./style.css";

function Project () {
    return (
        // Have rows and columns to display projects
        <div>
             <a href ="https://danfenichel.github.io/Project1/"> <h3>Food and Brew Finder</h3> <img className = "project" src={Food} /></a>
             <a href ="https://brad-note-taker86.herokuapp.com/"> <h3>Express Note Taker</h3> <img className = "project" src={Note} /></a>
             {/* Quiz image */}
             <a href ="https://b-bryant18.github.io/Homework-4-Code-Quiz/"> <h3>The Mandalorian Quiz</h3> </a>
             <a href ="https://glacial-journey-02223.herokuapp.com/"> <h3>Fitness Tracker</h3> <img className = "project" src={Fitness} /></a>
             <a href ="https://b-bryant18.github.io/Homework-5/"> <h3>Day Planner</h3> <img className = "project" src={Planner} /></a>
             {/* Prehab image */}
             <a href ="https://prehab4all.herokuapp.com/"> <h3>Prehab</h3></a>
        </div>

    )
}

export default Project;