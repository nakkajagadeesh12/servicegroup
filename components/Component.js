import React from 'react';


class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>count {this.state.count}</button>
            </div>
        )
    }
}

export default Component;