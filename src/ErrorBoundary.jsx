import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state to indicate an error has occurred
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Log error information if needed
        console.error('ErrorBoundary caught an error:', error, info);
    }

    render() {
        if (this.state.hasError) {
            // Display fallback UI
            return <h1>Something went wrong. Please try again later.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
