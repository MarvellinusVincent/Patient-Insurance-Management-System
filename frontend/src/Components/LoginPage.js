import { Link } from "react-router-dom";
import { useState } from "react";
const LoginPage = () => {
    const [username,setUsename]=useState('');
    const [password,setPassword]=useState('');
    return ( 
        
        <div className="login-page">
            <div className="content">
            <h2>Sign in</h2>
            <form >
                <input 
                type="text" 
                placeholder="Username" 
                required
                value={username}
                onChange={(e)=>setUsename(e.target.value)} />
                
                <input 
                type="password" 
                placeholder="Password" 
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                <button>Login</button>
            </form>
            <Link to='/forgot-password'>Forget Pasword?</Link>
            <footer>
            
                <p>Don't have an account?
                    <Link to='/registerationpage'>
                        Sign up
                    </Link>
                </p>
            </footer>
            </div>
        </div>
     );
}
 
export default LoginPage;