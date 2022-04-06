import React, { useEffect } from "react"
import { Link, useParams, useLocation } from "react-router-dom";
import pic from "../images/empty.png"
import c00 from "../images/0-anos.png"
import c10 from "../images/10-anos.png"
import c12 from "../images/12-anos.png"
import c14 from "../images/14-anos.png"
import c16 from "../images/16-anos.png"
import c18 from "../images/18-anos.png"

export default function Card(props){
    let foto;
    switch(props["classificacao"]){
        case "L":
            foto = c00;
            break;
        case "10":
            foto = c10;
            break;
        case "12":
            foto = c12;
            break;
        case "14":
            foto = c14;
            break;
        case "16":
            foto = c16;
            break;
        case "18":
            foto = c18;
            break;
        default:
            foto = pic;
            break;
    }

    let route = "/AppCard/"
    //route += props["nome"]+";"+props["categoria"]+";"+props["duracao"]+";"+props["classificacao"]

    return(
        <div className="movie">
            <img src={pic} href=""/>
            <h3>{props.nome}</h3>
            <div className="info-group">
                <p>Genero: {props.categoria}</p>
            </div>

            <div className="info-group">
                <p>Classificacao indicativa</p>
                <img src={foto} />
            </div>

            <div className="info-group">
                <p>Duracao: {props.duracao}minutos</p>
            </div>

            <div className="info-button">
                <Link to={{
                    pathname: "/AppCard/a", 
                    state: {stateParam: true} 
                }}
                ><button>Comprar</button></Link>
            </div>
            
        </div>
    )
}
//<Link to="/AppCard"
//params={{ nome: props.nome, categoria: props.categoria, duracao: props.duracao, classificacao: props.classificacao }}
//><button>Comprar</button></Link>
//to={{ path: "/step2", state: { nationality: "Icelandic" } }}