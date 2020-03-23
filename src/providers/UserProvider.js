import React from "react";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state ={
    email:"Fooman66@gmail.com",
    firstName:"Foo66",
    lastName:"lastFoo66",
    avatar :"Apple",
    dateJoined:"12/18/2019",
  }

  render(){
    return (
      <UserContext.Provider value={this.state}>
      {this.props.children}
      </UserContext.Provider>
    )
  }

}

export default UserProvider;