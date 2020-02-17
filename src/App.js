import React, { useReducer, useState } from 'react';
import TodoForm from './components/todo-form';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

export default App;
