import Rotas from './Rotas/rotas.jsx'
import Api from './api/api.js'

const [filmes, setFilmes] = useState()

  useEffect(() => {
    async function getData() {
      await Api().getFilmes().then(data => {
        return data.json()
      })
      .then(data => {
        setFilmes(data)
      })
    }

    getData()
  }, [])
function App() {
  return (
      <Rotas />
  )
}

export default App
