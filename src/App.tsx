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

  const handleOrder = () => {
    peopleListDispatch({
      type: 'ORDER'
    })
  }

  const handleRemove = (id: string) => {
    peopleListDispatch({
      type: 'DEL',
      payload: {
        id: id
      }
    })
  }

  return (
    <>

      <div>
        <input type="text" value={nameInput} onChange={handleInputChange} />
        <Button onClick={handleAdd}>Adicionar</Button>

        <hr />

        Lista de Pessoas
        <br />
        <Button onClick={handleOrder}>Ordenar</Button>

        <ul>
          {peopleList.map((item) => (
            <li key={item.id}>
              {item.name}
              <Button onClick={() => handleRemove(item.id)}>deletar</Button>
            </li>
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
