import React, { Component } from 'react';
import MeteoriteList from  './components/MeteoriteList';
import './App.css';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      meteoriteData: [],
      filterText:'',
      pageNum:0,
      secondLastPage:0,
      resultsLimit:30,
      offsetPage:0,
      currentPage:0,

    };
    this.filterData = this.filterData.bind(this);
    this.handlePaging = this.handlePaging.bind(this);
    this.totalPageNum = this.totalPageNum.bind(this);
  }
  async componentDidMount() {
    const {resultsLimit,offsetPage} = this.state;
    const response = await fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=${resultsLimit}&$offset=${offsetPage}`);
    const json = await response.json();
    
    this.setState({meteoriteData : json}, () => {
        this.totalPageNum();
    });
  }

  totalPageNum(){
    const numberOfPages = Math.ceil(this.state.meteoriteData.length/15);
    const secondLast = numberOfPages -1 ;
    this.setState({pageNum:numberOfPages, secondLastPage:secondLast});
  }
   filterData = (e) => {
    const {resultsLimit,offsetPage} = this.state;
    this.setState({
      filterText: e.target.value
      }, async () => {
      let query = this.state.filterText;
      let lower = query.toLowerCase();
      // sql statement in url params according to docs https://dev.socrata.com/docs/queries/
      const response = await fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?$offset=${offsetPage}&$order=name%20ASC&$where=lower(name)%20like%20lower(%22%25${lower}%25%22)`);
      const json = await response.json();
      this.setState({meteoriteData: json}, () => {
        this.totalPageNum();
      })
    })
  }

  handlePaging = (e) => {

  }
  
  render() {
    const {meteoriteData, filterText, pageNum,secondLastPage} = this.state;
    return (
      <div>
        <Navbar value={filterText} onChange={this.filterData} />
        <MeteoriteList meteorites={meteoriteData}/>
        <Pagination lastPage={pageNum} secondLastPage={secondLastPage} />
      </div>
    )
  }
}

