import React, { createContext, useMemo, useState } from "react";

export const SideBarContext = createContext();

function DrawerContext({ children }) {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const toggleDrawer = () => setMobileDrawer(!mobileDrawer);
  const value = useMemo(() => ({ mobileDrawer, toggleDrawer }), [mobileDrawer]);

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
}

export default DrawerContext;
