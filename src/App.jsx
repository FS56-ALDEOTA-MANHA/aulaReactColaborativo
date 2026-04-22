import './App.css'
import Categorias from "./components/Categorias"
import Jacqueline from './components/Jacqueline'
import Nayara from "./components/Nayara"
import Section from "./components/Section"

const App = () => {

  return (
    <>
      {/* <Section titulo="Promoções do Dia">
        <Categorias/>
      </Section>
      <Section titulo="Categorias"/>
      <Section titulo="Mais vendidos"/>
      <Section titulo="Contato"/> */}
      <Nayara/>
      <Jacqueline/>
    </>
  )
}

export default App
