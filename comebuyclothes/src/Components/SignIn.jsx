import { useState } from "react";
import { userLogin } from "../Utilities/amalinacode";


function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = props

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault(); 
    const userData = {
        email: email,
        password: password
    }

    try{
        const response = await userLogin(userData)
       const user = response.token
        setUser(user)
    }
    catch (error){
        console.log(error)
    }
 
  }

  return (
    <form onSubmit={handleSubmit}>
      SignIn
      <br></br>
      <input
        name="email"
        placeholder="email plox"
        type="email"
        onChange={handleEmail}
      ></input>
      <br></br>
      <input
        name="password"
        placeholder="secret code"
        type="password"
        onChange={handlePassword}
      ></input>
      <br></br>
      <button type="submit">sign in!</button>
    </form>
  );
}

export default SignIn;
