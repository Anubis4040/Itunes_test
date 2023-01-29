require('dotenv').config();
const express = require('express')
const morgan = require('morgan')

app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(process.env.PORT, () => {
    console.log(`Server runing on port ${process.env.PORT}`)
})