import { useReducer } from "react";

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

export const useContagem = () => {
  return useReducer(reducer, initialState);
}