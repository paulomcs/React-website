import React from "react";
import Card from "./components/Card";
import Header from "./components/HeaderMain.js"
import Footer from "./components/Footer.js"
import { Link, useParams, useLocation } from "react-router-dom";

export default function AppCard(props){ 

    const {type} = useParams()
    console.log(type)
    return(
        <div>
            <Header/>
            <div className="movies-container-AppCard">
            <Card 
                nome={1}
                categoria={1}
                classificacao={1}
                duracao={1}
            />
            </div>
            <Footer/>
        </div>
        
    )
}
