const Api = () => {
    const url = 'http://localhost:3000'
  
    return {
        getContents () {
            return fetch(`${url}/filmes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        deleteContent (id_filme) {
          return fetch(`${url}/filmes/${id_filme}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
         })
        },
        createContent (nome_filme, diretor, genero, data_acesso, data_lancamento, local_disponivel ) {
          return fetch(`${url}/filmes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                nome_filme:nome_filme, 
                diretor:diretor, 
                genero: genero, 
                data_acesso:data_acesso, 
                data_lancamento : data_lancamento, 
                local_disponivel: local_disponivel
                
              }
            )
         })
        },
        updateContent(id_filme, nome_filme, diretor, genero, data_acesso, data_lancamento, local_disponivel) {
          return fetch(`${url}/filmes/${id_filme}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                nome_filme:nome_filme, 
                diretor:diretor, 
                genero: genero, 
                data_acesso:data_acesso, 
                data_lancamento : data_lancamento, 
                local_disponivel: local_disponivel
              }
            )
         })
        },
    }
  }
  
  export default Api