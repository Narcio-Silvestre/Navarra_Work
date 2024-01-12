//Author: Nárcio Silvestre
//Email: narciosilvestre16@gmail.com
//Contact: +351920262110
//Description: Test exercises from Company Navarra

const axios = require('axios');


const url = "https://pastebin.pl/view/raw/8fced5f8";

let url_data = [];

//Get json from url 
axios.get(url)
  .then(response => {
    url_data = response.data;
    exports.url_data = url_data;
  })
  .catch(error => {
    console.log(error);
  });
