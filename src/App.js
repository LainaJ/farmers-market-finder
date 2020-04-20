import React from 'react'
import MarketList from './MarketList.js'
import farmBasket from './farmBasket.jpg'

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
        <img className="MarketDisplay" src={farmBasket} alt="farmers market basket"/>
        <div> 
          {this.renderMarketList()} 
        </div> 
      </div>
    )
  }
}

export default App;
