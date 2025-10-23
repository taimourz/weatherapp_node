# 🌦️ Weather App

A Weather application that geocodes user-input locations using **Mapbox API**, and retrieves live weather data from **Weatherstack API**.  
The **Mapbox API** returns the latitude and longitude for a given location, which are then used by the **Weatherstack API** to provide real-time weather forecasts.

## Tech Stack
- Node
- Express
- Handlebars

## ⚙️ Environment Setup

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
npm install
touch .env && echo "MAP_BOX_API_KEY=your_mapbox_api_key
WEATHER_STACK_API_KEY=your_weatherstack_api_key" > .env
node src/app.js
```
## Example Usage
![Weather App Demo](public/img/weatherappdemo.gif)


##  Deployment on Heroku
####
```bash
heroku login
heroku create weather-app
heroku config:set MAP_BOX_API_KEY=your_mapbox_api_key
heroku config:set WEATHER_STACK_API_KEY=your_weatherstack_api_key
git push heroku main
heroku open
```
