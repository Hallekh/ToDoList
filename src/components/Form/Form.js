import { useState } from 'react';
import './Form.css';


const Form = (props) => {
    const [value, setValue] = useState("");
    return (
        <form className='form' onSubmit={e => {
            e.preventDefault();
            props.putTodo(value);
            setValue("");
        }}>
            <input type="text" placeholder="insert the text here..." className='input' value={value} onChange={e => setValue(e.target.value)} required />
        </form>
    );

};

export default Form;
