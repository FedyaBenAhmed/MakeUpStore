import React from "react";
import './Navbar.css'
import Title from "./Title";
import SousTitle from "./SousTitle";



const Navbar = () => {
    return (
     <nav>
        <Title/>
        <ul>
           <li> <SousTitle sousTitle={"Avtor"}/> </li>
           <li> <SousTitle sousTitle={"MyWorks"}/> </li>
           <li> <SousTitle sousTitle={"Course"}/></li>
           <li><SousTitle sousTitle={"Review"}/></li>
           <li><SousTitle sousTitle={"Rates"}/></li>

        </ul>
      </nav>
    );
};

export default Navbar;