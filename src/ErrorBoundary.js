import React from 'react';


export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError: ", error);
    
    // this.setState({
    //   hasError: true,
    //   errorInfo: "there was an error"
    // });

    return { hasError: true, errorInfo: error.toString() };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);

    // this.setState({
    //   hasError: true,
    //   errorInfo: "there was an error"
    // });
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <h1>Something went wrong.</h1>
          {this.state.errorInfo}
        </React.Fragment>
      );
    };
    return this.props.children;
  }

}