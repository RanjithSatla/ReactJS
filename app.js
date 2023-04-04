import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement(
  "h1",
  { id: "abc" },
  "Hello world from React "
);
console.log(heading); //Object

/**
 Heading is an JS Object not an h1 tag : 
 {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null,props: {id: 'abc', children: 'Hello world from React '}, …}
Object
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Iam an h1 tag"),
    React.createElement("h2", {}, "Iam an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam an h1 tag"),
    React.createElement("h2", {}, "Iam an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//render is response to take the above react element which is a JS obj and creates an h1 tag and places into root.
