//Importar módulos

import  React from 'react';
import ReactDom from 'react-dom';

//Componente

class MeuComponente extends React.Component{

    //Função
    mensagem(){
        alert("Hello world")
    }
    // Render
    render(){
        return <button onClick={this.mensagem}> Clique aqui</button>
    }
}
   
//Render

ReactDom.render(<MeuComponente/>, document.getElementById('root'))
