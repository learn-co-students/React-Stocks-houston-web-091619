import React, { Component } from 'react';
import Stock from '../components/Stock'
// import PortfolioStock from '../component/PortfolioStock'

class PortfolioContainer extends Component {

  render() {
    let stockInPortfolio = []
    this.props.stocks.forEach(stock=>{
      if(stock.inPortfolio === true){
        let currentStock = stock
        stockInPortfolio.push(currentStock)
      }
    })
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            stockInPortfolio.map(stockData => <Stock stock={stockData}
              handleStock={this.props.handleStock}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
