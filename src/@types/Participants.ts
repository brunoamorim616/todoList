export interface Todo {
  id: string;
  description: string;
}

export interface TodosList {
  list: Todo[];
  todosCreated: number;
  todosCompleted: number;
}
