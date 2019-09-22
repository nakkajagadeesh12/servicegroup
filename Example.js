import React, { Component } from 'react';

export default class SelectBox extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            allChecked: false,
            checkedCount: 0,
            options: [
                { value: 'selectAll', text: 'Select All' },
                { value: 'orange', text: 'Orange' },
                { value: 'apple', text: 'Apple' },
                { value: 'grape', text: 'Grape' }
            ]
        };
    }

    handleClick(e) {
        let clickedValue = e.target.value;

        if (clickedValue === 'selectAll' && React.findDOMNode(this.refs.selectAll).checked) {
            for (let i = 1; i < this.state.options.length; i++) {
                let value = this.state.options[i].value;
                React.findDOMNode(this.refs[value]).checked = true;
            }
            this.setState({
                checkedCount: this.state.options.length - 1
            });

        } else if (clickedValue === 'selectAll' && !React.findDOMNode(this.refs.selectAll).checked) {
            for (let i = 1; i < this.state.options.length; i++) {
                let value = this.state.options[i].value;
                React.findDOMNode(this.refs[value]).checked = false;
            }
            this.setState({
                checkedCount: 0
            });
        }

        if (clickedValue !== 'selectAll' && React.findDOMNode(this.refs[clickedValue]).checked) {
            this.setState({
                checkedCount: this.state.checkedCount + 1
            });
        } else if (clickedValue !== 'selectAll' && !React.findDOMNode(this.refs[clickedValue]).checked) {
            this.setState({
                checkedCount: this.state.checkedCount - 1
            });
        }
    }

    render() {
        console.log('Selected boxes: ', this.state.checkedCount);

        const options = this.state.options.map(option => {
            return (
                <input onClick={this.handleClick} type='checkbox' name={option.value} key={option.value}
                    value={option.value} ref={option.value} > {option.text} </input>
            );
        });
        return (
            <div className='SelectBox'>
                <form>
                    {options}
                </form>
            </div>
        );
    }
}