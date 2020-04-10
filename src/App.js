import React from 'react'
import './App.css'

let appToken = process.env.REACT_APP_FM_API_KEY

fetch(`https://data.cityofnewyork.us/resource/8vwk-6iz2.json?$$app_token=${appToken}`)
.then(response => response.json())
.then(marketData => console.log(marketData))

class App extends React.Component {
  render() {
    return (
      <div>

        
      </div>
    )
  }
}

export default App;
