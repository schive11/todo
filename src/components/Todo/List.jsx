import React from "react";
import { useState } from "react";
import Input from "./Input";
import Todo from "./Todo";
import './css/List.css';


const List = ({theme}) => {

    const [todo, setTodo] = useState([]);

    const addTodo = (newtodo) => {

        const newTodos = [newtodo, ...todo]

        setTodo(newTodos)
        console.log(...todo)
    }

    const update = (id, newValue) => {
    
        setTodo(prev => prev.map(item => (item.id === id ? newValue : item)));
      };

    const remove = (id) => {
        const updatedArr = [...todo].filter(todo => todo.id !== id);
        setTodo(updatedArr)
    }


    const complete = (id) => {
        let updatedTodos = todo.map(newtodo => {
            if(newtodo.id === id) {
                newtodo.isComplete = !newtodo.isComplete
            }
            return newtodo;
        })
        setTodo(updatedTodos);
    }

    return (
        <div>
            
            <div className={`todo-container-${theme}`}>
                <Input onSubmit={addTodo} theme={theme}/>
            </div>
            <div className={`todo-list-container-${theme}`}>
                <Todo todo={todo} complete={complete} remove={remove} theme={theme}/>
            </div>
        
        </div>
    )
}

export default List;