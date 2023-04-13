const request = require('request');

const args = process.argv.slice(2);
const breed = args[0];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const breedFetcher = (breed) => {
  request.get(URL, (error, response, body) => {
    if (error) {
      console.log(`Request failed ${error}`);
      return;
    }
    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log(`${breed} is not found`);
      return;
    }

    console.log(data[0].description);

  });
};
breedFetcher();