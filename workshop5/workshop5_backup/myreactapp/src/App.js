import React, { Component } from 'react'; import $ from 'jquery';

class CommodityPage extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      commodities: [],
      filterText: '', 
      showOutOfStockCommodity: true,
      newCommodityName: '', 
      newCommodityCategory: '', 
      newCommodityStatus: ''
  };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this); 
    this.handleNameChange = this.handleNameChange.bind(this); 
    this.handleCategoryChange = this.handleCategoryChange.bind(this); 
    this.handleStatusChange = this.handleStatusChange.bind(this); 
  }

  handleFilterTextChange(filterText) { 
    this.setState({
      filterText: filterText
    });
  }

  handleNameChange(name) { 
    this.setState({
      newCommodityName: name
    })
  }
  handleCategoryChange(category) { 
    this.setState({
      newCommodityCategory: category
    })
  }
  handleStatusChange(status) { 
    this.setState({
      newCommodityStatus: status
    })
  }

  handleButtonClick() { this.setState({
    showOutOfStockCommodity: !this.state.showOutOfStockCommodity
    }) 
  }

  componentDidMount() { 
    this.loadCommodities();
  }

  loadCommodities() { 
    $.ajax({
      url: "http://localhost:3001/users/commodities", dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ commodities: data }); 
      }.bind(this),
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
    }); 
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange} 
        />

        <CommodityTable
          commodities={this.state.commodities} 
          filterText={this.state.filterText} 
          showOutOfStockCommodity={this.state.showOutOfStockCommodity}
        />

        <ShowHideButton 
          showOutOfStockCommodity={this.state.showOutOfStockCommodity} 
          onButtonClick={this.handleButtonClick}
        />

      </div> 
    );
  } 
}

export default CommodityPage;


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this); 
  }

  handleFilterTextChange(e) { 
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..." 
          value={this.props.filterText} 
          onChange={this.handleFilterTextChange}
        /> 
      </form>
    ); 
  }
}

class CommodityTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const showOutOfStockCommodity = this.props.showOutOfStockCommodity;

    var rows = this.props.commodities.map((commodity) => { 
      if (commodity.name.indexOf(filterText) === -1) {
        return null;
      }

      if (showOutOfStockCommodity || commodity.status === "in stock") { 
        return (
          <CommodityRow 
            commodity={commodity} 
            key={commodity.name}
          /> 
        );
      }
      return null;
    });

    return (
      <table>
        <thead> 
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );  
  }
}

class CommodityRow extends Component {
  render() {
    const commodity = this.props.commodity;
    return ( 
      <tr>
        <td>{commodity.name}</td> 
        <td>{commodity.category}</td> 
        <td>{commodity.status}</td>
      </tr> 
    );
  }
}

class ShowHideButton extends Component { 
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this); 
  }

  handleButtonClick() { 
    this.props.onButtonClick();
  }

  render() {
    return (
      <button onClick={this.handleButtonClick}> {this.props.showOutOfStockCommodity ? 'Hide Out-of-StockCommodity' : 'Show Out-of-Stock Commodity'} </button>
    ); 
  }

}