import React from "react";
import ReactDOM from "react-dom";
import Pet from "./pet"

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Fern",
//       animal: "Cat",
//       breed: "Tortishell",
//     }),
//     React.createElement(Pet, {
//       name: "Clover",
//       animal: "Cat",
//       breed: "Dilute Calico",
//     }),
//     React.createElement(Pet, {
//       name: "Shoko",
//       animal: "Dog",
//       breed: "Shokou Inu",
//     }),
//   ]);
// };

const App = () => {
  return (
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Fern" animal="Cat" breed="Tortishell" />
    <Pet name="Clover" animal="Cat" breed="Dilute Calico" />
    <Pet name="Shoko" animal="Dog" breed="Shikoku Inu" />
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
