import express from 'express'
import axios from 'axios'
const db = require('../models')

const router = express.Router()


router.get('/', async (req: any, res: any) => {
    try {
       const getData: [] = await db.players.findAll({
           attributes: [
            'firstName', 
            'lastName',
            'playerId',
            'team']
        })
       res.render('favorites/index.ejs', { players: getData })
    } catch (err: unknown) {
        console.log(err)
    }
})


// router.get('/', (req: any, res: any) => {
//     db.players.findAll({    
//         attributes: ['firstName', 'lastName', 'playerId', 'team']
//     }).then ((players: any) => {
//             res.render('favorites/index.ejs', { players: players })
//         }).catch ((err: unknown) => {
//         console.log(err)
//     })
// })


router.post('/new/:id', async (req: any, res: any) => {
    const id: string = req.params.id
    try {
        const api = await axios.get(`https://www.balldontlie.io/api/v1/players/${id}`)
        const first: string = api.data.first_name
        const last: string = api.data.last_name
        const dbId: number = api.data.id
        const dbteam: string = api.data.team.full_name

        db.players.create({
            firstName: first,
            lastName: last,
            playerId: dbId,
            team: dbteam
        })
        res.redirect('/favorites')
    } catch (err: unknown) {
        console.log(err)
    }
})

//THEN
// router.post('/new/:id', (req, res) => {
//     axios.get(`https://www.balldontlie.io/api/v1/players/${req.params.id}`)
//     .then (apiRes => {
//     db.players.create({
//         firstName: apiRes.data.first_name,
//         lastName: apiRes.data.last_name,
//         playerId: apiRes.data.id,
//         team: apiRes.data.team.full_name
//         }).then (player => {
//             console.log('success')
//             res.redirect('/favorites')
//         })
//         .catch ((err) => {
//             console.log(err)
//         })
//     })
// })

router.get('/:id', async (req: any, res: any) => {
    const id: string = req.params.id
    try{
        const axOne = await axios.get(`https://www.balldontlie.io/api/v1/players/${id}`)
        const axTwo = await axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`)
        res.render('players/detail.ejs', { resOne: axOne.data, resTwo: axTwo.data.data[0] })
    } catch (err: unknown) {
        console.log(err)
    }
})

// router.get('/:id', (req, res) => {

//     const axOne = axios.get(`https://www.balldontlie.io/api/v1/players/${req.params.id}`)
//     const axTwo = axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${req.params.id}`)
//     axios.all([axOne, axTwo])
//     .then (axios.spread((...responses) => {
//         const resOne = responses[0]
//         const resTwo = responses[1]
//         res.render('players/detail.ejs', {resOne: resOne.data, resTwo: resTwo.data.data[0]})
//     }))
//     .catch ((err) => {
//         console.log(err)
//     })
// })

router.delete('/delete/:id', async (req: any, res: any) => {
    const id: string = req.params.id
    try {
       await db.players.destroy({
           where: {
               playerId: id
           }
       })
       res.redirect('/favorites')
    } catch (err: unknown) {
        console.log(err)
    }
})

// THEN FORMAT
// router.delete('/delete/:id', (req, res) => {
//     db.players.destroy({
//     where: {
//         playerId: req.params.id
//     }
//     })
//     .then (player => {
//         res.redirect('/favorites')
//     })
// })


module.exports = router