import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar
          sortByStockName={this.props.sortByStockName}
          sortName={this.props.sortName}
          sortByName={this.props.sortByName}
          sortPrice={this.props.sortPrice}
          sortByPrice={this.props.sortByPrice}
          handleFilter={this.props.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer
                handleStock={this.props.handleStock}
                stocks={this.props.filterStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer
                handleStock={this.props.handleStock}
                stocks={this.props.stocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
