import React from "react";
import ReactDOM from "react-dom";
import Pet from "./pet"

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Fern",
      animal: "Cat",
      breed: "Tortishell",
    }),
    React.createElement(Pet, {
      name: "Clover",
      animal: "Cat",
      breed: "Dilute Calico",
    }),
    React.createElement(Pet, {
      name: "Shoko",
      animal: "Dog",
      breed: "Shokou Inu",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
