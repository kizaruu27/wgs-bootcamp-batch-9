import React, {Component} from "react";

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    tick() {
        this.setState({time: new Date()});
    }

    componentDidMount() {
        this.timer = setInterval(() => {
                this.tick();
            }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }


    render() {
        const {time} = this.state;
        return (
            <>
                <div className='content'>
                    <h1 className="h3 mt-3">{time.toLocaleTimeString()}</h1>
                </div>
            </>
        )
    }
}