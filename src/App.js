import { useRef, useState } from 'react';
import './App.css';


let numero = Math.trunc(Math.random() * 100)

function App() {


  const [tentativas, setTentativas] = useState(0)
  const [mensagem,setMensagem] = useState('')
  const [acertou, setAcertou] = useState(false)

  const palpiteInput  = useRef()


  function testarPalpite(evento) {

    const palpite = Number(palpiteInput.current.value)

    if (palpite < numero){
      setMensagem('Seu palpite é muito pequeno')
    }
    else if(palpite > numero){
      setMensagem('Seu palpite é muito grande')

    }
    else {
      setMensagem('voce acertou')
      setAcertou(true)

    }

    setTentativas(tentativas + 1)


  }

  function reiniciar(evento){
    setMensagem('')
    setAcertou(false)
    setTentativas(0)
    palpiteInput.current.value=''
    palpiteInput.current.focus()
    numero = Math.trunc(Math.random() * 100)
  


  }

  return (

   


    <div className="App">
      <p className="titulo">adivinhe qual o numero</p>

      <div>
        <input ref={palpiteInput} className="entrada" type="text"/>
        <button className="clique" onClick={testarPalpite}>Enviar</button>
      </div>

        <p className="titulo">{mensagem}</p>
        { (acertou === true) ? 
         <button className="reinicio" onClick={reiniciar}>Clique aqui para reiniciar</button> : null} 

        <p>Número de tentativa: {tentativas} </p>
          
    
    </div>

  );
}

export default App;
