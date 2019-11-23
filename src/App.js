import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
const stockURL = "http://localhost:3000/stocks/"
class App extends Component {

  constructor(){
    super()
    this.state={
      stocks:[],
      displayStocks:[],
      filterStock:[],
      sortByName:false,
      sortByPrice:false,

    }
  }

  componentDidMount(){
    fetch(stockURL)
    .then(res=> res.json())
    .then(data => {
      data.map(stock => stock.inPortfolio = false)
      this.setState({
        stocks: data,
        displayStocks:data,
        filterStock:data
      })
    })
  }

  sortByStockName = (filter) =>{
    if(filter){
      let stockByName = []
      stockByName=[...this.state.displayStocks]
      stockByName.sort((a,b)=> a.name.localeCompare(b.name))
      this.setState({
        filterStock: stockByName
      })
    }else{
      this.setState({
        filterStock: this.state.displayStocks
      })
    }
  }

  sortName = () =>{
    this.setState({
      sortByName:!this.state.sortByName
    })
    this.sortByStockName(!this.state.sortByName)
  }

  sortByStockPrice = (filter) =>{
    if(filter){
      let stockByPrice = []
      stockByPrice=[...this.state.displayStocks]
      stockByPrice.sort((a,b)=> a.price - b.price)
      this.setState({
        filterStock: stockByPrice
      })
    }else{
      this.setState({
        filterStock: this.state.displayStocks
      })
    }
  }

  sortPrice = ()=>{
    this.setState({
      sortByPrice:!this.state.sortByPrice
    })
    this.sortByStockPrice(!this.state.sortByPrice)
  }

  handleFilter = (filter)=>{
    let filterType = []
    if(filter=== "Tech" || "Sportwear" || "Finance"){
      this.state.stocks.map(stock=>{
        if(stock.type === filter){
          filterType.push(stock)
        }
      })
      this.setState({
        filterStock: filterType
      })
    }else{
      this.setState({
        filterStock: this.state.stocks
      })
    }
  }

  handleStock = (currentStock)=>{
    this.state.displayStocks.map(stock=>{
      if(currentStock.id === stock.id){
        stock.inPortfolio = !currentStock.inPortfolio
      }
    })
    this.setState({
      displayStocks:this.state.displayStocks
    })
  }

  render() {
    return (
      <div>
        {console.log(this.state.displayStocks)}
        <Header/>
        <MainContainer
          stocks={this.state.displayStocks}
          filterStock={this.state.filterStock}
          handleStock={this.handleStock}
          sortByStockName={this.sortByStockName}
          sortByName={this.state.sortByName}
          sortName={this.sortName}
          sortPrice={this.sortPrice}
          sortByPrice={this.state.sortByPrice}
          handleFilter={this.handleFilter}/>
      </div>
    );
  }
}

export default App;
