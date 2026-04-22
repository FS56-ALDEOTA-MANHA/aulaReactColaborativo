import './App.css'
import Categorias from "./components/Categorias"
import Nayara from "./components/Nayara"
import Zenith from "./components/Zenith"
import Samuel from './components/Samuel'
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
      <Zenith/>
      <Samuel/>
    </>
  )
}

export default App
