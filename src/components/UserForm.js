import React from "react";
import {Form,} from "semantic-ui-react";
import {UserConsumer,} from "../providers/UserProvider";

class UserForm extends React.Component{
  state ={ 
    email: this.props.email, 
    firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    avatar: this.props.avatar,
  }

  handleChange =(e, {name,value}) => this.setState({[name]:value,})

  handleSubmit =(e)=> {
    e.preventDefault();
  }

  render(){
    const {email,firstName,lastName,avatar} = this.state
    return (
  
      < Form onSubmit ={this.handleSubmit}>
      < Form.Input
        label="email"
        type ="text"
        name = "email"
        value ={email}
        onChange ={this.handleChange}
        />
        <Form.Input
          label ="firstName"
          type = "text"
          name = "firstName"
          value = {firstName}
          onChange ={ this.handleChange}
        />
        <Form.Input 
          label ="lastName"
          type ="text"
          name ="lastName"
          value = {lastName}
          onChange ={this.handleChange}
          />
        <Form.Select
          label = "avatar"
          name = "avatar"
          value ={avatar}
          onChange ={this.handleChange}
          options = {avatarOptions}
          />
          <Form.Button color ="blue">Save</Form.Button>
          </ Form>
    )
  }
}
    const ConnectedUserForm =(props) => {
      return (
        <UserConsumer>
        { value => (
          <UserForm 
            { ...props }
            email={value.email}
            firstName={value.firstName}
            lastName={value.lastName}
            avatar ={value.avatar}
            updateUser ={value.updateUser}
          />
        )}
      </UserConsumer>
      )
  }
  


const avatarOptions = [
  {key :"b",text: "Apple",value: "Apple",},
  {key :"s",text: "Banana",value:"Banana",},
  {key :"g",text:"Orange", value:"Orange",},

]

export default ConnectedUserForm;