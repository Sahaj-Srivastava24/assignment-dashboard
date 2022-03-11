import { NextComponentType  } from "next";
import { useState } from "react";
import { PageLayout, DrawerOpen, DrawerClosed } from "./styles";
import Drawer from "../Navbar/Drawer";
import Navbar from "../Navbar/Navbar";

const Layout: NextComponentType = ({ children }) => {
  const [ showDrawer , setshowDrawer ] = useState<boolean>(false);
  const toggleDrawer = () => setshowDrawer(!showDrawer);
  
  return (
    <>
      <Navbar handleDrawer={toggleDrawer}/>
      <PageLayout>
        {showDrawer? (
          <div style={{ display: "flex"}}>
            <DrawerOpen>
              {children}
            </DrawerOpen>
            <Drawer handleDrawer={toggleDrawer}/>
          </div>
        ) : (
          <DrawerClosed>
              {children}
          </DrawerClosed>
        )}
      </PageLayout>
    </>
  );
}

export default Layout;