import React, {userContext,} from "react";
import {Card,} from "semantic-ui-react";
import {UserContext,} from "../providers/UserProvider"

const User =()=>{
  const user = userContext(UserContext);

  return (
   
  <Card>
    <Card.Content>
      <Card.Header>{user.firstName}</Card.Header>
      <Card.Meta>
        Date Joined: {user.dateJoined}
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>User Avatar:{user.avatar}</p>
    </Card.Content>
  </Card>
  
  
  );
};

export default User;

