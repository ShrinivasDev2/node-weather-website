const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=216d27998f1db378b7442a8c25c321d1&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback(
        "Unable to find for the location, Try another search!",
        undefined
      );
    } else {
      callback(
        undefined,
        "It is currently " +
          body.current.temperature +
          " degrees. Weather is " +
          body.current.weather_descriptions
      );
    }
  });
};

module.exports = forecast;
