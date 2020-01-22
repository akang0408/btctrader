import React from 'react';
import BuyForm from './BuyForm.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceData: null
    };
  }

  componentDidMount() {
    const btcFetch = () => {
    fetch('https://api.coinbase.com/v2/exchange-rates?currency=BTC')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      this.setState({ priceData: data.data.rates.USD })
    })
    }
    // setInterval(btcFetch, 10000)
    btcFetch()
  }

   render() {
      return (
         <div>
           <div>
              Live Market Data
              <h4>BTC/USD: ${this.state.priceData}</h4>
             <p id='coinbase'>Powered by Coinbase</p>
           </div>
           <BuyForm priceData={this.state.priceData} />
         </div>
      );
   }
}

export default App;