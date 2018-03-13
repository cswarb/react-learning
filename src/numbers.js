import React, { Component } from 'react';

export class Numbers extends Component {  
  numberList = [1, 2, 3];
  constructor(props) {
    console.log(props);
    super(props);
  }

  componentDidMount() {
  }

  render() {
    this.numberList = this.numberList.map((number) =>
      <li key={number.toString()}>{number}</li>
    );

    return (
      <div>
          <h2>{this.numberList}</h2>
      </div>
    );
  }
}