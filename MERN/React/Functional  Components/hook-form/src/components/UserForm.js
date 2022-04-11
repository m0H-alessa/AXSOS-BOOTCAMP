import React, { useState } from "react";

const UserForm = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
    
};

return(
    <div className="box">
        <form onSubmit={createUser}>
            <div className="checkbox">
                <label>First name: </label>
                <input type="text" onChange={(e) => setFirstname(e.target.value)} />
            </div>
            <div className="checkbox">
                <label>Last name: </label>
                <input type="text" onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div className="checkbox">
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="checkbox">
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="checkbox">
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmpassword(e.target.value)} />
            </div>
            <input className="sub" type="submit" value="Create User" />
        </form>
        
            <div >
                <h4>Form Data:</h4>
                <p>First name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        
    </div>
  );
};

export default UserForm;