const request = require('request');
const fs = require('fs');

var getWeather = (lat, lng, callback) => {
  request({
    url:`https://api.darksky.net/forecast/4f2db5ece37e3c2367c937c655a3f4db/${lat},${lng}`,
    json: true
  },(error, response, body) => {
    if (error){
      callback('Unable to connect to Dark Sky Server');
    } else if(response.statusCode === 400){
      callback('Unable to fetch weather data.')
    }
    else if ( response.statusCode === 200){
      callback(undefined, {
        Temperature: body.currently.temperature,
        ApparentTemperature: body.currently.apparentTemperature,
      });
    }
  })
  
}

module.exports = {
  getWeather,
}
