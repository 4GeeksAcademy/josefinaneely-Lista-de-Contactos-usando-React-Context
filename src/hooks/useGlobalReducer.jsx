import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(storeReducer, initialStore());
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}

// Custom hook para acceder al estado global y las acciones
export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext);



    return {
dispatch,store

    };
}
