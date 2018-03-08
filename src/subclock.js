import React, { Component } from 'react';

export class SubClock extends Component {
  constructor(props) {
    console.log(props);
    //super with the props object
    super(props);
  }
  formatDate() {
      // this.setState({
      //   date: new Date()
      // });      
  }
  componentDidMount() {
    // this.formatDate();

    setTimeout(() => {
      this.props.handler("test");
    }, 5000)
  }
  render() {
    return (
      <div>
        <p>{this.props.oooooo.toLocaleTimeString()}</p>
      </div>
    );
  }
}