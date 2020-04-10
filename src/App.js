import React from 'react'
import './App.css'

let appToken = process.env.REACT_APP_FM_API_KEY

class App extends React.Component {

  state = {
    markets: []
  }



  componentDidMount() {
    // fetch(`https://data.cityofnewyork.us/resource/8vwk-6iz2.json?$$app_token=${appToken}`)
    // .then(response => response.json())
    // .then(marketData => 
    //   this.setState ({
    //     markets: marketData
    //   })
    // )
    fetch(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=10016`)
    .then(response => response.json())
    .then(usMarkets => 
     this.searchResultsHandler(usMarkets)
    )


  //   fetch(`http://search.ams.usda.gov/FarmersMarkets/v1/data.svc?wsdl`)
  // .then(response => response.json())
  //   .then(usMarkets => 
  //    console.log(usMarkets)
  //   )
  }

   searchResultsHandler(searchResults) {
     console.log(searchResults)
    for (var key in searchResults) {
        alert(key);
        var results = searchResults[key];
        for (var i = 0; i < results.length; i++) {
            var result = results[i];
            console.log(key)
            for (var key in result) {
                //only do an alert on the first search result
                if (i === 0) {
                    this.getDetails(result[key]);
                }
            }
        }
    }
}

 getDetails(id) {
  fetch(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${id}`)
  .then(resp => resp.json())
  .then(resp => this.detailResultHandler(resp))
 }

//iterate through the JSON result object.
 detailResultHandler(detailResults) {
   console.log(detailResults)
  for (var key in detailResults) {
      alert(key);
      var results = detailResults[key];
      alert(results['GoogleLink']);
  }
}


  render() {
    return (
      <div>

        
      </div>
    )
  }
}

export default App;
