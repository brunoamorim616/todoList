import { createContext, ReactNode, useMemo, useState } from 'react';

import { Todo, TodosList } from '../@types/Participants';

interface TodoContextType {
  todosList: Todo[];
  handleSetNewTodo: (newTodo: Todo) => void;
  handleRemoveTodoByID: (todoID: string) => void;
  handleCheckTodo: (todoID: string) => void;
  todosChecked: number;
}

interface TodosProviderProps {
  children?: ReactNode;
}

export const TodosContext = createContext<TodoContextType>(
  {} as TodoContextType
);

export function TodosProvider({ children }: TodosProviderProps) {
  const [todosList, setTodosList] = useState<TodosList>([]);

  function handleSetNewTodo(newTodo: Todo) {
    setTodosList(previousState => [...previousState, newTodo]);
  }

  function handleRemoveTodoByID(todoID: string) {
    setTodosList(previousState => {
      const newList = previousState.filter(todo => todo.id !== todoID);
      return newList;
    });
  }

  function handleCheckTodo(todoID: string) {
    todosList.filter((todo: Todo) => {
      if (todo.id === todoID) {
        todo.checked = !todo.checked;
        setTodosList([...todosList]);
      }
    });
  }

  const todosChecked = useMemo(() => {
    let countCheckedTodos = 0;
    for (let index = 0; index < todosList.length; index++) {
      const element = todosList[index];
      if (element.checked) countCheckedTodos++;
    }

    return countCheckedTodos;
  }, [todosList]);

  return (
    <TodosContext.Provider
      value={{
        todosList,
        handleCheckTodo,
        handleRemoveTodoByID,
        handleSetNewTodo,
        todosChecked,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
