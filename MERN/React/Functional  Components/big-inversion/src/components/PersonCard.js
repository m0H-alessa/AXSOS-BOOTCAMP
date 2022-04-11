import React , {Component} from "react";


//Functional Component
 const PersonCard = (props) =>  {
    return (
      <div className="box">
        <h2>
          {props.lastName}, {props.firstName}
        </h2>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
      </div>
    );
  }

export default PersonCard;