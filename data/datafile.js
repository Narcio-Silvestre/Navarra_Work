const axios = require('axios');

const url = "https://pastebin.pl/view/raw/8fced5f8";

let url_data = [];

axios.get(url)
  .then(response => {
    url_data = response.data;
    exports.url_data = url_data;
  })
  .catch(error => {
    console.log(error);
  });
