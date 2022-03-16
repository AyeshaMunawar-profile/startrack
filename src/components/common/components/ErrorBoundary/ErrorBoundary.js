import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Oops something went wrong ! " + error + errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="error-boundary">
            <h1 className="f2 text-white">Oops! something went wrong</h1>
          </div>
        </>
      );
    } else {
      return this.props?.children;
    }
  }
}

export default ErrorBoundary;
