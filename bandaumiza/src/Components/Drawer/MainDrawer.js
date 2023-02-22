import React from "react";
import Drawer from "rc-drawer";

function MainDrawer({ children, drawerOpen, drawerClose }) {
  return (
    <Drawer
      open={drawerOpen}
      onClose={drawerClose}
      handler={false}
      level={null}
      placement="right"
    >
      {children}
    </Drawer>
  );
}

export default MainDrawer;
