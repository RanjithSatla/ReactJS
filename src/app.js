import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";

const AppLayOut = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayOut />);
