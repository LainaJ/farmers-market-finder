import React from 'react';
import MarketListItem from './MarketListItem'

class MarketList extends React.Component {


    renderMarketListItems = () => {
        return this.props.markets.map(market => <MarketListItem key={market.key} market={market} />) 
        console.log(this.props.markets)
    }

    render(){
        return (
            <div>
                {this.renderMarketListItems()}
            </div>

        )
    }

}

export default MarketList