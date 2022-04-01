import React, {ErrorInfo} from "react";

export class ErrorBoundary extends React.Component<{}, { hasError: boolean}> {
    constructor(props : any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error : any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}