import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const static_dir_path = path.join(__dirname, '../public')
const views_dir_path = path.join(__dirname, '../templates')


app.set('view engine', 'hbs')
app.set('views', views_dir_path)
app.use(express.static(static_dir_path))


app.get('/weather', (req, res) => {
    res.send([
        {
            "weather" : "object",
            "forcast" : "object"
        }

    ])
})

app.get('/' , (req, res) => {
    res.render('index', {
        title: "Weather App",
        name: "taimour"
    })
})


app.get('/about' , (req, res) => {
    res.render('about', {
        title: "About me",
        name: "created by taimour afzal"
    })
})



app.get('/help' , (req, res) => {
    res.render('help', {
        msg: "You can visit this page if you need any help",
    })
})



app.listen(3000, () => {
    console.log("Server is up and running")
})