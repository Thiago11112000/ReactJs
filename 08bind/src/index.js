//Importar módulos

import  React from 'react';
import ReactDom from 'react-dom';

//Componente

class MeuComponente extends React.Component{

    //Função
    mensagem(nome){
        alert("olá " + nome)
        console.log(this);
    }
    // Render
    render(){
        return <button onClick={this.mensagem.bind(this,"Ralf")}> Clique aqui</button>
       
    }
}
   
//Render

ReactDom.render(<MeuComponente/>, document.getElementById('root'))
