import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./searchparams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Fern" animal="Cat" breed="Tortishell" />
    <Pet name="Clover" animal="Cat" breed="Dilute Calico" />
    <Pet name="Shoko" animal="Dog" breed="Shikoku Inu" /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
