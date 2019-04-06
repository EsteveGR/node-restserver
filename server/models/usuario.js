const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUE} no és un rol valid'
};

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nom és necessari']
    },
    email:{
        type: String,
        unique: true ,
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
        default : 'USER_ROLE', 
        enum: rolesValidos
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

usuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    
    return userObject;
}

usuarioSchema.plugin(uniqueValidator,{message: '{PATH} ha de ser unic'});
module.exports = mongoose.model('Usuario', usuarioSchema);

