import React, { useState } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles({
  parkingProvidedWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2em"
  },
  label: {
    fontSize: "22px"
  },
  requiredInputLabel: {
    "&:after": {
      content: '" *"',
      color: "red"
    }
  },
  inputContainer: {
    width: "100%",
    textAlign: "center"
  },
  input: {
    padding: "8px 5em 8px 8px",
    textAlign: "right",
    margin: ".5em auto",
    height: 45,
    width: "50%"
  },
  unit: {
    position: "relative",
    marginLeft: "-3.5em"
  },
  error: {
    color: "red"
  }
});

const ParkingProvidedRuleInput = ({
  rule: { code, name, value, units, maxValue, validationErrors, required },
  onInputChange
}) => {
  const classes = useStyles();
  const requiredStyle = required && classes.requiredInputLabel;
  const [showValidationErrors, setShowValidationErrors] = useState(false);

  const handleChange = e => {
    setShowValidationErrors(true);
    onInputChange(e);
  };

  const onBlur = () => {
    setShowValidationErrors(true);
  };

  return (
    <div className={classes.parkingProvidedWrapper}>
      <label htmlFor={code} className={clsx(classes.label, requiredStyle)}>
        {name}
      </label>
      <div className={classes.inputContainer}>
        <input
          className={classes.input}
          autoFocus
          type="text"
          value={value || ""}
          onChange={handleChange}
          name={code}
          id={code}
          data-testid={code}
          max={maxValue}
          onBlur={onBlur}
        />
        <span className={clsx(classes.unit, classes.label)}>&nbsp;{units}</span>
      </div>

      {validationErrors && showValidationErrors ? (
        <div className={classes.error}>{validationErrors[0]}</div>
      ) : null}
    </div>
  );
};

ParkingProvidedRuleInput.propTypes = {
  rule: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    units: PropTypes.string,
    maxValue: PropTypes.number,
    validationErrors: PropTypes.array,
    required: PropTypes.bool.isRequired
  }),
  onInputChange: PropTypes.func.isRequired
};

export default ParkingProvidedRuleInput;
