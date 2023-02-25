import logo from './logo.svg';
import './App.css';
import ToDoList from './components/TodoList';
import AddToDoButton from './components/AddToDoForm';
import React, { useCallback, useState } from 'react';
import { getToDoItemsFromLocalStorage, saveTodoItemsToLocalStorage } from './Service/Service';

function App() {

  const [todoItems, setTodoItems ] = useState(getToDoItemsFromLocalStorage('item') || []);

  const handleAddToDo = useCallback(item => {
     console.log("addToDo - App2")
     
     const items = [
      {
        id: item.id,
        content: item.content,
        complete: item.complete
      },
      ...todoItems
     ]
   setTodoItems(items);
   saveTodoItemsToLocalStorage('item', items)
    }, [todoItems])
  
  return (
    <div>
      <AddToDoButton onAddToDo = {handleAddToDo} />
      <ToDoList toDoItems={todoItems} />
    </div>
  );
}

export default App;
