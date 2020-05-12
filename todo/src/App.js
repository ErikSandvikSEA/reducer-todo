import React, { useState, useReducer } from 'react';
import ToDoList from './components/ToDoList'
import AddListItemForm from './components/AddListItemForm'
import {reducer} from './reducers/reducers'
import {initialState} from './reducers/reducers'



const  App = () => {

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoList />
    </div>
  );
}

export default App;
