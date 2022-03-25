import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
function ListTodo() {

    const [todo, setTodo] = useState([]);
    useEffect(async () => {
        let todos = await axios.get('http://localhost:3001/todos/getAll')
        // console.log(todos.data)
        setTodo([todos.data])
        // console.log(todo);
    }, [])
    console.log(todo[0])
    return (
        <Fragment>
            <h1 className='text-center'>List Todos</h1>
            <div className="todo-table">
                <div className="flex">
                    <div className="desc">Description</div>
                    <div className="edit">Edit</div>
                    <div className="delete">Delete</div>
                </div>
            </div>
            {todo[0].map(todos =>
                <div className="todo-table">
                    <div className="flex">
                        < div className="desc" > {todos.description}</div>
                        <div className="edit">Edit</div>
                        <div className="delete">Delete</div>
                    </div>
                </div>
            )}

        </Fragment >
    )
}

export default ListTodo