import { Todo } from './todo';

export enum TodoAction {
  CREATE,
  UPDATE,
  DELETE,
}

export interface TodoOperation {
  operation: TodoAction;
  operande: Todo;
}
