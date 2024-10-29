import React from "react";

class UserClass extends React.Component {
  // Constructor receive props from parent
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default Location",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  // First constructor , then render and then componentDidMount will be called
  // API CALL

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/akshaymarch7");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);    
  }

  componentDidUpdate() {
    // console.log("Component did update");
  }

  componentWillUnmount(){
    // console.log("Component will unmount"); 
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    // console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;






/*
  -----Mounting--------

  - Constructor (dummy)
  - Render(dummy)
      <HTML Dummy>
  - Component Did Mount
      <API Call>
      <this.setState -> State variable is updated

  --------Update-------------

  - render(Api data)
  - <HTML (new API data)
  - componentDid Update

*/