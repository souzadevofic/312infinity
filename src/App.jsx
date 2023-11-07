import {image1} from './imagens/dados.jpg' 
import {image2} from './imagens/netflix.jpg'
import {image3} from './imagens/clima.jpg'

function App() {

  return (
    <>
    <h1>Aula 01</h1>
      <h2>Curriculo Profissional</h2>
      Nome: Alisson Silva de Souza
      Idade: 20 anos
      Sobre: Sou um programador dev iniciante, com 4 meses de experiência, faço faculdade de Análise e Desenvolvimento de Sistemas na Estácio e curso de programação na Infinity School. Estou a procura de um estágio que me qualifique profissionalmente.
      <h3>Experiência</h3>
      <label>
        <li>Jogo de Dados</li>
        <li>Clima temporal</li>
        <li>Projeto Netflix</li>
      </label>
      <img src={image1}/>
      <img src= {image2}/>
      <img src={image3}/>
    </>
  )
}

export default App
