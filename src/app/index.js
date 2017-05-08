import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

// Create component
class App extends React.Component {
  render() {
    var user = {
      name: "Anna",
      hobbies:["Sports","Movies","Basketball","Reading"]
    }
    return(
      <div>
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-offset-1">
              <Home name={"max"} age={27} user={user}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
