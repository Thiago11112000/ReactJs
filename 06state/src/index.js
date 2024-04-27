import React from 'react';
import ReactDom from 'react-dom';

//Componente

class Componente extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {nome: 'Ralf'}
    }
    // Render
    render(){
        return <h1> {this.state.nome}</h1>
    }
}
ReactDom.render(<Componente/>, document.getElementById("root"));
