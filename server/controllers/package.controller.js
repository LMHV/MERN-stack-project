import Package from '../models/package.js'

export const getPackages = async (req, res) => {
    try {
        const packages = await Package.find()
        res.json(packages)
    } catch {
        console.log(error.message)
        return res.status(500).json({error: error.message})
    }
}

export const findPackageOffers = async (req, res) => {
    try {
        const packages = await Package.find({ offer: 'true'})
        res.json(packages)
    } catch {
        console.log(error.message)
        return res.status(500).json({error: error.message})
    }
}