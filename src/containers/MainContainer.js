import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

 constructor(){
   super()
   this.state = {
     stocks: [],
     displayStocks: [],
     myStocks: []
   }
 }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => this.setState ({
      stocks: stocks,
      displayStocks: stocks 
    }))
  }

  addStock = (stock) => {
    this.setState({
      myStocks: [...this.state.myStocks, stock]
    })
  }

  removeStock = (stock) => {
    this.setState({
      myStocks: [...this.state.myStocks.filter(s => s !== stock)]
    })
  }

  filterStocks = (type) => {
    this.setState({
      displayStocks: this.state.stocks.filter(stock => stock.type === type)
    })
  }

  sortByName = () => {
    // debugger
    let stocks = this.state.displayStocks.sort((a,b) => a.name > b.name ? 1 : -1 )
    this.setState({
      displayStocks: stocks
    })
  }

  sortByPrice = () => {
    // debugger
    let stocks = this.state.displayStocks.sort((a,b) => a.price > b.price ? 1 : -1 )
    this.setState({
      displayStocks: stocks
    })
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} sortByName={this.sortByName} sortByPrice={this.sortByPrice}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} addStock={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.myStocks} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
