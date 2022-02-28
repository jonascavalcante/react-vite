import { ChangeEvent, useState } from 'react';

import { useContagem } from './reducers/contagem';
import { usePeopleList } from './reducers/peopleList';

import Button from './components/Button';

function App() {

  // const [contagem, contagemDispatch] = useContagem();
  const [peopleList, peopleListDispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  }

  const handleAdd = () => {
    if (nameInput) {
      peopleListDispatch({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      });
      setNameInput('');
    }
  }

  return (
    <>

      <div>
        <input type="text" value={nameInput} onChange={handleInputChange} />
        <Button onClick={handleAdd}>Adicionar</Button>

        <hr />

        Lista de Pessoas
        <ul>
          {peopleList.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>

      {/* <div>
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
      </div> */}
    </>
  )
}

export default App
