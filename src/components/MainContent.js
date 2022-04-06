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

    const elem = filmes.map(filme =>{
        return <Card
            nome={filme["nome"]}
            categoria={filme["categoria"]}
            classificacao={filme["classificacao"]}
            duracao={filme["duracao"]}
        />
    })
    
    return(
        <div>
            <div className="movies-container">
                {elem}
            </div>
        </div>
    )

}