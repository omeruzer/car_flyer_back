const express = require('express')
const app = express()
require('dotenv/config')


const bodyParser = require('body-parser')
// database
const db = require('./helper/db')()

//cors
var cors = require('cors')
app.use(cors())

//routers
const brand = require('./router/brand')
const category = require('./router/category')
const model = require('./router/model')
const car = require('./router/car')
const gear = require('./router/gear')
const fuel = require('./router/fuel')
const cases = require('./router/case')
const traction = require('./router/traction')
const fromWho = require('./router/fromWho')
const year = require('./router/year')
const city = require('./router/city')
const district = require('./router/district')
const street = require('./router/street')

app.use(bodyParser.json())

app.use('/api/brand',brand)
app.use('/api/category',category)
app.use('/api/model',model)
app.use('/api/car',car)
app.use('/api/gear',gear)
app.use('/api/fuel',fuel)
app.use('/api/case',cases)
app.use('/api/traction',traction)
app.use('/api/fromwho',fromWho)
app.use('/api/year',year)
app.use('/api/city',city)
app.use('/api/district',district)
app.use('/api/street',street)


app.listen(process.env.PORT,()=>{console.log(`Listening to ${process.env.PORT}`);})