import React from "react";
import {Form,} from "semantic-ui-react";

class UserForm extends React.Component{
  state ={ email:"", firstName:"", lastName:"", avatar:"",}

  handleChange =(e, {name,value}) => this.setState({[name]:value,})

  handleSubmit =(e)=> {
    e.preventDefault();
  }

  render(){
    const {email,firstName,lastName,avatar,} = this.state;
  
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

const avatarOptions = [
  {key :"b",text: "Apple",value: "Apple",},
  {key :"s",text: "Banana",value:"Banana",},
  {key :"g",text:"Orange", value:"Orange",},

]

export default UserForm;