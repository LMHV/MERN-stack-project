import User from '../models/user.js'

export const getUsers = async (req, res) => {
   try {
       const users = await User.find()
       res.json(users)
   } catch (error){
       console.log(error.message)
       return res.status(500).json({error: error.message})
   }
}

export const getUser =  async (req, res) => {
    
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch(error) {
        console.log(error.message)
        return res.status(500).json({error: error.message})
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
        await user.save();
        res.json({ status: 'Usuario almacenado' })
    } catch(error) {
        console.log(error.message)
        return res.status(500).json({error: error.message})
    }
}

export const modifyUser = async (req, res) => {
    try {
        const { name, email, password, age } = req.body
        const newUser = { name, email, password, age };
        await User.findByIdAndUpdate(req.params.id, newUser);
        res.json({ status: 'Usuario modificado' });
    } catch(error) {
        console.log(error.message)
        return res.status(500).json({error: error.message})
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ status: 'Usuario eliminado' })
    } catch(error){
        console.log(error.message)
        return res.status(500).json({error: error.message})
    }
}