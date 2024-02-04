import React from "react";
import {
  FiArrowDown,
  FiArrowUp,
  FiPlus,
  FiDelete,
  FiArrowLeft,
} from "react-icons/fi";

const iconsFamilies = {
  featherIcons: {
    FiArrowDown,
    FiArrowUp,
    FiPlus,
    FiDelete,
    FiArrowLeft,
  },
};

const Icon = ({ family = "featherIcons", name, ...rest }) => {
  return React.createElement(iconsFamilies[family][name], { ...rest });
};

export default Icon;
