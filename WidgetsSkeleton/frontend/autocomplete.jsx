import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


export default class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: ''};

        this.handleInput = this.handleInput.bind(this);
        this.selectName = this.selectName.bind(this);
    }

    handleInput(event) {
        this.setState({inputValue: event.currentTarget.value});
    }

    matches() {
        const matches = [];
        if (this.state.inputValue.length === 0) {
            return this.props.names;
        }

        this.props.names.forEach(name => {
            const sub = name.slice(0, this.state.inputValue.length);
            if (sub.toLowerCase() === this.state.inputValue.toLowerCase()) {
                matches.push(name);
            }
        });

        if (matches.length === 0) {
            matches.push('No matches');
        }

        return matches;
    }


    selectName(event) {
        const name = event.currentTarget.innerText;
        this.setState({inputValue: name});
    }

    render() {
        const results = this.matches().map((result, idx) => {
            return (
                <li key={idx} onClick={this.selectName}>{result}</li>
            );
        });

        return (
            <div>
                <h1>AutoComplete</h1>
                <div className="auto">
                    <input
                    onChange={this.handleInput}
                    value={this.state.inputValue}
                    placeholder='Search for...'/>

                    <ul>
                        <ReactCSSTransitionGroup
                            transitionName='auto'
                            transitionEnterTimeout={50000}
                            transitionLeaveTimeout={50000}>
                        {results}
                        </ReactCSSTransitionGroup>
                    </ul>
                </div>
            </div>
        );
    }
}