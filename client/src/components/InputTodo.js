import React, { Fragment, useState } from 'react'
import axios from 'axios'
import '../App'
function InputTodo() {

    const [description, setDescription] = useState("");

    const changeHandle = e => {

        setDescription(e.target.value);
    }
    const clickHandle = async (e) => {
        e.preventDefault();
        setDescription(e.target.value);
        await axios.post('http://localhost:3001/todos/create', { description })
        // setDescription("");
        window.location.href = '/'
    }

    return (
        <Fragment>
            <h1 className='text-center mt-5 md-5'>Todo List</h1>
            <form className='todo-container d-flex'>
                <input type="text" placeholder="todos..." className='form-control
                ' onChange={changeHandle} />
                <button className=' btn btn-success' onClick={clickHandle} >Add..</button>
            </form>
        </Fragment>
    )
}

export default InputTodo