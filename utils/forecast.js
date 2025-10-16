import request from 'request'
import dotenv from 'dotenv'

dotenv.config()

const weatherApiKey = process.env.WEATHER_STACK_API_KEY

export const forecast = ({lat, long}, callback) => {
    const weather_api_url = `https://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${encodeURIComponent(long)},${encodeURIComponent(lat)}`
    request({url: weather_api_url, json: true}, (error, {body}) => {
        if(error){
            callback("Unable to connect to the weather service")
        }else if(body.error){
            callback("Please enter correct coordinates " + JSON.stringify(body.error)) 
        }else{
            callback(undefined,`Today it's going to be ${body.current.weather_descriptions} outside. Currently it's ${body.current.temperature} degrees out. There is a ${body.current.precip * 100}% chance of rain.`)
        }        
    })
}