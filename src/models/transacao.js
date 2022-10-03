const mongoose = require("mongoose");
const { Schema } = mongoose;

const transacaoSchema = mongoose.Schema({
    monto: {
        type: Number,
        required: true
    },
    pagamento: {
        type: String,
        required: true
    },
    data: {
        type: Date, 
        default: Date.now
    },
    
});

module.exports = mongoose.model('transacao', transacaoSchema);