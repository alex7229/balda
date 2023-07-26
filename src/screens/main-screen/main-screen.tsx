import React from "react";
import Field from "../../components/field/field";
import "./main-screen.css";

const generateField = (startWord: string): Array<Array<string>> => {
  return Array(startWord.length)
    .fill(0)
    .map((_val, index) => {
      if (index === Math.floor(startWord.length / 2)) {
        return startWord.split("");
      }
      return Array(startWord.length)
        .fill(0)
        .map(() => "");
    });
};

function MainScreen() {
  const field = generateField("косынка");

  console.log(field);

  return (
    <div className="main-screen">
      <Field field={field} />
      <div className="bottom-menu"></div>
    </div>
  );
}

export default MainScreen;
