import { useReducer } from "react";

import { v4 } from 'uuid';

type Person = {
  id: string;
  name: string;
}

type ActionType = {
  type: string;
  payload?: {
    name?: string;
    id?: string;
  }
}

const initialState: Person[] = [];

const reducer = (state: Person[], action: ActionType) => {
  switch (action.type) {
    case 'ADD':
      if (action.payload?.name) {
        const newState = [...state];
        newState.push({
          id: v4(),
          name: action.payload?.name
        });
        return newState;
      }

    case 'DEL':
      if (action.payload?.id) {
        let newState = [...state];
        newState = newState.filter((item) => item.id !== action.payload?.id);
        return newState;
      }

    case 'ORDER':
      let newState = [...state];
      newState = newState.sort((a, b) => (a.name > b.name) ? 1 : -1);
      return newState;

    default:
      break;
  }

  return state;
}

export const usePeopleList = () => {
  return useReducer(reducer, initialState);
}