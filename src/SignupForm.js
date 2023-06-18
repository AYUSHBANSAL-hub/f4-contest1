import React, { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState("");
  const [success, setsuccess] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // setsubmitedonce(true);
    console.log("handle submit function called");
    console.log(email,password,confirmpassword,username);
    const newErrors={};
    if(email.trim()==''){
        newErrors.email="Email cannot be Empty";
    }
    // newErrors={
    //     email:"Email cannot be Empty",
    //     username:"Name cannot be Empty",
    //     password: "Password cannot be Empty",
    //     confirmpassword:'passwords does not match'
    // }
    if(username.trim()==''){
        newErrors.username="Name cannot be Empty";
    }
    if(password.trim()==''){
        newErrors.password="Password cannot be Empty";
    }
    if(confirmpassword!=password){
        newErrors.confirmpassword='passwords does not match';
    }
    if(Object.keys(newErrors).length===0){
        setsuccess("successfully Added");
    }else{
        setsuccess('')
    }
    setErrors(newErrors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
            <label>Name:</label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
            <label>Confirm Password:</label>
            <input type="password" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}/>
            {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
        </div>
        <button type="submit">Sign Up</button>
        {success&& <p>{success}</p>}
      </form>
    </div>
  );
};

export default SignupForm;
