const express = require('express')

const { createTodo, getAllTodo, getSingleTodo, updateTodo, deleteTodo } = require('../controllers/todoController')
const todoRouter = express.Router();


//@ROUTE POST /todos/create
//@desc to create a new todo
//@access public
todoRouter
    .route('/create')
    .post(createTodo)


//@ROUTE GET /todos/getAll
//@desc to get all todo
//@access public
todoRouter
    .route('/getAll')
    .get(getAllTodo)


//@ROUTE GET /todos/get/:id
//@desc to get a todo
//@access public
todoRouter
    .route('/get/:id')
    .get(getSingleTodo)


//@ROUTE PUT /todos/update
//@desc to update a todo
//@access public
todoRouter
    .route('/update/:id')
    .put(updateTodo)


//@ROUTE DELETE /todos/delete
//@desc to delete a todo
//@access public
todoRouter
    .route('/delete/:id')
    .delete(deleteTodo)


module.exports = todoRouter