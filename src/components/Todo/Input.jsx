import React from "react";
import { useState } from "react";
import './css/Input.css';

const Input = (props) => {

    const [input, setInput] = useState('');

    const handleChange = (e) => { 
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    }

    return (
        <form className={`input-form`} onSubmit={handleSubmit}>
            <button className="input-button"></button>
            <input type="text" placeholder="Create a new todo..." value={input} className="input-field" onChange={handleChange}/>
        </form>
    )
}

export default Input;