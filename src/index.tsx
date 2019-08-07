import { h, render, Component,  } from 'preact';

class Clock extends Component {
	interval = -1;
	constructor() {
		super();

		this.setState({time: new Date().toLocaleTimeString()});
	}

	componentWillMount() {
		this.interval = window.setInterval(() => this.setState({time: new Date().toLocaleTimeString()}), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render(props: any, state: any) {
		return <span>{ state.time }</span>;
	}
}

render(<Clock />, document.body);