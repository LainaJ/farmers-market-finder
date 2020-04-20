import React from 'react';

class MarketListItem extends React.Component {


    render(){
        return (
            <div className="MarketListItem">
                <p>Marketname: {this.props.market.marketname}</p>
                <p>Location: {this.props.market.streetaddress}</p>
                <p>Hours: </p>
    
            </div>

        )
    }

}

export default MarketListItem