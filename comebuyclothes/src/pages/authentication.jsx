import SignIn from "../Components/SignIn"
import SignUp from "../Components/SignUp"

function Authentication(){
    return(
        <>
        Authentication contain

        <SignIn/>
        <button> button to change to sign up</button>
        <SignUp/>
        </>
    )
}
export default Authentication
//should have, 'sign in' component, 'sign up' component 