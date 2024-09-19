import Equipe from "./componentes/Equipe/Equipe"
import Home from "./componentes/Home/Home"
import Nav from "./componentes/Nav/Nav"
import Vantagens from "./componentes/Vantagens/Vantagens"
import Contato from "./componentes/Contato/Contato"
import Footer from "./componentes/Footer/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/EstiloGlobal.css'

function App() {
  return (
    <>
    <div className="div-geral">
      <Nav/>
      <Home/>
      <Equipe/>
      <Vantagens/>
      <Contato/>
      <Footer/>
    </div>
    </>
  )
}

export default App
