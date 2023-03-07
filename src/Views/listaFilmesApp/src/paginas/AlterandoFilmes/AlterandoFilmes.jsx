import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";


const AlterandoFilmes = () => {
  const navigate = useNavigate();
  const [filmes, setFilmes] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/filmes').then((resposta) => {
      console.log(resposta.data);
      setFilmes(resposta.data);
    })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/filmes/${id}`).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="container text-center mt-5">
        <div className='row'>
            <h1>Minha Lista de Filmes</h1>
        </div>
      <div className="container">
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
                        <td>
                        <a className="btn btn-primary m-1" href={`/`}>Editar Filmes</a>
                        <a type="button" href="/" className="btn btn-danger m-1" onClick={() => handleDelete(filmes.id_filme)}>Excluir Filmes</a>
                      </td>
                      </tr>
                    )
                  })
              ) : (
                <tr>
                  <td colSpan="5">Espere o Carregamento de Filmes</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <div className="row">
          <div className="col">
            <a className="btn btn-success" href="/">Cadastrar novo filme</a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default AlterandoFilmes;
