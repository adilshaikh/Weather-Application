const fs = require('fs');
const request = require('request')

var geocodeAddress = (address, callback) =>{
    var encodeComponent = encodeURIComponent(address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeComponent}&key=Api_key`,
  json: true
}, (error, response, body) => {
  if (error){
      callback('Unable to connect Google Server')
    //console.log('Unable to connect Google Server');
  }else if(body.status === "ZERO_RESULTS")
  {
    callback('Please enter valid Address.');
  }
  else if(body.status === "OK")
  {
      callback(undefined, {
          Address: body.results[0].formatted_address,
          Latitude: body.results[0].geometry.location.lat,
          Longitude: body.results[0].geometry.location.lng
      })
 }
  
});
}

module.exports = {
    geocodeAddress,
}