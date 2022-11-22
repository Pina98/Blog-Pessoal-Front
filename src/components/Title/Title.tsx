import React from "react";
import './Title.css';

interface ITitle{
    nome: string
}

function Title (props: ITitle){
    return(
        <>
        <h1> Hello {props.nome}! </h1>
        <p> Teste de texto de parágrafo. </p>
        </>
    );
}

export {Title};
