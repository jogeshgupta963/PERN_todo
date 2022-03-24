const express = require('express');
const cors = require('cors')

// const pool = require('./database/db')
const app = express();

//middlewares
app.use(cors())
app.use(express.json())

//routes
const todoRouter = require('./routes/todoRouter');
app.use('/todos', todoRouter)

app.listen(3001, () => { console.log(`server started`) })