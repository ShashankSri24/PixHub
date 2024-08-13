import { useEffect, useState } from "react";
const Login = () =>{
    const [state,setState] = useState()
    const handleform = (e)=>{
        e.preventDefault();
        setState(e.target.value)
    }
    useEffect(()=>{
      handleform();
    },[])
  return(
    <div>
        <form>
            <input type="email" 
            placeholder="login here..."
            name="login"
            value={state}
            onChange={handleform}>
            
            </input>
        </form>
    </div>
  )
}
export default Login;