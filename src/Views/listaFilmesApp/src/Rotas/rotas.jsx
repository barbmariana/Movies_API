import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Filmes from '../paginas/Filmes/Filmes'
import Template from '../componentes/Template/template';
import Alterando from '../paginas/AlterandoFilmes/AlterandoFilmes'




class Rotas extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Template>
                    <Routes>
                        <Route path='/' element={<Filmes/>} />
                        <Route path='/alterandoFilmes' element={<Alterando/>} />
                    </Routes>
                </Template>
            </BrowserRouter>
        )
    }
}

export default Rotas