import React from 'react';

const StepChanger = ({ onUpdateStep, counterState }) => (
    <div>
        <b>Current step: {counterState} </b>
    <button onClick={onUpdateStep} > Update step </button>
    </div>
);

export default StepChanger;