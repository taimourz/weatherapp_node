import path from 'path'
import express from 'express'
import hbs from 'hbs'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const static_dir_path = path.join(__dirname, '../public')
const views_dir_path = path.join(__dirname, '../templates/views')
const partials_dir_path = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', views_dir_path)
app.use(express.static(static_dir_path))
hbs.registerPartials(partials_dir_path)


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
        name: "taimour afzal"
    })
})


app.get('/about' , (req, res) => {
    res.render('about', {
        title: "About me",
        name: "taimour afzal"
    })
})



app.get('/help' , (req, res) => {
    res.render('help', {
        title: "Help page",
        msg: "You can visit this page if you need any help",
        name: "taimour afzal",
    })
})

app.get(/^\/help\/(.*)$/, (req, res) => {
    res.render('404', {
       error: "Help page not found",
       name: "taimour"
    })
})

app.get(/(.*)$/, (req, res) => {    
    res.render('404', {
       error: "Page Not Found" ,
       name: "taimour afzal"
    })
})




app.listen(3000, () => {
    console.log("Server is up and running")
})