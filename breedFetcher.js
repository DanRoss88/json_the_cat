const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request.get(URL, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(Error(`${breedName} Not found`));
      return;
    }

    callback(null, data[0].description);

  });
};

module.exports = { fetchBreedDescription };