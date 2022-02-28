import { useContagem } from './reducers/contagem';

import Button from './components/Button';

function App() {

  const [contagem, contagemDispatch] = useContagem();

  return (
    <div>
      <Button
        onClick={() => contagemDispatch({ type: 'ADD' })}
      >Adicionar</Button>

      <Button
        onClick={() => contagemDispatch({ type: 'DEL' })}
      >Remover</Button>

      <Button
        onClick={() => contagemDispatch({ type: 'RESET' })}
      >Resetar</Button>

      <div>
        Valor: {contagem.count}
      </div>
    </div>
  )
}

export default App
