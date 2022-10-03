const  express = require("express");
const ProdutoSchema = require("../models/produto");
const router = express.Router();

//create Produto
router.post("/produto", (req, res) => {
    const produto = ProdutoSchema(req.body);
    produto
    .save()
    .then((data) => res.status(201).send(produto))
    .catch((error) => res.status(404).json({ message: error }));//res.status(400).send("Error ao crear"));
    //res.json({ message: error}));
});


// get all Produto
router.get("/produto", (req, res) => {
   ProdutoSchema
    .find()
    .populate('compra')
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).send("Error na Requisição"));
});

// get a Produto
router.get("/Produto/:id", async (req, res) => {
    const { id } = req.params;
    ProdutoSchema
    .findById(id)
    .populate('compra')
    .then((data) => await = res.status(200).json(data))
    .catch((error) => res.status(404).send("Error na Requisição"));
});


// update a Produto
router.put("/Produto/:id", async (req, res) => {
    const { id } = req.params;
    const { name, descricao, stock, preco} = req.body;
    ProdutoSchema
    .updateOne({ _id: id }, { $set: {name, descricao, stock, preco}})
    .then((data) => await = res.status(200).json(data))
    .catch((error) => res.json({ message: error }));//res.status(404).send("Error na rota da Requisição"));
    // .then((data) => res.json(data))
    // .catch((error) => res.json({ message: error }));
    });


// delete a Produto
router.delete("/Produto/:id", async (req, res) => {
    const { id } = req.params;
    ProdutoSchema
    .remove({ _id: id })
    .then((data) => await = res.status(200).json(data))
    .catch((error) => res.json({ message: error }));
    });

module.exports = router;