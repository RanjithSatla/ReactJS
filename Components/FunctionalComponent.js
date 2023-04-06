import React from "react";
import ReactDOM from "react-dom";

//Creating React element using JSX.

const element = <h1>This is the element</h1>;

// Functional Component : A Functional component is a normal JS function which returns a JSX Element i.e React Element.

const FunctionalComponent = () => {
  return (
    <div className="Container">
      <h1>This is a Functional Component</h1>
      {/* Nesting an React Element in a Functional component */}
      {element}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//Render Component
root.render(<FunctionalComponent />);
