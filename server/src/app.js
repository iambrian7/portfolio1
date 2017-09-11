const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        messages: "hello portfolio1"
    })
})

var port = process.env.PORT || 3999

app.listen(port, ()=> {
    console.log("portfolio1 listening on port " + port)
})


