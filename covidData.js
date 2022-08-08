
const axios = require('axios');
axios
  .get('https://api.covid19india.org/data.json')
  .then(res => {
    if(res.status == 200){
      const data = []
      let maxState = '';
      let minState = '';
      console.log(`statusCode: ${res.status}`);
      const statewiseData = res.data.statewise
      // console.log(statewiseData);
      var max = 0;
      var min = 99999999;
      for (let i = 0; i < statewiseData.length; i++){
        data.push({
       "State": statewiseData[i].state,

       "Confirmed": statewiseData[i].confirmed,

       "Active": statewiseData[i].active,

       "Recovered": statewiseData[i].recovered,

       "Death": statewiseData[i].deaths
     })
        const c = parseInt(statewiseData[i].confirmed)
        
        if( i > 0){
          if (c > max){
          max = c;
          maxState = statewiseData[i].state
        }
        if (c < min){
          min = c;
          minState = statewiseData[i].state
        }
        }
      }
      console.log(maxState)
      console.log(minState)
      // const index = statewiseData.indexOf((el,i)=>{
      //   return el.confirmed = "0"
      // })
      // console.log(index)
      // console.table(data);
      // console.log(data)
      var sumConfirmed = 0
      var totalConfirmed = statewiseData[0].confirmed
      var totalActive = statewiseData[0].active
      var totalDeaths = statewiseData[0].deaths
      var totalRecovery = statewiseData[0].recovered
      console.log(`Death Rate: ${parseInt(totalDeaths)/parseInt(totalConfirmed) *100}`)
      console.log(`Recovery Rate: ${parseInt(totalRecovery)/parseInt(totalConfirmed) *100}`)
      console.log(`State with Maximum Cases => ${maxState} : ${max}`)
      console.log(`State with Minimum Cases => ${minState} : ${min}`)
      console.log(`Total Cases Confirmed: ${totalConfirmed}`)
      console.log(`Total Active Cases: ${totalActive}`)
    }
  });
  