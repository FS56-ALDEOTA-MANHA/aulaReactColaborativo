import './App.css'
import Categorias from "./components/Categorias"
import Section from "./components/Section"

const App = () => {

  return (
    <>
      <Section titulo="Promoções do Dia">
        <Categorias/>
      </Section>
      <Section titulo="Categorias"/>
      <Section titulo="Mais vendidos"/>
      <Section titulo="Contato"/>
    </>
  )
}

export default App
