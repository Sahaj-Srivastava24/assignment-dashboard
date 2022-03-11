import { NextComponentType, NextPageContext } from "next";
import { DrawerWrapper, CloseButton, DrawerList, DrawerItem } from "./styles"

type NavbarProps = {
  handleDrawer: () => void
}


const Drawer : NextComponentType<NextPageContext, {}, NavbarProps> = ({ handleDrawer }) => {
  return (
    <DrawerWrapper>
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