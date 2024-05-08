import { useState } from "react"
import { userSignup } from "../Utilities/amalinacode"

function SignUp(props){
    const [name, setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = props
    
    function handleName(evt) {
        setName(evt.target.value)
        }
    
    function handleEmail(evt) {
    setEmail(evt.target.value)
    }
    
    function handlePassword(evt) {
        setPassword(evt.target.value)
        }

     async function handleSubmit(evt) {
            evt.preventDefault(); 
            const payload = {
                username: name,
            email: email,
        password: password,}
             try{
                const response = await userSignup(payload)
                const user = response.token
                setUser(user)
             }
             catch(error){  
            console.log(error)
             }
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