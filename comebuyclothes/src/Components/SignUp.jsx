import { useState } from "react"

function SignUp(){
    const [name, setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    function handleName(evt) {
        setName(evt.target.value)
        }
    
    function handleEmail(evt) {
    setEmail(evt.target.value)
    }
    
    function handlePassword(evt) {
        setPassword(evt.target.value)
        }

    function handleSubmit(evt) {
            evt.preventDefault(); // prevent the default form submission behavior
            // to remove console.log and to send the sign up information to backend using SignUp API
            console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
          }

    return(
        <form onSubmit={handleSubmit}> 
        SignUp
        <br></br>
        <input name='name' placeholder="your name" type='text' onChange={handleName}></input>
        <br></br>
        <input name='email' placeholder="email plox" type='email' onChange={handleEmail}></input>
        <br></br>
        <input name='password' placeholder="key your secret code" type='password' onChange={handlePassword}></input>
        <br></br>
        <button type="submit">sign up!</button>
        </form>
    )
}
export default SignUp