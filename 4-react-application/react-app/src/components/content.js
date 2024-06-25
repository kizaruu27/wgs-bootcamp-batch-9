import React, {Component} from "react";

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
                this.setState({time: new Date()});
            }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }


    render() {
        return (
            <>
                <div className='content'>
                    <h1 className="h3 mt-3">{this.state.time.toLocaleTimeString()}</h1>
                </div>
            </>
        )
    }
}