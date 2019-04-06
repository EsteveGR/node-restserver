const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nom és necessari']
    },
    email:{
        type: String,
        required: [true, 'El correu és necessari']
    },
    password:{
        type: String,
        required: [true, 'El pass és obligatori']
    },
    img:{
        type: String,
        required: false
    }, // no és obligatoria
    role: {
        type: String,
        default : 'USER_ROLE'
    }, //default : 'USER_ROLE'
    estado: {
        type: Boolean,
        default : true
    }, // Boolean
    google: {
        type: Boolean,
        default : false
    } // Boolean
});

module.exports = mongoose.model('Usuario', usuarioSchema);

