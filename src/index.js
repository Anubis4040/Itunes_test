require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
const http = require('./http-common')

app = express()
const router = express.Router();

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


//List song by artist
app.get('/songs/', async (req, res) => {

    const query = req.query

    const params = {
        media:'music',
        entity:'song',
        attribute:'artistTerm',
        term:query.artistName,
        limit:25
    }

    const resultSet = await http.get(
        process.env.ITUNES_API_URL,{
            params
        }
    )

    // console.log(resultSet.data, 'resultSet')

    const albums = Array.from(new Set(resultSet.data.results.map((item) => item.collectionName)))

    console.log(albums, 'albums')

    res.json({
        resultsCount: resultSet.data.resultCount,
        almbumsCount: albums.length,
        albums: albums,
        results: resultSet.data.results
    })
})

//Set song as favorite



app.listen(process.env.PORT, () => {
    console.log(`Server runing on port ${process.env.PORT}`)
})