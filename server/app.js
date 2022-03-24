const express = require('express');
const cors = require('cors')


const app = express();

//middlewares
app.use(cors())
app.use(express.json())

app.listen(process.env.PORT || 3000, () => { console.log(`server started`) })