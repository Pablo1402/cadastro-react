import React, { createContext, useCallback, useContext,  useState } from "react";

interface IDrawerContextData {
    isDrawerOpen: boolean ;
    toggleDrawerOpen: () => void;
}

interface IAppDrawerProviderProps {
    children: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}


export const AppDrawerProvider: React.FC<IAppDrawerProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDraweropen => !oldDraweropen);
    }, []);

   
    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
                    {children}
        </DrawerContext.Provider>
    );
}