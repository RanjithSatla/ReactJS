import React from "react";
import ReactDOM from "react-dom";

//React.createElement => JS Object => root.render => HTMLElement.

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React using React.createElement"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Creating React element using JSX.

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

//jsxHeading -> Babel(transpiles) => React.createElement => JS Obj => HTMLElement(render)

// root.render(heading);
root.render(jsxHeading);
