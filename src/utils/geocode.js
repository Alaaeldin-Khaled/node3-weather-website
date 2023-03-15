const request = require('request');

const geocode = (address, callback) => {
    const geocodingURL = 'http://api.positionstack.com/v1/forward?access_key=60f9eb5a355ef6a3132ed753bad77fc3&query=' + encodeURIComponent(address) + '&limit=1';

    request({ url: geocodingURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);

        } else if (response.body.error || response.body.data.length === 0) {
            callback('Unable to find location. please try another search!', undefined);

        } else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: response.body.data[0].label
            });
        }
        });
};

module.exports = geocode;