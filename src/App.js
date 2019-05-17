import React, { Component } from 'react';
import MeteoriteList from  './components/MeteoriteList';
import Search from './components/Search';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      meteoriteData: [],
      filterText:''
    };
    this.filterData = this.filterData.bind(this);
  }
  async componentDidMount() {
    const response = await fetch('https://data.nasa.gov/resource/gh4g-9sfh.json');
    const json = await response.json();
    this.setState({meteoriteData : json}, () => {
      console.table(this.state);
    });
    
  }
  filterData = (e) => {
    this.setState({
      filterText: e.target.value
    })
  }
  render() {
    const {meteoriteData, filterText} = this.state;
    const filteredData = meteoriteData.filter( meteorite => {
      return meteorite.name.toLowerCase().includes(filterText.toLowerCase());
    })
    return (
      <div>
        <Search value={this.state.filterText} onChange={this.filterData}/>
        <MeteoriteList meteorites={filteredData}/>
      </div>
    )
  }
}

