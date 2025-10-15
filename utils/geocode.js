import request from 'request'
import dotenv from 'dotenv'

dotenv.config()

const mapboxApiKey  = process.env.MAP_BOX_API_KEY

export const geocode = (address, callback) => {
    const geoencoding_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxApiKey}&limit=1`    
    request({url: geoencoding_url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to map service')
        }else if(body.features.length == 0){            
            callback('Map service is unable to find the location. Try another map location')
        }else{
            const long = body.features[0].center[0]
            const lat  = body.features[0].center[1]
            const place_name  = body.features[0].place_name
            callback(undefined, {
                latitude: lat,
                longitude: long,
                place_name: place_name
            })
        }
    })
}