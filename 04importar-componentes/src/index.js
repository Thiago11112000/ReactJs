// Importar módulos

import React from 'react';
import ReactDom from 'react-dom';

// Importar componentes

import Componente01 from './Componente01'
import Componente02 from './Componente02'

// Componente de arquivo index.js
class  Principal extends React.Component{
    render(){
        return (
          <div>
            <Componente01/>
            <Componente02/>
          </div>
        );
    }
}

// Render

ReactDom.render(<Principal/> , document.getElementById('root'));