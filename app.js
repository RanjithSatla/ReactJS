import React from "react";
import ReactDOM from "react-dom";

//React.createElement => JS Object => root.render => HTMLElement.

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React using React.createElement"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

////////////////////////  ******** ////////////////////////

//Creating React element using JSX.

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

//jsxHeading -> Babel(transpiles) => React.createElement => JS Obj => HTMLElement(render)

// root.render(heading);
root.render(jsxHeading);

////////////////////////  ******** ////////////////////////

// Functional Component : A Functional component is a normal JS function which returns a JSX Element i.e React Element.

const TutorName = () => <h1> By Ranjith Satla</h1>;

const ReactTopic = () => {
  return (
    <div className="container">
      <h1 id="heading"> Topic on React Functional Component </h1>
      {/* Component Composition : Composing One Component in another Component */}
      <TutorName />
    </div>
  );
};

root.render(<ReactTopic />);
