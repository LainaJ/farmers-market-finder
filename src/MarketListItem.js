import React from 'react';

class MarketListItem extends React.Component {


    render(){
        return (
            <div>
                {this.props.market}
            </div>

        )
    }

}

export default MarketListItem