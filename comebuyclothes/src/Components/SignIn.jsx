import { useState } from "react";
import {login} from '../Utilities/users-service'

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
    evt.preventDefault(); // prevent the default form submission behavior
    // to remove console.log and to send the sign in information to backend using API (and verify, backend will do verification)
    console.log(`Email: ${email}, Password: ${password}`);
    const payload = {
        email: email,
        password: password
    }

    try{
        const user = await login(payload)
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
