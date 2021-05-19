import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: "Ooops! something went wrong"
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log("Ooops something went wrong ! " + error);
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <div className="error-boundary">

                    </div>
                </>
            )
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;