import React from "react";
import "./cell.css";

type Props = {
  letter: string;
};

function Cell(props: Props) {
  const { letter } = props;
  return <div className="cell">{letter}</div>;
}

export default Cell;
