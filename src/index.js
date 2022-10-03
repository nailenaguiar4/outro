const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const produtoRouter = require('./router/produto');
const clientesRouter = require('./router/cliente');
const transacaoRouter = require('./router/transacao');

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use('/api', produtoRouter);
app.use('/api', clientesRouter);
app.use('/api', transacaoRouter);

//routes
app.get('/', (req, res) => {
    res.send("welcome to my api");
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to MONGODB atlas"))
    .catch((error) => console.error(error))



app.listen(port, () => console.log('Server listning on port', port));