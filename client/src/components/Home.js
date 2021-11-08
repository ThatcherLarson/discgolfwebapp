import React from "react";
import { Discs } from "../features/discs/Discs";
import Sidebar from "../components/Sidebar";

class Home extends React.Component {
  render() {
    //TODO: add navigation bar
    return (
      <div>
        <div class="container-fluid no-padding">
          <div class="row">
            <div class="col-3">
              <Sidebar />
            </div>
            <div class="col-9">
              <Discs />
            </div>
          </div>
        </div>
        <p class="pt-5 text-center">Updates coming soon...</p>
      </div>
    );
  }
}

export default Home;
