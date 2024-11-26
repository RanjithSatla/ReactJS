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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
