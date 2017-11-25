import React from 'react'
import { Component } from "react";

class ErrorBoundary extends Component {

	constructor( props ) {
		super( props );
		this.state = { hasError: false };
	}

	componentDidCatch( error, info ) {
		// Display fallback UI
		this.setState( {
			hasError: true,
			error: error,
			info: info
		} );
	}

	render() {

		if ( this.state.hasError ) {
			// You can render any custom fallback UI
			return (
				<div id="dev-error-boundary">
					<div className="container">
						<h1>Runtime Error</h1>
						<div className="well">
							<h4>Error Message</h4>
							{ this.state.error.message }
						</div>
						<div className="well">
							<h4>Error Stack</h4>
							{ this.state.error.stack }
						</div>
						<div className="well">
							<h4>Component Stack</h4>
							<div className="post-content" dangerouslySetInnerHTML={ { __html: this.state.info.componentStack } }></div>
						</div>
					</div>
				</div>
			)
		}
		return this.props.children;
	}
}

export default ErrorBoundary;