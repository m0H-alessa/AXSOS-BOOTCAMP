import React , {Component} from "react";


//Class components
 class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
    };
  }
  
  eventHandler = () => {
    const age = this.state.age;
    this.setState({ age: age + 1 });
  };

  


  render() {
    const { firstName, lastName, hairColor } = this.props;
    return (
      <div className="box">
        <h2>
          {lastName}, {firstName}
        </h2>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor}</p>
        <button className="btn" onClick={this.eventHandler} >
          Birthday button for {firstName} {lastName}
        </button>
        
        
      </div>
    );
  }
} 

export default PersonCard;