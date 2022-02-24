import { useReducer } from 'react';
import Button from './components/Button';

type reducerState = {
  count: number
}

type reducerAction = {
  type: string
}

const initialState = {
  count: 0
};

const reducer = (state: reducerState, action: reducerAction) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, count: state.count + 1 }

    case 'DEL':
      if (state.count > 0) {
        return { ...state, count: state.count - 1 }
      }

    case 'RESET':
      return initialState;

    default:
      break;
  }

  return state;
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <Button
        onClick={() => dispatch({ type: 'ADD' })}
      >Adicionar</Button>

      <Button
        onClick={() => dispatch({ type: 'DEL' })}
      >Remover</Button>

      <Button
        onClick={() => dispatch({ type: 'RESET' })}
      >Resetar</Button>

      <div>
        Valor: {state.count}
      </div>
    </div>
  )
}

export default App
