import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const Filmes = () => {
    const navigate = useNavigate();
    const [filmes, setFilmes] = React.useState([]);
  
    React.useEffect(() => {
      axios.get('http://localhost:3000/filmes').then((resposta) => {
        console.log(resposta.data);
        setFilmes(resposta.data);
      })
    }, [])
  
    return (
      <div class="container text-center">
        <div className='row'>
            <h1>Minha Lista de Filmes</h1>
        </div>
        <div className="container row">
          <table className="table table-striped table-hover table-bordered border-dark">
            <thead>
            <tr>
                <th scope="col">NOME DO FILME</th>
                <th scope="col">DIRETOR</th>
                <th scope="col">DATA ACESSO</th>
                <th scope="col">DATA LANÇAMENTO</th>
                <th scope="col">LOCAL DISPONÍVEL</th>
            </tr>
            </thead>
            <tbody>
              {
                filmes.length > 0 ? (
                  filmes.map((filme) => {
                    return (
                      <tr key={filme.id_filme}>
                        <td>{filme.nome_filme}</td>
                        <td>{filme.diretor}</td>
                        <td>{filme.data_acesso}</td>
                        <td>{filme.data_lancamento}</td>
                        <td>{filme.local_disponivel}</td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td colSpan="6">Espere o Carregamento de Filmes</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  export default Filmes;
