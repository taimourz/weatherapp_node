import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url'

const app = express()


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get('', (req, res) => {
    res.send(" <h1>Hello World</h1>")
})

const static_dir_path = path.join(__dirname, '../public')

app.use(express.static(static_dir_path))

app.get('/weather', (req, res) => {
    res.send([
        {
            "weather" : "object",
            "forcast" : "object"
        }

    ])
})

app.listen(3000, () => {
    console.log("Server is up and running")
})