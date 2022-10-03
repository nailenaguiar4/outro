const  express = require("express");
const transacaoSchema = require("../models/transacao");

const router = express.Router();

//create transacao
router.post("/transacao", (req, res) => {
    const transacao = transacaoSchema(req.body);
    transacao
    .save()
    .then((data) => res.status(201).send(transacao))
    .catch((error) => res.status(404).json({ message: error }));//res.status(400).send("Error ao crear"));
    //res.json({ message: error}));
});


// get all transacao
router.get("/transacao", (req, res) => {
   transacaoSchema
    .find()
    .populate('')
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(401).json({mensagen:error}));
});

// get a transacao
router.get("/transacao/:id", async (req, res) => {
    const { id } = req.params;
    transacaoSchema
    .findById(id)
    .populate('compra')
    .then((data) => await = res.status(200).json(data))
    .catch((error) => res.status(404).send("Error na Requisição"));
});


// update a transacao
router.put("/transacao/:id", async (req, res) => {
    const { id } = req.params;
    const {monto, pagamento, data} = req.body;
    ProdutoSchema
    .updateOne({ _id: id }, { $set: {monto, pagamento, data}})
    .then((data) => await = res.status(200).json(data))
    .catch((error) => res.json({ message: error }));//res.status(404).send("Error na rota da Requisição"));
    // .then((data) => res.json(data))
    // .catch((error) => res.json({ message: error }));
    });


// delete a transacao
router.delete("/transacao/:id", async (req, res) => {
    const { id } = req.params;
    transacaoSchema
    .remove({ _id: id })
    .then((data) => await = res.status(200).json(data))
    .catch((error) => res.json({ message: error }));
    });

module.exports = router;