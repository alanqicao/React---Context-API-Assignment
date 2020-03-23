import React from "react";
import {Card,} from "semantic-ui-react";

const User =()=>(
  <Card>
    <Card.Content>
      <Card.Header>User</Card.Header>
      <Card.Meta>
        Date Joined: dateJoined
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>User Avatar:menmbershipLevel </p>
    </Card.Content>
  </Card>
)

export default User;

