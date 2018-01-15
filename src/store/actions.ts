// action constants
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// action creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any) {};
}
export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(private payload: any) {};
}
