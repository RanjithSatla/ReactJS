const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World form React!"
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading); // Heading is a React Element which is an JS Object.

/* OP :
{
    $$typeof: Symbol(react.element),
    type: 'h1',
    key: null,
    ref: null,
    props: {
        …},
    …
}
$$typeof
    :
    Symbol(react.element)
key
    :
    null
props
    : {
        id: 'heading',
        children: 'Hello World form React!'
    }
ref
    :
    null
type
    :
    "h1"
_owner
    :
    null
_store
    : {
        validated: false
    }
_self
    :
    null
_source
    :
    null[[Prototype]]:
    Object
*/

// root.render(heading); // render method takes this JS object and does the Job of inserting in root in DOM.

// Nested Elements :

/**
 * <div id="parent">
 *    <div id="children1">
 *        <h1>I'm an h1 tag</h1>
 *        <h2>I'm an h1 tag</h2>
 *    </div>
 * <div id="children2">
 *        <h1>I'm an h1 tag</h1>
 *        <h2>I'm an h1 tag</h2>
 *    </div>
 * </div>
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm and h2 tag"),
  ]),
  React.createElement("div", { id: "children2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm and h2 tag"),
  ]),
]);

// Components : Class based and Function based.

// Functional Components : Normal JS functions which return some peice of JSX of React Element.

const name = "Ranjith";

const element = <span>This is react element</span>;

// Any JS expression can be written with in {}. EX : {2+2}, Can be used to next React Element.
const ExampleComponent = () => {
  const name = "Ranjith";
  return (
    <>
      <h1>
        My name is {name}. And I am {20 + 7}
      </h1>
      <h2>{element}</h2>
    </>
  );
};

// Component Composition : Nesting a component in another component.
// As FC is normal JS {ExampleComponent()} works

const ExampleComponent2 = () => {
  return (
    <>
      <ExampleComponent />
      <h1>Example2</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//Render a Component Syntax : <ComponentName />
root.render(<ExampleComponent2 />);
