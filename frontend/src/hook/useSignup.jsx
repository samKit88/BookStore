import { useState } from "react";
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [error, setError] = useState('');
    const [isLoding, setIsLoding] = useState('');
    const { dispatch } = useAuthContext(); 

    const signup = async (firstName, lastName, email, password) => {
        setIsLoding(true)
        setError(false) 
       
        const response = await fetch('http://localhost:4000/api/v1/signup', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({firstName, lastName, email, password})
        }); 

        
        const json = await response.json();

        if(!response.ok){
            setIsLoding(false);
            setError(json.error);
        };

        if(response.ok){
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json));

            // update the auth context
            dispatch({type: 'LOGIN', payload: json});
            
            setIsLoding(false);
        }
    };

    return { signup, isLoding, error};
};