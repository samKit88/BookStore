import { createContext, useReducer } from "react";

// create book context 
export const BookContext = createContext();

// Book reducer function 
export const bookReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BOOK':
            return {
                books: action.payload
            }
        case 'CREATE_BOOK': 
            return {
                books: [action.payload, ...state.books]
            }
        case 'DELETE_BOOK': 
            return {
                books: state.workouts.filter((b) => b._id !== action.payload._id)
            }
        default: 
            return state
    };
}; 


export const BookContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(bookReducer, {
        books: [
        ]
    });

    return (
        <BookContext.Provider value={{...state, dispatch }}>
            { children }
        </BookContext.Provider>
    );
};