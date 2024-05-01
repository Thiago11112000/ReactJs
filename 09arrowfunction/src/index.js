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

    minhaArrowFunction = (curso) =>{
        alert("Estou fazendo o curso de " + curso )
        console.log(this)
    }
    // Render
    render(){
        return(
            <div>
         <button onClick={this.mensagem.bind(this,"Ralf")}> Clique aqui</button>
         <button onClick={() => this.minhaArrowFunction('ReactJS')}>Arrow Function</button>
            </div>
        )
    }
}
   
//Render

ReactDom.render(<MeuComponente/>, document.getElementById('root'))
