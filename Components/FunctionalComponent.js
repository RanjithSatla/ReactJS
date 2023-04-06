import React from "react";
import ReactDOM from "react-dom";

//Creating React element using JSX.

const element = <h1>This is the element</h1>;

// Functional Component : A Functional component is a normal JS function which returns a JSX Element i.e React Element.

const ChildComponent = () => {
  return <h1>This is a ChildComponent</h1>;
};

const FunctionalComponent = () => {
  return (
    <div className="Container">
      <h1>This is a Functional Component</h1>
      {/* Component Compostion : Composing a component in an another component */}
      <ChildComponent />
      {/* Nesting an React Element in a Functional component */}
      {element}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//Render Component
root.render(<FunctionalComponent />);
