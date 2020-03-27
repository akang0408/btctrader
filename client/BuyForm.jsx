import React from 'react';

class BuyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

 
  render() {
    return (
      <div id='buyform'>
        <p id='inBuyForm'>Market Buy Price : ${this.props.priceData} </p>
        <p id='inBuyForm'>Quantity: <input id='buyAmount' type='text' onChange={this.props.addBuy}></input> </p>
        <p id='inBuyForm'>Order Total: ${this.props.renderBuy()}</p>
        <button id='inBuyForm' onClick={() => this.props.storeBuy()}>Submit Buy Order</button>
      </div>
    )
  }
}

export default BuyForm;