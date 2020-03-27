import React from 'react';


class BuyItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let bankrollCopy = this.props.bankroll
    let buyPrice = this.props.quantity * this.props.priceData
    let sellPrice = this.props.quantity * this.props.price
    let subtract = Math.round(100 * (buyPrice - sellPrice)) / 100
    // console.log('buyPrice', buyPrice)
    // console.log('sellPrice', sellPrice)
    // console.log('subtract', subtract)
    const marketSell = () => {
      return bankrollCopy - subtract
    }
    return (
      <div>
        <span id='title'>Quantity Bought:</span> <span id='values'>{this.props.quantity}</span>
        <span id='title'>Purchase Price:</span> <span id='values'>{this.props.price}</span>
        <span id='title'>Market Sell Net Profit/Loss:</span> <span id='values'>${subtract}</span> 
        <span><button onClick={() => {this.props.storeSell(this.props.target)}} id='sell'>Market Sell</button></span>
      </div>
    );
  }
}

export default BuyItem;