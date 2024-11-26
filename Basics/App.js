const heading =  React.createElement("h1",{id:"heading"},"Hello World form React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);  // Heading is a React Element which is an JS Object.

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

root.render(heading); // render method takes this JS object and does the Job of inserting in root in DOM.