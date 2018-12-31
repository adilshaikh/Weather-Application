const yarg = require('yargs');
const axios = require('axios')
// const geocode = require('./geocode/geocode.js')
// const getWeather = require('./weather/weather.js')

const argv = yarg.options({
    address: {
        describe: 'Address of the location',
        demand: true,
        alias: 'a',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

var encodeComponent = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeComponent}&key=AIzaSyAW2IT4F7WDyqzcrhRKKtiL6kWNApSFv8o`;

axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Please input valid address.')
    }
    var lat =  response.data.results[0].geometry.location.lat;
    var lng =  response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/4f2db5ece37e3c2367c937c655a3f4db/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address)
    return axios.get(weatherUrl);
}).then((response)=>{
    var Temperature= response.data.currently.temperature;
    var ApparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It is currently ${Temperature} and its feels like ${ApparentTemperature}`)
})
.catch((e)=>{
     if(e.code === 'ENOTFOUND'){
    console.log("Unable to connect API server")
     }else{
         console.log(e.message)
     }
})

// geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
// if (errorMessage){
//   console.log(errorMessage)
// }else {
//   console.log(results.Address)
//   getWeather.getWeather(results.Latitude,results.Longitude,(errorMessage, weatherResults)=>{
//     if (errorMessage){
//       console.log(errorMessage);
//     }else{
//       console.log(`It's currently ${weatherResults.Temperature}, and It's feels like ${weatherResults.ApparentTemperature}`)
//       console.log(JSON.stringify(weatherResults, undefined, 2))
//     }
//   });
// }
// })



