import './App.css';
import MenuBar from "./Components/MenuBar";
import Content from "./Components/Content";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App() {
  return (
      <Router>
        <MenuBar/>
        <Content/>        
      </Router>
     

  );
}

export default App;
