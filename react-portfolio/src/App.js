import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Repos from "./pages/Repos";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/repos" component={Repos} />
        </Wrapper>
      </div>
      <Footer />
    </Router>
  
  );
}

export default App;

// Right click the src folder and use npm start to start the server
