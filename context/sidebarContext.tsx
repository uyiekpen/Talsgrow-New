"use client"
import { createContext, useReducer, ReactNode } from "react";
import reducer from "../reducer/sidebarReducer";

interface State {
  isSidebarOpen: boolean;
}

interface SidebarContextType extends State {
  toggleSidebar: () => void;
}

const initialState: State = {
  isSidebarOpen: false,
};

export const SidebarContext = createContext<SidebarContextType>({
  ...initialState,
  toggleSidebar: () => {},
});

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <SidebarContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
