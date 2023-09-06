import { useState } from "react";


export const  Login = () => {
    // Login state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email);
        console.log(password);
    }; 

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>

            <label>Email: </label>
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password: </label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button>Login</button> 
        </form>
    );
};