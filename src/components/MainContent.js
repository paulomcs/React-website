import React from "react"
import Card from "./Card.js"

export default function MainContent(){
    
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
    return(
        <div>
            <div className="movies-container">
                <Card
                    nome={filmes[0]["nome"]}
                    categoria={filmes[0]["categoria"]}
                    classificacao={filmes[0]["classificacao"]}
                    duracao={filmes[0]["duracao"]}
                />
                <Card
                    nome={filmes[1]["nome"]}
                    categoria={filmes[1]["categoria"]}
                    classificacao={filmes[1]["classificacao"]}
                    duracao={filmes[1]["duracao"]}
                />
                <Card
                    nome={filmes[2]["nome"]}
                    categoria={filmes[2]["categoria"]}
                    classificacao={filmes[2]["classificacao"]}
                    duracao={filmes[2]["duracao"]}
                />
                <Card
                    nome={filmes[3]["nome"]}
                    categoria={filmes[3]["categoria"]}
                    classificacao={filmes[3]["classificacao"]}
                    duracao={filmes[3]["duracao"]}
                />
                <Card
                    nome={filmes[4]["nome"]}
                    categoria={filmes[4]["categoria"]}
                    classificacao={filmes[4]["classificacao"]}
                    duracao={filmes[4]["duracao"]}
                />
            </div>
        </div>
    )

}