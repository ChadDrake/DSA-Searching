import "./App.css";
import React, { Component } from "react";
import helpers from "./helpers";

export default class App extends Component {
  state = {
    display: null,
    data: [
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
      25,
      24,
      53,
      55,
      78,
      50,
      13,
      40,
      48,
      32,
      26,
      2,
      14,
      33,
      45,
      72,
      56,
      44,
      21,
      88,
      27,
      68,
      15,
      62,
      93,
      98,
      73,
      28,
      16,
      46,
      87,
      28,
      65,
      38,
      67,
      16,
      85,
      63,
      23,
      69,
      64,
      91,
      9,
      70,
      81,
      27,
      97,
      82,
      6,
      88,
      3,
      7,
      46,
      13,
      11,
      64,
      76,
      31,
      26,
      38,
      28,
      13,
      17,
      69,
      90,
      1,
      6,
      7,
      64,
      43,
      9,
      73,
      80,
      98,
      46,
      27,
      22,
      87,
      49,
      83,
      6,
      39,
      42,
      51,
      54,
      84,
      34,
      53,
      78,
      40,
      14,
      5,
    ],
  };
  countToFindLinear = (value) => {
    let data = this.state.data;
    value = parseInt(value);
    this.setState({ display: `${data.length}, not found` });
    for (let i = 0; i < data.length; i++) {
      if (data[i] === value) {
        return this.setState({ display: i + 1 });
      }
    }
  };
  countToFindBinary = (value) => {
    let data = this.state.data.sort();
    let count = null;
    value = parseInt(value);
    count = helpers.binarySearch(data, value, 0);
    this.setState({ display: count });

    console.log(count);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ display: null });
    const { searchTerm } = e.target;
    this.countToFindBinary(searchTerm.value);
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="searchTerm">Search</label>
          <input type="text" id="searchTerm" name="searchTerm" /> <br />
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.display}</p>
      </div>
    );
  }
}
