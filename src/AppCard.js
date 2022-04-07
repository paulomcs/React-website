import React from "react";
import Card from "./components/Card";
import Header from "./components/HeaderMain.js"
import Footer from "./components/Footer.js"
import { useParams } from "react-router-dom";

export default function AppCard(props){
    const {type} = useParams()

    let filmes = [{
        id: "0",
        nome: "DeadPool",
        categoria: "acao",
        classificacao: "18",
        duracao: "200"
    },
    {
        id: "1",
        nome: "Ta dando onda",
        categoria: "comedia",
        classificacao: "L",
        duracao: "160"
    },
    {
        id: "2",
        nome: "Emoji o filme",
        categoria: "infantil",
        classificacao: "L",
        duracao: "210"
    },
    {
        id: "3",
        nome: "Senhor dos Aneis",
        categoria: "Acao",
        classificacao: "16",
        duracao: "500"
    },
    {
        id: "4",
        nome: "Os incriveis",
        categoria: "infantil",
        classificacao: "L",
        duracao: "120"
    },
    ]
    let filme;
    for(let i = 0; i < filmes.length; i++){
        if (filmes[i].id == type){
            filme = filmes[i]
            break
        }
    }

    return(
        <div>
            <Header/>
            <div className="movies-container-AppCard">
                <Card 
                    nome={filme.nome}
                    categoria={filme.categoria}
                    classificacao={filme.classificacao}
                    duracao={filme.duracao}
                    id={type}
                />
            </div>
            <Footer/>
        </div>
    )
}