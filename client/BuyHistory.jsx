import React from 'react';
import BuyItem from './BuyItem.jsx'

class BuyHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    
    let buyArray = this.props.buyData
    // console.log('buyArray', buyArray)
    let loopy = [];
    if (buyArray.length > 0) {
    for (let i = 0; i < buyArray.length; i += 1) {
      loopy.push(
        <BuyItem 
          key={'hey' + i} 
          quantity={buyArray[i][0]} 
          price={buyArray[i][1]} 
          target ={buyArray[i][2]}
          priceData={this.props.priceData} 
          bankroll={this.props.bankroll} 
          storeSell={this.props.storeSell}
        />
      )
    }
    // console.log('loopy', loopy)
    }

    return (
      <div id='history'>
        <h2>Purchase History</h2>
        {loopy}
      </div>
    );
  }

}
  



export default BuyHistory;