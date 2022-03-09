const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')


const dishRouter = require('./routers/dishRouter')
const promoRouter = require('./routers/promoRouter')
const leaderRouter = require('./routers/leaderRouter')


const HOSTNAME = 'localhost'
const PORT = 3000


const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())


app.use('/dishes', dishRouter)
app.use('/promotions', promoRouter)
app.use('/leaders', leaderRouter)


app.use(express.static(__dirname + '/public'))
app.use((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
})


const server = http.createServer(app)

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`)
})