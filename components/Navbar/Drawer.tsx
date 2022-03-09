import { NextComponentType } from "next";
import { CloseButton, DrawerList, DrawerItem } from "./Navbar.styles"

const Drawer : NextComponentType = () => {
  return (
    <>
      <CloseButton>
        <span>Close</span>
      </CloseButton>
      <DrawerList>
        <ul>
          <DrawerItem>Home</DrawerItem>
          <DrawerItem>News</DrawerItem>
          <DrawerItem>Log out</DrawerItem>
        </ul>
      </DrawerList>
    </>
  )
}

export default Drawer;