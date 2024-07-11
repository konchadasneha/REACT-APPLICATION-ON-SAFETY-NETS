import React from "react";
import './home.scss'
import Card from "./Card";
import Sdata from "./carddata";
import { useEffect } from "react";
import AOS from 'aos';
import Carousel from "./Carousel";

function Home(){
    return(
    <>
           <div className="home_background"> 
        <Carousel/>
    
         </div>
    </>
    )
}
export default Home;