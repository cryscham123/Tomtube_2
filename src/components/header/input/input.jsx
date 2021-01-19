import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";
import "./input.scss";

const Input = () => {
    const formRef = useRef();
    const inputRef = useRef();
    const history = useHistory();
    const handleInput = event => {
        event.preventDefault();
        const q = inputRef.current.value;
        q && history.push(`/search/${q}`)
        window.scroll({top:0,behavior:'smooth'})
        formRef.current.reset();
    }
    return (
        <form className="input" ref={formRef} onSubmit={handleInput}>
            <input
                className="input__input"
                placeholder="Youtube Search for..."
                ref={inputRef}
            ></input>
            <button className="input__submit" type="submit">
                <i className="fas fa-search"></i>
            </button>
        </form>
    );
};

export default Input;