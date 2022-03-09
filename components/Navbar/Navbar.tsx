import type { NextComponentType, NextPageContext } from 'next'
import { NavWrapper, Logo, NavMenu, NavItem} from "./Navbar.styles"

type NavbarProps = {
  handleDrawer: () => void
}

const Navbar : NextComponentType<NextPageContext, {}, NavbarProps> = ({ handleDrawer }) => {
  return (<NavWrapper>
      <Logo>
        <span>Dashboard</span>
      </Logo>
      <NavMenu>
        <ul>
          <NavItem>Users</NavItem>
          <NavItem>News</NavItem>
          <NavItem>Top Users</NavItem>
          <li onClick={handleDrawer}>Ham</li>
        </ul>
      </NavMenu>
  </NavWrapper>)
}

export default Navbar