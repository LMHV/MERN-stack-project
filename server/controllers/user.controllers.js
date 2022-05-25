import User from '../models/user.js'

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message })
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message })
    }
}

export const createUser = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;
        const user = new User({
            name,
            email,
            password,
            age
        })

        // Check if exists
        const existUser = await User.findOne({ email: req.body.email })
        if (existUser) {
            console.log('Email already exist')
            return
        }

        await user.save();
        res.json({ status: 'Usuario almacenado' })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message })
    }
}

export const modifyUser = async (req, res) => {
    try {
        const { name, email, password, age } = req.body
        const newUser = { name, email, password, age };
        await User.findByIdAndUpdate(req.params.id, newUser);
        res.json({ status: 'Usuario modificado' });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ status: 'Usuario eliminado' })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message })
    }
}

export const findUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if exists
        const existUser = await User.findOne({ email: req.body.email, password: req.body.password })
        if (!existUser) {
            console.log('User doesnt exists')
            return
        }
        return res.json({ status: 'User found'})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message })
    }
}