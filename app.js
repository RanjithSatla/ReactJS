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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//render is response to take the above react element which is a JS obj and creates an h1 tag and places into root.
