import { Schema, model } from "mongoose";

const UserSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "El nombre es requerido"],
            maxLength: [25, "Cant be overcome 25 characters"]
        },
        surname: {
            type: String,
            required: [true, "El apellido es requerido"],
            maxLength: [25, "Cant be overcome 25 characters"]
        },
        username: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            required: [true, "El correo es requerido"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "La contraseña es requerida"],
            minLength: 8,
        },
        profilePicture: {
            type: String,
        },
        phone: {
            type: String,
            minLenght: 8,
            maxLenght: 8,
            required: true,
        },
        role: {
            type: String,
            required: true,
            enum: ["TEACHER_ROLE", "STUDENT_ROLE"],
        },
        estado: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

    UserSchema.methods.toJSON = function () {
        const { __v, password, _id, ...usuario} = this.toObject();
        usuario.uid = _id;
        return usuario;
    }

    export default model('User', UserSchema);