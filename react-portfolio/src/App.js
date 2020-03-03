import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from "react-router-dom";
// Make routes
import './App.css';
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header>
          <Project>
            <Footer>
            </Footer>
          </Project>
        </Header>
      </div>
    </Router>
  );
}

export default App;
