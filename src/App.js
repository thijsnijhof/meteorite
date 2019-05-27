import React, { Component } from "react";
import MeteoriteList from "./components/MeteoriteList";
import "./App.css";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteoriteData: [],
      filterText: "",
      pageNum: 0,
      resultsLimit: 30,
      offsetPage: 0,
      isLoading: true,
      displayError: false,
      errorMessage: "",
      charError:false
    };
    this.searchQuery = this.searchQuery.bind(this);
    this.handlePaging = this.handlePaging.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  async componentDidMount() {
    const { resultsLimit, offsetPage } = this.state;
    try {
      const response = await fetch(
        `https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=${resultsLimit}&$offset=${offsetPage}`
      );
      const json = await response.json();
      this.setState({ meteoriteData: json }, () => {
        this.setState({ isLoading: false, offsetPage: 0 });
      });
    } catch (error) {
      this.setState({
        displayError: true,
        errorMessage: "Oops something went wrong!",
        isLoading: false
      });
    }
  }

  searchQuery = e => {
    // check query for special characters
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

    let checkChars = e.target.value.match(/[|\\/~^:,;?!&%$@*+]/);
    if(checkChars){
      this.setState({filterText:e.target.value,charError:'Please use only alphanumerical characters.',displayError:true,offsetPage:0})
    } else {
      this.setState({ filterText: e.target.value, errorMessage: "", displayError: false, charError: false,offsetPage: 0});
    }
  };

  handlePaging = e => {
    const { offsetPage,resultsLimit } = this.state;
    const num = e.target.id === "previous" ? offsetPage - 30 : offsetPage + 30;
    this.setState({ offsetPage: num, displayError:false, errorMessage:'', isLoading:true }, async () => {
      try {
        const response = await fetch(
          `https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=${resultsLimit}&$offset=${offsetPage}`
        );
        const json = await response.json();
        this.setState({ meteoriteData: json }, () => {
          this.setState({ isLoading: false });
        });
      } catch (error) {
        this.setState({
          displayError: true,
          errorMessage: "Oops something went wrong!",
          isLoading: false
        });
      }
    });
  };

  onSearch() {
    const { resultsLimit, offsetPage, filterText } = this.state;
    if (filterText === "") {
      this.setState({ isLoading: true }, async () => {
        try {
          const response = await fetch(
            `https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=${resultsLimit}&$offset=${offsetPage}`
          );
          const json = await response.json();
          this.setState({ meteoriteData: json }, () => {
            this.setState({ isLoading: false,filterText:'' });
          });
        } catch (error) {
          this.setState({
            displayError: true,
            errorMessage: "Oops something went wrong!",
            isLoading: false
          });
        }
      });
    } else {
      this.setState({ isLoading: true }, async () => {
        try {
          let lower = filterText.toLowerCase();
          // sql statement in url params according to docs https://dev.socrata.com/docs/queries/
          const response = await fetch(
            `https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=${resultsLimit}&$offset=${offsetPage}&$order=name%20ASC&$where=lower(name)%20like%20lower(%22%25${lower}%25%22)`
          );
          const json = await response.json();
          this.setState({ meteoriteData: json, isLoading: false });
        } catch (error) {
          this.setState({
            displayError: true,
            errorMessage: "Oops something went wrong!",
            isLoading: false
          });
        }
      });
    }
  }

  render() {
    const {meteoriteData,filterText,isLoading, errorMessage,displayError, offsetPage, charError } = this.state;
    return (
      <div>
        <Navbar value={filterText} onChange={this.searchQuery} onSearch={this.onSearch} displayError={displayError} charError={charError}/>
        {!isLoading ? (
          <MeteoriteList meteorites={meteoriteData} displayError={displayError} />
        ) : (
          <button className="button is-loading is-primary" style={{ width: "100%", height: "100vh", pointerEvents: "none" }}>
            Loading
          </button>
        )}
        {displayError && <h2 className="title">{errorMessage}</h2>}
        <Pagination offsetPage={offsetPage} onPaginate={this.handlePaging} meteorites={meteoriteData} />
      </div>
    );
  }
}
