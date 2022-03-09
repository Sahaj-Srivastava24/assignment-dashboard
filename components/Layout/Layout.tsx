import { NextComponentType  } from "next";
import { useState } from "react";
import { PageLayout, ChildrenLayout } from "./Layout.styles";
import Drawer from "../Navbar/Drawer";
import Navbar from "../Navbar/Navbar";

const Layout: NextComponentType = ({ children }) => {
  const [ showDrawer , setshowDrawer ] = useState<boolean>(false);
  const toggleDrawer = () => setshowDrawer(!showDrawer);
  
  return (
    <>
      <Navbar handleDrawer={toggleDrawer}/>
      {showDrawer? (
        <PageLayout>
          <ChildrenLayout>
            {children}
          </ChildrenLayout>
          <Drawer />
        </PageLayout>
        ) : 
        children}
    </>
  );
}

export default Layout;