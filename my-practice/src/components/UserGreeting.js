import React, { Component } from "react";
//CONDITIONAL RENDERING 
class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
//Short circuit operator approach 
//when u want to render something or nothing 
return this.state.isLoggedIn && <div>Welcome Saad</div>
//if left side false , right will never render 


//---------------------------------------------//
    //   //3RD METHOD 
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Saad</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    // 2ND METHOD 
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Saad</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    //-------------------------//
    //FIRST METHOD
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Saad</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    //-------------------------------//
    // return (
    //     <div>
    //         <div>Welcome Saad</div>
    //         <div>Weclome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting;
