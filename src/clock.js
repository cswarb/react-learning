import React, { Component } from 'react';
import { SubClock } from "./subclock";

export class Clock extends Component {
  timerId = null;
  //constructor takes in any props passed in from elem attrs
  
  constructor(props) {
    console.log(props);
    //super with the props object
    super(props);

    //Bind event handler from child component to this
    this.eventHandler = this.eventHandler.bind(this);

    //Setup state object to react to changes
    this.state = {
      date: new Date(),
      propy: ""
    };
  }

  //Handler for when we recieve updates from child component
  eventHandler(data) {
    console.warn("received event from child - update state: ", data);
    this.setState({
      propy: data
    }); 
  }

  updateTime() {
      this.setState({
        date: new Date()
      });      
  }

  componentDidMount() {
    console.log("mounted");
    this.timerId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }
  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.timerId);
  }
  componentDidCatch() {
    console.log("catched");
  }
  componentDidUpdate() {
    console.log("updated");
  }
  render() {
    return (
      <div>
        {/*Pass function from parent to child so we can receive events*/}
        <SubClock oooooo={this.state.date} handler={this.eventHandler}></SubClock>
        <span>{this.state.propy}</span>
      </div>
    );
  }
}