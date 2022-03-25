import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'


import { MdDelete } from 'react-icons/md'
import EditTodo from './EditTodo';
function ListTodo() {


    const [todo, setTodo] = useState([]);

    const deleteHandle = async (id) => {

        const deleteTodo = await axios.delete(`http://localhost:3001/todos/delete/${id}`)
        window.location.href = "/"
    }

    useEffect(async () => {
        let todos = await axios.get('http://localhost:3001/todos/getAll')
        setTodo([...todo, todos.data])

    }, [])

    return (
        <Fragment>
            <h1 className='text-center'>List Todos</h1>

            {/* <table className="table mt-5 table-idk"> */}
            <table className="table mt-5">
                <thead className='text-center '>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody className='text-center mt-5'>
                    {/* <tbody > */}
                    {todo.length > 0 && todo[0].map(todos =>
                        <tr key={todos.todo_id}>
                            <td>
                                {todos.description}
                            </td>
                            <td> <EditTodo todos={todos} /></td>
                            <td><button onClick={() => deleteHandle(todos.todo_id)}><MdDelete /></button></td>
                        </tr>
                    )}

                </tbody>
            </table>


        </Fragment >
    )
}

export default ListTodo