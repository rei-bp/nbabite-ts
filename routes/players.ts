import express from 'express'
import axios from 'axios'
const db = require('../models')
// import db from '../models'
const router = express.Router()


router.get('/', (req: any, res: any) => {
    res.render('players/index.ejs')
})


router.get('/search', async (req: any, res: any) => {
    const name: string = req.query.playerName
    try {
        const api = await axios.get(`https://www.balldontlie.io/api/v1/players/?search=${name}`)
        const response: []= api.data.data
        res.render('players/results.ejs', { apiRes: response })
    } catch (err: unknown) {
        console.log(err)
    }
})

//THEN FORMAT
// router.get('/search', (req: any, res: any) => {
//     axios.get(`https://www.balldontlie.io/api/v1/players/?search=${req.query.playerName}`)
//     .then (apiRes => {
//         console.log(apiRes.data)
//         res.render('players/results.ejs', { apiRes: apiRes.data.data })
//     })
// })


router.get('/:id', async (req: any, res: any) => {
    try {
        const id: string = req.params.id
        const api = await axios.get(`https://www.balldontlie.io/api/v1/players/${id}`)
        const response: [] = api.data
        res.render('players/detail.ejs', { resOne: response })
    } catch (err: unknown) {
        console.log(err)
    }
})

//THEN FORMAT
// router.get('/:id', (req: any, res: any) => {
//     axios.get(`https://www.balldontlie.io/api/v1/players/${req.params.id}`)
//     .then (resApi => {
//         res.render('players/detail.ejs', {resOne: resApi.data})
//     })
//     .catch ((err) => {
//         console.log(err)
//     })
// })

router.post('/addseason/:id/:first/:last', async (req: any, res: any) => {

    const id: string = req.params.id
    const first: string = req.params.first
    const last: string = req.params.last
    const season: number = req.body.season
    try {
        const api = await axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}&season=${season}`)
        const addStats = api.data.data[0]
        const year: number = addStats.season
        const min: string = addStats.min
        const gp: number =  addStats.games_played
        const fgm: number =  addStats.fgm
        const fga: number =  addStats.fga
        const fg3m: number =  addStats.fg3m
        const fg3a: number =  addStats.fg3a
        const ftm: number =  addStats.ftm
        const fta: number =  addStats.fta
        const oreb: number =  addStats.oreb
        const dreb: number =  addStats.dreb
        const reb: number =  addStats.reb
        const ast: number =  addStats.ast
        const stl: number =  addStats.stl
        const blk: number =  addStats.blk
        const tov:  number = addStats.turnover
        const pf: number =  addStats.pf
        const pts: number =  addStats.pts
        const fg_pct: number =  addStats.fg_pct
        const fg3_pct: number =  addStats.fg3_pct
        const ft_pct: number =  addStats.ft_pct

        db.avgstats.create({
            playerId: id,
            year: year,
            min: min,
            gp: gp,
            fgm: fgm,
            fga: fga,
            fg3m: fg3m,
            fg3a: fg3a,
            ftm: ftm,
            fta: fta,
            oreb: oreb,
            dreb: dreb,
            reb: reb,
            ast: ast,
            stl: stl,
            blk: blk,
            tov: tov,
            pf: pf,
            pts:pts,
            fg_pct: fg_pct,
            fg3_pct: fg3_pct,
            ft_pct: ft_pct
        })
        res.redirect(`/players/showseason/${id}/${first}/${last}`)
    } catch (err: unknown) {
        console.log(err)
    }
})

//THEN FORMAT
// router.post('/addseason/:id/:first/:last', (req, res) => {
//     let id = req.params.id
//     let first = req.params.first  
//     let last = req.params.last 
//     axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${req.params.id}&season=${req.body.season}`)
//     .then (stats => {
//         const addStats = stats.data.data[0]
//         db.avgstats.create({
//             playerId: id,
//             year: addStats.season,
//             min: addStats.min,
//             gp: addStats.games_played,
//             fgm: addStats.fgm,
//             fga: addStats.fga,
//             fg3m: addStats.fg3m,
//             fg3a: addStats.fg3a,
//             ftm: addStats. ftm,
//             fta: addStats.fta,
//             oreb: addStats.oreb,
//             dreb: addStats.dreb,
//             reb: addStats.reb,
//             ast: addStats.ast,
//             stl: addStats.stl,
//             blk: addStats.blk,
//             tov: addStats.turnover,
//             pf: addStats.pf,
//             pts: addStats.pts,
//             fg_pct: addStats.fg_pct,
//             fg3_pct: addStats.fg3_pct,
//             ft_pct: addStats.ft_pct
//         }).catch ((err)=> {
//             console.log(err)
//         })
//     }).then (findStats => {  
//         res.redirect(`/players/showseason/${id}/${first}/${last}`)
//     }).catch ((err) => {
//         console.log(err)
//     })
// })


    router.get('/showseason/:id/:first/:last', async (req: any, res: any) => {
        const id: string = req.params.id
        const first: string = req.params.first
        const last: string = req.params.last

        try {
            const getData: [] = await db.avgstats.findAll({
                where: {
                    playerId: id
                }
            })
            res.render('players/detailstats.ejs', {statsRes: getData, id, first, last })
        } catch (err: unknown) {
            console.log(err)
        }
    })

    // THEN FORMAT
    // router.get('/showseason/:id/:first/:last', (req, res) => {
    //     let id = req.params.id
    //     let first = req.params.first
    //     let last = req.params.last
    //     db.avgstats.findAll({
    //         where: {
    //             playerId: id
    //         }
    //     }).then(statsRes => {
    //         res.render('players/detailstats.ejs', { statsRes: statsRes, id, first, last })
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // })


    router.delete('/delete/:id/:first/:last/:year', async (req: any, res: any) => {
        const id: string = req.params.id
        const first: string = req.params.first
        const last: string = req.params.last
        const year: string = req.params.year

        try {
            const del = await db.avgstats.destroy({
                where: {
                    year: year
                }
            })
        res.redirect(`/players/showseason/${id}/${first}/${last}`)
        } catch (err: unknown) {
            console.log(err)
        }
    })

    //THEN FORMAT
    // router.delete('/delete/:id/:first/:last/:year', (req, res) => {
    //     let id = req.params.id
    //     let first = req.params.first
    //     let last = req.params.last
    //     let year = req.params.year
    //     db.avgstats.destroy({
    //         where: {
    //             year: year
    //         }
    //     }).then(del => {
    //         res.redirect(`/players/showseason/${id}/${first}/${last}`)
    //     })
    // })

    module.exports = router