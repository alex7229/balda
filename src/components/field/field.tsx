import React from "react";
import Cell from "../cell/cell";
import "./field.css";

type Props = {
  field: string[][];
};

function Field(props: Props) {
  const { field } = props;

  return (
    <div className="field">
      {field.map((row) => {
        return (
          <div className="row">
            {row.map((cell) => {
              return <Cell letter={cell} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Field;
