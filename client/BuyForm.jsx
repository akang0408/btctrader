import React from 'react';

class BuyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buy: [],
      buyData: []
    };
    this.addBuy = this.addBuy.bind(this)
    this.renderBuy = this.renderBuy.bind(this)
    this.storeBuy = this.storeBuy.bind(this)
  }

  addBuy(e) {
    e.preventDefault();
    this.setState({
      buy: [e.target.value, this.props.priceData]
      // buyData: [...this.state.buyData, [e.target.value, this.props.priceData]]
    })
  }
  renderBuy() {
    console.log(this.state)
    if (!this.state.buy.length) return 0;
    return this.state.buy[0] * this.state.buy[1]
  }
  storeBuy() {
  //   let first = this.state.buy[0]
  //   let second = this.state.buy[1]
  //   this.setState({ buyData: [...this.state.buyData], [first, second]})
  // }
  }
  render() {
    return (
      <div id='buyform'>
        <p id='inBuyForm'>Market Buy Price : {this.props.priceData} </p>
        <p id='inBuyForm'>Quantity: <input id='buyAmount' type='text' onChange={this.addBuy}></input> </p>
        <p id='inBuyForm'>Total: $ {this.renderBuy()}</p>
        <button id='inBuyForm' onClick={this.storeBuy()}>Submit Buy Order</button>
      </div>
    )
  }
}

export default BuyForm;