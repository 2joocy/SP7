import React, { Component } from 'react'
import { observer } from "mobx-react";
import footBallStore from "../stores/footballStore"

const UserPage = observer(
  class UserPage extends Component {

    componentWillMount() {
      /*
     This will fetch data each time you navigate to this route
     Move to constructor, if only required once, or add "logic" to determine when data should be "refetched"
     */
     footBallStore.getData();
     console.log(footBallStore.getData());
    }



    render() {
      return (
        <div>
          <h2>Users</h2>
          <p>This message is fetched from the server if you are properly logged in</p>
          <div className="msgFromServer">

          </div>
          <h4 style={{ color: "red" }}>{footBallStore.errorMessage}</h4>
        </div>
      )
    }

  }
)
export default UserPage;
