import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SettingsBarContext = ({ children }) => {
//   const [showSidebar, setShowSidebar] = useState(false);

  return (
    <SidebarContext.Provider>
      {children}
    </SidebarContext.Provider>
  );
};

export default SettingsBarContext;
