import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export const useBookContext = () => {
    const context = useContext(BookContext);

    if (!context) {
        throw Error('useWorkoutContext must be used inside an WorkoutContextProvide');
    }

    return context;
} 