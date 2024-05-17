import React, { useState } from 'react';
import "./App.css"
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {

  const [listTodo,setListTodo] = useState([]);
  let addList = (inputText) => {
    if(inputText !== '')
    setListTodo([...listTodo,inputText]);
  }

  const deleteItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }

  return (
      <div className='main-container'>
        <div className='center-container'>
            <h1 className='app-heading'>TODO List App</h1>
            <hr /> 
            <TodoInput addList = {addList}/>
            {listTodo.map((listItem,i) => {
              return (
                <TodoList key = {i} index = {i} item = {listItem} deleteItem = {deleteItem}/>
              )
            })}
        </div>
      </div>

  )
}

export default App;
