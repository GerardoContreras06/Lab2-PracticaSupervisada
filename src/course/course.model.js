import { Schema, model } from "mongoose";

const CourseSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        default: true,
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
},  {
        timestamps: true,
        versionKey: false
});

export default model('Course', CourseSchema)