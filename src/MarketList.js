import React from 'react';
import MarketListItem from './MarketListItem'

class MarketList extends React.Component {


    renderMarketListItems = () => {
       let markets = this.props.markets 
        return markets.map(market => 
        <MarketListItem key={market.id} market={market} />)
    }

    render(){
        return (
            <div className="MarketContainer">
                {this.renderMarketListItems()}
            </div>

        )
    }

}

export default MarketList