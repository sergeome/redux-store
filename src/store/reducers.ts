import * as fromActions from './actions'

export const initialState = {
  loaded: false,
  loading: false,
  data: [{label: 'Eat pizza', complete: false}]
};

export function todoReducer(state = initialState, action: { type: string, payload: any }) {
  switch (action.type) {
    case fromActions.ADD_TODO:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case fromActions.REMOVE_TODO:
      return {
        ...state,
        data: state.data.filter(todo => todo.label !== action.payload.label )
      };
    default:
      return state;
  }
}
