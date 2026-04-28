import './App.css'
import Categorias from "./components/Categorias"
import Nayara from "./components/Nayara"
import Zenith from "./components/Zenith"
import Samuel from './components/Samuel'
import Section from "./components/Section"
import Button from "./components/Button"

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
      <Button texto="Comprar" color="#d71111" />
      <Button texto="Cancelar" color="#333" />
    </>
  )
}

export default App