import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterActions';


const Counter = ({ value, increment, decrement, reset }) => (
    <div style={{ textAlign: 'center', padding: 16 }} >
        <h1>{ value }</h1>
        <br />
        <button onClick={() => increment(10)}>Increment</button>
        <button onClick={() => decrement(15)}>Decrement</button>
        <button onClick={reset} >Reset</button>
    </div>
);

const mapStateToProps = (state) => ({
    value: state
});

// const mapDispatchToProps = dispatch => ({
//     increment: value => dispatch(counterActions.increment(value)),
//     decrement: (value) => dispatch(counterActions.decrement(value)),
//     reset: () => dispatch(counterActions.reset()),
// });

// тот же MDTP только более простой

const mapDispatchToProps = { increment, decrement, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);