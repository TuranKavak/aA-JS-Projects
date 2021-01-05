import { uniqueId } from '../../util/id_generator'
import React from 'react';

class StepForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false,
            todo_id: this.props.todo_id
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const step = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveStep(step);
        this.setState({
            title: "",
            body: ""
        });
    }

    render() {
        return (
            <form className="step-form" onSubmit={this.handleSubmit}>
                <label><strong>Title:</strong>
                    <input
                        className="input"
                        ref="title"
                        value={this.state.title}
                        placeholder="wear a mask"
                        onChange={this.update('title')}
                        required />
                </label>
                <br />
                <br />
                <label> <strong>Body:</strong>
                    <textarea
                        className="input"
                        ref="body"
                        cols='40'
                        value={this.state.body}
                        rows='6'
                        placeholder="before entering the store"
                        onChange={this.update('body')}
                        required></textarea>
                </label>
                <button className="create-button">Create Step!</button>
            </form>
        );
    }
};

export default StepForm;
