const request = require('request'); 


// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location!');

//     } else {
//     console.log(response.body.current.weather_descriptions[0] + ". It's currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.");
// }
// });

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e851c16549db5d50dbb106479b6d25aa&query=' + latitude + ',' + longitude;
    
    //destructuring body from response (Section 6)
    request ({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);

        } else if (body.error) {
            callback('Unable to find location!', undefined);

        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It's currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.");
        }
    })

};

module.exports = forecast;