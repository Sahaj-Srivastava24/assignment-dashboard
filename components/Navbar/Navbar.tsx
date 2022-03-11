import type { NextComponentType, NextPageContext } from 'next'
import { useState } from "react"
import { NavWrapper, Logo, NavMenu, NavItem, NavControl} from "./styles"
import Link from 'next/link'


type NavbarProps = {
  handleDrawer: () => void
}

const Navbar : NextComponentType<NextPageContext, {}, NavbarProps> = ({ handleDrawer }) => {
  const [ hideNavChips , setHideNavChips ] = useState<Boolean>(false)
  const handleNavChips = () => {
    setHideNavChips(!hideNavChips)
    handleDrawer()
  }
  return (<NavWrapper>
      <Logo>
        <Link href="/" passHref>
        <span>Dashboard</span>
        </Link>
      </Logo>
      <NavMenu>
        <ul>
          {hideNavChips? 
            (<NavControl onClick={handleNavChips}>Close</NavControl>)
            :
            (
            <>
              <NavItem><Link href="/users">Users</Link></NavItem>
              <NavItem><Link href="/news">News</Link></NavItem>
              <NavItem><Link href="/top_users">Top Users</Link></NavItem>
              <NavControl onClick={handleNavChips}>Menu</NavControl>
            </>
            )}
        </ul>
      </NavMenu>
  </NavWrapper>)
}

export default Navbar