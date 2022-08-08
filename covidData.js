
const axios = require('axios');
axios
  .get('https://api.covid19india.org/data.json')
  .then(res => {
    if(res.status == 200){
      const data = []
      console.log(`statusCode: ${res.status}`);
      const statewiseData = res.data.statewise
      // console.log(statewiseData);
      for (let i = 0; i < statewiseData.length; i++){
        data.push({
       "State": statewiseData[i].state,

       "Confirmed": statewiseData[i].confirmed,

       "Active": statewiseData[i].active,

       "Recovered": statewiseData[i].recovered,

       "Death": statewiseData[i].deaths
     })
      }
      // console.table(data);
      console.log(data)
      var sumConfirmed = 0
      var totalConfirmed = statewiseData[0].confirmed
      var totalActive = statewiseData[0].active
      var totalDeaths = statewiseData[0].deaths
      var totalRecovery = statewiseData[0].recovered
      console.log(`Death Rate: ${parseInt(totalDeaths)/parseInt(totalConfirmed) *100}`)
      console.log(`Recovery Rate: ${parseInt(totalRecovery)/parseInt(totalConfirmed) *100}`)
      console.log(`Total Cases Confirmed: ${totalConfirmed}`)
      console.log(`Total Active Cases: ${totalActive}`)
      // statewiseData.forEach((x) => {
      //   var newData = x.confirmed;
      //   newData = parseInt(newData)
      //   sumConfirmed+=newData;
      // }) 
      // sumConfirmed = sumConfirmed - x.confirmed[0]
      // console.log(sumConfirmed)
    }
  });
  