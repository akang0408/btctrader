import React from 'react';
import BuyForm from './BuyForm.jsx'
import BuyHistory from './BuyHistory.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceData: null,
      buy: [],
      buyData: [],
      bankroll: 100000,
      buyCount: 1,
    };
    this.addBuy = this.addBuy.bind(this)
    this.renderBuy = this.renderBuy.bind(this)
    this.storeBuy = this.storeBuy.bind(this)
    this.storeSell = this.storeSell.bind(this)
  }

  addBuy(e) {
    e.preventDefault();
    let buyCountCopy = this.state.buyCount
    let plusOne = this.state.buyCount + 1
    
    this.setState({
      buy: [e.target.value, this.state.priceData, buyCountCopy],
      buyCount: plusOne,
      // buyData: [...this.state.buyData, [e.target.value, this.props.priceData]]
    }, () => { console.log('hoi', this.state.buyCount )})
  }

  renderBuy() {
    // console.log(this.state)
    if (!this.state.buy.length) return 0;
    return Math.round(100 * (this.state.buy[0] * this.state.buy[1])) / 100
  }

  storeBuy() {
    // let first = this.state.buy[0]
    // let second = this.state.buy[1]
    // console.log('first', first)
    // console.log('second', second)
    let buyCopy = this.state.buy
    let bankrollCopy = this.state.bankroll
    let quantity = buyCopy[0]
    let price = buyCopy[1]
    let total = quantity * price
    let newBankroll = bankrollCopy - total
    this.setState({ buyData: [...this.state.buyData, buyCopy], bankroll: newBankroll}, () => {
      console.log('state after buy is stored', this.state)
    })
    document.getElementById('buyAmount').value = ""
  }

  storeSell(target) {
    let bankrollCopy = this.state.bankroll
    let buyDataCopy = this.state.buyData
    let sellCopy = [];
    for (let element of buyDataCopy) {
      if (element[2] === target) {
        sellCopy = element
      }
    }
    let index = buyDataCopy.indexOf(sellCopy)
    let newBuyData = buyDataCopy.splice(index, 1)
    let quantity = sellCopy[0]
    let price = sellCopy[1]
    let totalOld = quantity * price
    let totalNew = quantity * this.state.priceData
    let newBankroll = bankrollCopy + (totalOld)
    console.log('this is target', sellCopy)
    this.setState({ buyData: buyDataCopy, bankroll: newBankroll })
  }

  componentDidMount() {
    // const btcFetch = () => {
    //   fetch('./api')
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((data) => {
    //     this.setState({ priceData: data })
    //   })
    // }
    // btcFetch();

  //   let websocket = new WebSocket("wss://ws-feed.pro.coinbase.com")
  //   websocket.onopen = (e) => {
  //     alert("Connection to Coinbase WebSocket Established");
  //     alert("Sending to server");
  //     const subscription = JSON.stringify({
  //       type: 'subscribe',
  //       product_ids: [
  //         'BTC-USD',
  //       ],
  //       channels: [
  //         {
  //           name: 'ticker',
  //           product_ids: [
  //             'BTC-USD',
  //           ],
  //         },
  //       ],
  //     })
  //     websocket.send(subscription);
  //   };

  // websocket.onmessage = (event) => {
  //   let message = JSON.parse(event.data)
  //   let price = message.price
  //   console.log("Live Price", price)
  //   this.setState({ priceData: price }, () => {
  //     console.log('STATE after async setState', this.state)
  //   })
  // };
  // websocket.onerror = function(error) {
  //   console.log('WebSocket Error: ' + error);
  // };


  // this.setState({ priceData: message.price})

  }

   render() {
      let roundedBankroll = Math.round(100 * this.state.bankroll) / 100 
      return (
         <div>
           <div>
              <h4>Current Balance: ${roundedBankroll} </h4>
              <br/>
              Live Market Data
              <h4>BTC/USD: ${this.state.priceData}</h4>
             <p id='coinbase'>Powered by Coinbase</p>
              
           </div>
           <div>
           <BuyForm priceData={this.state.priceData} 
           addBuy={this.addBuy} 
           renderBuy={this.renderBuy}
           storeBuy={this.storeBuy}
           />
           </div>
           <div>
             <BuyHistory buyData={this.state.buyData} priceData={this.state.priceData} bankroll={this.state.bankroll} storeSell={this.storeSell}/>
           </div>
         </div>
      );
   }
}

export default App;