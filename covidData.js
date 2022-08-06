// const request = require("request");
// const url = "https://api.covid19india.org/data.json";

// request(url, (error, response, body) => {

// 	if (!error && response.statusCode == 200) {

// 		body = JSON.parse(body);
// 		var data = [];
// 		for (let i = 0; i < body.statewise.length; i++) {
// 			data.push({
// 				"State": body.statewise[i].state,

// 				"Confirmed": body.statewise[i].confirmed,

// 				"Active": body.statewise[i].active,

// 				"Recovered": body.statewise[i].recovered,

// 				"Death": body.statewise[i].deaths
// 			});
// 		}

// 		console.log("-----Total Cases in India "
// 			+ "and in each state-----");
// 		console.table(data);
// 	}
// })

const axios = require('axios');

axios
  .get('https://api.covid19india.org/data.json')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
