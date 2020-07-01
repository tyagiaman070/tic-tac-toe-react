import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
const timecolor = "#25CCF7";
const circlecolor = "#45CE30";
const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icons" size="25px" color={circlecolor} />;
    case "cross":
      return <FaTimes className="icons" size="25px" color={timecolor} />;
    default:
      return <FaPen className="icons" color="#FFF222" />;
  }
};

export default Icon;
