import { NextComponentType, NextPageContext } from "next";
import { DrawerWrapper, CloseButton, DrawerList, DrawerItem } from "./Navbar.styles"

type NavbarProps = {
  handleDrawer: () => void
}


const Drawer : NextComponentType<NextPageContext, {}, NavbarProps> = ({ handleDrawer }) => {
  return (
    <DrawerWrapper>
      <CloseButton>
        <span onClick={handleDrawer}>Close</span>
      </CloseButton>
      <DrawerList>
        <ul>
          <DrawerItem>Home</DrawerItem>
          <DrawerItem>News</DrawerItem>
          <DrawerItem>Log out</DrawerItem>
        </ul>
      </DrawerList>
    </DrawerWrapper>
  )
}

export default Drawer;