import axios from 'axios';
import React, { Fragment, useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'


function EditTodo({ todos }) {
    const [edit, setEdit] = useState("");

    const changeHandle = e => {
        setEdit(e.target.value)
    }
    const editClickHandle = async e => {
        try {
            await axios.put(`http://localhost:3001/todos/update/${todos.todo_id}`, { description: edit })
            window.location.href = "/"
        } catch (error) {

        }
    }
    return (
        <Fragment>

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${todos.todo_id}`}>
                <BiEditAlt />
            </button>


            <div className="modal" id={`id${todos.todo_id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div className="modal-body">
                            <input type="text" placeholder={`${todos.description}`} className='form-control' onChange={changeHandle} />
                        </div>


                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={editClickHandle}>Edit</button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default EditTodo