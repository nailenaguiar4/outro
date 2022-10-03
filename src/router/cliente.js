const  express = require("express");
const ClientesSchema = require('../models/cliente');

const router = express.Router();

//create Clientes
router.post("/Clientes", (req, res) => {
    const clientes = ClientesSchema(req.body);
    clientes
    .save()
    .then((data) => res.status(201).send(clientes))
    .catch((error) => res.status(404).json({ message: error }));//res.status(400).send("Error ao crear"));
    //res.json({ message: error}));
});
// router.post
// ("/new", async (req, res) => {
//   if (req.body.description && req.body.done) {
//     const task = await Task.create({
//       description: req.body.description,
//       done: req.body.done,
//     });
//     res.status(201).send(task);
//   } else {
//     res.status(400).send("Error na Requisição");
//   }
// }); 


// get all Clientes
router.get("/Clientes", (req, res) => {
    ClientesSchema
    .find()
    .populate('compra')
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).send("Error na Requisição"));
});

// get a Clientes
router.get("/Clientes/:id", async (req, res) => {
    const { id } = req.params;
    ClientesSchema
    .findById(id)
    .populate('compra')
    .then((data) => await = res.status(200).json(data))
    .catch((error) => res.status(404).send("Error na Requisição"));
});

// router.get("/:id", async (req, res) => {
//     const task = await Task.findByPk(
//   req.params.id
//   );
//     if (task) {
//       res.send({ task });
//     } else {
//       res.status(404).send("Error de Requisição");
//     }
//   }); 

// update a clientes
router.put("/Clientes/:id", async (req, res) => {
    const { id } = req.params;
    const { name, cpf, email } = req.body;
    ClientesSchema
    .updateOne({ _id: id }, { $set: {name, cpf, email}})
    .then((data) => await = res.status(200).json(data))
    .catch((error) => res.json({ message: error }));//res.status(404).send("Error na rota da Requisição"));
    // .then((data) => res.json(data))
    // .catch((error) => res.json({ message: error }));
    });

//
    // router.put("/:id", async (req, res) => {
    //     const task = await Task.findByPk(
    //   req.params.id
    //   );
    //     if ((task && req.body.description) || req.body.done) {
    //       await task.update(req.body);
    //       res.send(task);
    //     } else {
    //       res.status(404).send("error na requisição");
    //     }
    //   }); 

///update para asignar productos a un clientes

// router.put("/asignarproductos/:id", async (req, res) => {
//     const { _id } = req.params;
//     const { compra } = req.body;
//     const clienteUpdated = await ClientesModel.findByIdAndUpdate(
//         _id,
//         {
//             $push: { transacao: compra},
//         },
//         { useFindAndModify: false}
//     )
//     res.send(clienteUpdated)
//     });


// delete a Clientes
router.delete("/Clientes/:id", async (req, res) => {
    const { id } = req.params;
    ClientesSchema
    .remove({ _id: id })
    .then((data) => await = res.status(200).json(data))
    .catch((error) => res.json({ message: error }));
    });

module.exports = router;