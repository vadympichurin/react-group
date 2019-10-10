import React from "react";
import { connect } from "react-redux";
import { changeStep } from "../redux/counterActions";

const StepSelector = ({ value, changeStep }) => (
  <div>
    <h3>Current step: {value} </h3>

    <select value={value} onChange={e => changeStep(Number(e.target.value))}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  </div>
);

const MSTP = state => ({
    value: state.step
});

const MDTP = { changeStep };

export default connect(
  MSTP,
  MDTP
)(StepSelector);
