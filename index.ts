//require npms

import express from 'express'
import ejs from 'ejs'
import layouts from 'express-ejs-layouts'
import axios from 'axios'

const methodOverride = require('method-override')

//config
const app = express()

//middleware stuff
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(layouts)
app.use(express.static(__dirname + '/public/'))
app.use(methodOverride('_method'))

//controllers
app.use('/teams', require('./routes/teams'))
app.use('/players', require('./routes/players'))
app.use('/favorites', require('./routes/favorites'))






app.get('/', (req: any, res: any) => {
res.render('index.ejs')
})





app.listen(process.env.PORT || 2408, () => {
    console.log('come on and slam, if you wanna jam 👾')
})