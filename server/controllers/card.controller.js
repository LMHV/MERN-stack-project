import Card from '../models/card.js'

export const getCards = async (req, res) => {
    try {
        const cards = await Card.find()
        res.json(cards)
    } catch {
        console.log(error.message)
        return res.status(500).json({error: error.message})
    }
}

export const findCardOffers = async (req, res) => {
    try {
        const offerCards = await Card.find({offer: 'True'})
        res.json(offerCards)
    } catch {
        console.log(error.message)
        return res.status(500).json({error: error.message})
    }
}