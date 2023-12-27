import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { increaseCounterAction } from './actions/counter';

class App extends React.Component {
    handleIncrease = event => {
        console.log('increase');
        this.props.onIncrease();
    }
    render() {
        const { counter } = this.props;
        return (
            <section>
                { counter }
                <button onClick={ this.handleIncrease }>
                    increase
                </button>
            </section>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        counter: state.counter,
    }
}

const mapActionToProps = {
    onIncrease: increaseCounterAction,
};

export default connect(mapStateToProps, mapActionToProps)(App);
