const pool = require("../database/db.js");


async function createTodo(req, res) {
    try {
        let { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);
        res.status(200).json(newTodo);
    } catch (err) {
        res.status(400).json(err.message);
    }
}
async function getAllTodo(req, res) {
    try {
        const allTodos = await pool.query("SELECT * FROM todo;");
        res.status(200).json(allTodos.rows)
    } catch (err) {
        console.log(err.message);
    }
}

async function getSingleTodo(req, res) {
    try {
        const id = req.params.id;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [id]);
        res.status(200).json(todo.rows[0]);

    } catch (err) {
        res.status(400).json(err.message);
    }
}
async function updateTodo(req, res) {
    try {
        const id = req.params.id;
        const { description } = req.body;
        const todo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        res.status(200).json(todo);

    } catch (err) {
        res.status(400).json(err.message);
    }
}

async function deleteTodo(req, res) {
    try {
        const id = req.params.id;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id=$1", [id]);
        res.status(200).json("todo Deleted")
    } catch (err) {
        res.status(400).json(err.message)
    }
}
module.exports = { createTodo, getAllTodo, getSingleTodo, updateTodo, deleteTodo }