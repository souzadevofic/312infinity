import { useState } from "react"

function App() {
  // const [nome, setNome] = useState("")
  // const [saudacao, setSaudacao] = useState("")

  // function mudar_saudacao(e){
  //   setSaudacao(e.target.textContent)
  // }
  const [numero, setNumero] = useState(0)
  return (
    <>
      {/* <input type="text" onBlur={(e)=> setNome(e.target.value) } />
      <p>Olá, {nome}, {saudacao} </p>
      <button onClick={mudar_saudacao}>Bom dia</button>
      <button onClick={mudar_saudacao}>Boa tarde</button>
      <button onClick={mudar_saudacao}>Boa noite</button> */}

      <button onClick={()=>setNumero(numero+1)}>+</button>
      <p>{numero}</p>
      <button onClick={()=>setNumero(numero-1)}>-</button>
      
    </>
  )
}

export default App
