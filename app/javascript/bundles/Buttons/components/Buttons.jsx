import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

export default class Buttons extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired, // this is passed from the Rails view
    };

    /**
     * @param props - Comes from your rails view.
     */
    constructor(props) {
        super(props);

        // How to set initial state in ES6 class syntax
        // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
        this.state = { name: this.props.name };
    }

    updateName = (name) => {
        this.setState({ name });
    };

    clicked = () => {
        console.log('Clicked!');
    };

    render() {
        return (
            <div>
                <h3>Hello, {this.state.name}!</h3>
                <hr />
                <form >
                    <label htmlFor="name">
                        Say hello to:
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={this.state.name}
                        onChange={(e) => this.updateName(e.target.value)}
                    />
                </form>
                <hr />
                <Button onClick={this.clicked} bsStyle="success">Click Me!</Button>
            </div>
        );
    }
}
