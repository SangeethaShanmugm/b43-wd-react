import { useContext } from "react";
import { NameContext } from "./Example";


export const useGlobalContext = () => {
    return useContext(NameContext);
};
