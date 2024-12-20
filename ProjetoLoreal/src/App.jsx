import { useState } from 'react'
import './App.css'

function App() {

  const [GenioVisivel, setGenioVisivel] = useState(false);

  function modificarImagem() {
    setGenioVisivel(!GenioVisivel);
  }

  return (
    <>
      <div className="container">
        <h1>"Liberte a magia da programação com a lâmpada de Aladim."</h1>
        {GenioVisivel ? (
          <img src="/lampadaCG.svg" />
        ) : (
          <img src="/lampadaSG.svg" />
        )}
        <button onClick={modificarImagem}>Clique aqui</button>
      </div>
    </>
  )
}

export default App
