import express from 'express'
import axios from 'axios'
const router = express.Router()

router.get('/', async (req: any, res: any) => {
    try {
        const api = await axios.get(`https://www.balldontlie.io/api/v1/teams`)
        const apiData: [] = api.data.data
        res.render('teams/index.ejs', {apiRes: apiData })
    } catch (err: unknown) {
        console.log(err)
    }
})

//THEN FORMAT
// router.get('/', (req, res) => {
//     axios.get(`https://www.balldontlie.io/api/v1/teams`)
//     .then (apiRes => {
//         // const apiJson = apiRes.data
//         // const jsonArr = JSON.stringify(apiJson)
//         // console.log(apiRes.data)
//         // res.send(apiRes.data.data)
//         res.render('teams/index.ejs', {apiRes: apiRes.data.data })
//     })
// })

router.get('/:id', async (req: any, res: any) => {
    const id: string = req.params.id
    try {
        const api = await axios.get(`https://www.balldontlie.io/api/v1/teams/${id}`)
        const abbrev: string  = api.data.abbreviation
        const conference: string = api.data.conference
        const division: string = api.data.division
        const name = api.data.full_name
        res.render('teams/detail.ejs', { abbrev, conference, division, name })
    } catch (err: unknown) {
        console.log(err)
    }
})

//THEN FORMAT
// router.get('/:id', (req, res) => {
//     axios.get(`https://www.balldontlie.io/api/v1/teams/${req.params.id}`)
//     .then (apiRes => {
//         const abbrev = apiRes.data.abbreviation
//         const conference = apiRes.data.conference
//         const division = apiRes.data.division
//         const name = apiRes.data.full_name

//         res.render('teams/detail.ejs', {abbrev, conference, division, name })
//     }) 
// })


module.exports = router