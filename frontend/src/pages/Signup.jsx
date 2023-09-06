import { useState } from 'react'

export const Signup = () => {
    // Signup state
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(firstName);
        console.log(lastName);
        console.log(password);
        console.log(email);

    };   
    return(
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>

            <label>First Name: </label>
            <input 
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName} 
            />

            <label>Last Name: </label>
            <input 
                type="text" 
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />

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

            <button> Signup </button>

        </form>
    );
};