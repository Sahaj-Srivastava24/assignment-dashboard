import type { NextComponentType, NextPageContext } from 'next'
import { NavWrapper, Logo, NavMenu, NavItem} from "./Navbar.styles"
import Link from 'next/link'


type NavbarProps = {
  handleDrawer: () => void
}

const Navbar : NextComponentType<NextPageContext, {}, NavbarProps> = ({ handleDrawer }) => {
  return (<NavWrapper>
      <Logo>
        <Link href="/" passHref>
        <span>Dashboard</span>
        </Link>
      </Logo>
      <NavMenu>
        <ul>
          <NavItem><Link href="/users">Users</Link></NavItem>
          <NavItem><Link href="/news">News</Link></NavItem>
          <NavItem><Link href="/top_users">Top Users</Link></NavItem>
          <li onClick={handleDrawer}>Ham</li>
        </ul>
      </NavMenu>
  </NavWrapper>)
}

export default Navbar