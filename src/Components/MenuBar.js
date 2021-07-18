import React from "react";
import { Link } from "react-router-dom";
import Logo_png from "../image/n2.png"
import { Navbar, Nav } from "react-bootstrap";
const MenuBar = () => {
 
  

  const linkStyles = {
    color: "white",
    fontSize: 22,
    fontFamily: "Open Sans"
  };

  return(
    <div>
      <Navbar style={{ backgroundColor: "#004953" }}>
        <Navbar.Brand style={{display:"flex", alignContent:"center", alignItems:"center"}}>         
          <img
            src={Logo_png}
            width="70"
            height="50"
            className="d-inline-block align-top"
            alt=""
          />
          <a style={linkStyles}>
            N2G Sales Tools 
          </a>
        </Navbar.Brand>
        <Nav className="mr-auto">
          
        </Nav>        
                  
      </Navbar>
    </div>
  );
 
};
export default MenuBar;
