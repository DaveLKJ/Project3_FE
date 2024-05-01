import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault(); // prevent the default form submission behavior
    // to remove console.log and to send the sign in information to backend using API (and verify, backend will do verification)
    console.log(`Email: ${email}, Password: ${password}`);
 
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
