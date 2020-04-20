import React from 'react'
import MarketList from './MarketList.js'

let appToken = process.env.REACT_APP_FM_API_KEY

class App extends React.Component {

  state = {
    markets: []
  }

  componentDidMount() {
    fetch(`https://data.cityofnewyork.us/resource/8vwk-6iz2.json?$$app_token=${appToken}`)
    .then(response => response.json())
    .then(marketData => 
      this.setState ({
        markets: marketData
      })
    )
  }

  renderMarketList = () => {
    return <MarketList markets={this.state.markets} />

  }



  render() {
    return (
      <div>
            {this.renderMarketList()}  
      </div>
    )
  }
}

export default App;
