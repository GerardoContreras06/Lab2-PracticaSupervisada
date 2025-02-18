import User from '../users/user.model.js';
import Course from '../course/course.model.js';

export const saveCourse = async (req, res) => {
    try {

        const data = req.body;
        const user = await User.findOne({ email: data.email});
        console.log(user)
        if(!user){
            return res.status(404).json({
                succes: false,
                message: 'Usuario no encontrado'
            })
        }

        const course = new Course({
            ...data,
            teacher: user._id
        });

        await pet.save();

        res.status(200).json({
            succes: true,
            course
        })

    }catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al guardar curso',
            error
        })
    }
}