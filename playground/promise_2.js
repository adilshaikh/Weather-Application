
const request= require('request')

var geocodeAddress = (address) =>{
    return new Promise((resolve, reject)=>{
        var encodeComponent = encodeURIComponent(address)
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeComponent}&key=AIzaSyAW2IT4F7WDyqzcrhRKKtiL6kWNApSFv8o`,
            json: true
        },(error,response,body)=>{
            if (error) {
                reject('Unable to connect google Server')
            }else if(body.status === "ZERO_RESULTS"){
                reject('Address is invalid!')
            }else if(body.status === "OK"){
                resolve({
                    Address: body.results[0].formatted_address,
                    Latitude: body.results[0].geometry.location.lat,
                    Longitude: body.results[0].geometry.location.lng
                })
            }
        })
    })

};

geocodeAddress('400102').then((location)=>{
console.log(JSON.stringify(location, undefined, 2 ))
},(errorMessage)=>{
console.log(errorMessage)
})