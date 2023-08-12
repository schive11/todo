import React, { useState } from "react";
import Input from "./Input";
import './css/Todo.css';
import checkLOGO from '../../images/icon-check.svg';
import removeLOGO from '../../images/icon-cross.svg'

const Todo = ({todo, complete, remove, theme}) => {


    return todo.map((newtodo, index) => (
        <div className={newtodo.isComplete ? `todo-row complete todo-${theme}` : `todo-row todo-${theme}`} key={index}>       
          <div className='complete-button-container'>
            <button className="complete-button" onClick={() => complete(newtodo.id)} key={todo.id}>
            <img className="check-logo" src={checkLOGO}></img></button>
          </div>
          <div className={newtodo.isComplete ? `todo-text-complete text-${theme}` : `todo-text text-${theme}`} key={newtodo.id} >
            {newtodo.text}
          </div>
          <button
              onClick={() => remove(newtodo.id)}
              className='delete-icon'>
                <img src={removeLOGO} className={`remove-logo logo-${theme}`}></img>
          </button>
        </div>
      ));
}

export default Todo;