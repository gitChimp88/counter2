import React from 'react';



export default class App extends React.Component {
	
	constructor(){
		super();
		this.state = {
			counter: 0,
			
		}
	}
	
	handleClick(){
		var counter = this.state.counter
		this.setState({counter: counter + 1})
		if(counter == 9) {
			this.setState({counter: 0})
		}
	}
	
  render() {
    return (
		<div>
			<h1>{this.state.counter}</h1>
			<button onClick={this.handleClick.bind(this)}>click!</button>
		</div>
    );
  }
}

/*create a counter that once its after 10 it will reset to 0. so it will only display numbers from 0 to 9...*/
