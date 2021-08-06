import React from "react";
import PropTypes from "prop-types";
import RuleInputList from "./RuleInputList";
import { getCalculationPanelIds, getPanelRules } from "../helpers";
import Panels from "../Common/Panels";

const RuleInputPanels = ({ rules, suppressHeader, onInputChange }) => {
  const panelIds = getCalculationPanelIds(rules);
  const panelsRules = getPanelRules(panelIds, rules);

  return (
    <React.Fragment>
      {panelsRules.map(pRules => (
        <Panels
          key={pRules[0].calculationPanelId}
          rules={pRules}
          suppressHeader={suppressHeader}
        >
          <RuleInputList
            key={pRules[0].calculationPanelId}
            rules={pRules}
            onInputChange={onInputChange}
          />
        </Panels>
      ))}
    </React.Fragment>
  );
};
RuleInputPanels.propTypes = {
  rules: PropTypes.array.isRequired,
  suppressHeader: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired
};

export default RuleInputPanels;
