const yarg = require('yargs');
const geocode = require('./geocode/geocode.js')
const getWeather = require('./weather/weather.js')

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

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
if (errorMessage){
  console.log(errorMessage)
}else {
  console.log(results.Address)
  getWeather.getWeather(results.Latitude,results.Longitude,(errorMessage, weatherResults)=>{
    if (errorMessage){
      console.log(errorMessage);
    }else{
      console.log(`It's currently ${weatherResults.Temperature}, and It's feels like ${weatherResults.ApparentTemperature}`)
      console.log(JSON.stringify(weatherResults, undefined, 2))
    }
  });
}
})



