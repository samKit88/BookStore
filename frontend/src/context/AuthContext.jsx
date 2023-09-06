import {createContext, useReducer} from 'react'

// cereate context 
export const AuthContext = createContext();

// Reducer function 
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null } 
        default:
            return state   
    };
};



export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { 
        //initial state
        user: null
});

    // return context component
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    );
};