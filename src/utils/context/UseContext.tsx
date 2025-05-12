import { createContext, PropsWithChildren, useContext, useState } from "react";
import { contextValues } from "../interfaces/Context.Interfaces"
import { AppError } from "../customErrors/ClassCustomError";
import { UserAuth } from "../interfaces/User.interfaces";

const initialUserAuth: UserAuth = {
  email: "",
  password: "",
  nickname: ""
};


const UiContext = createContext<contextValues | null>(null);


export const contextApp = () => {
    const context = useContext(UiContext);
    if(context == null)
        throw new AppError(`você esta tentando consumir os dados do contexto,
        em um componente que não esta envolvido pelo provider`);
    
    return context;
}

export const UiContextProvider = ({children}:PropsWithChildren) => {
const [credencias, setCredencias] = useState<UserAuth>(initialUserAuth);

   return(
        <UiContext.Provider value={{credencias,setCredencias}}>
            {children}
        </UiContext.Provider>
   )
}