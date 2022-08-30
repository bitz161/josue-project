import { createContext, useState } from "react";

export const SidebarContext = createContext({
  activateSidebar: false,
});

export const SidebarProvider = ({ children }) => {
  const [activateSidebar, setActivateSidebar] = useState(false);
  const value = { activateSidebar, setActivateSidebar };
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
