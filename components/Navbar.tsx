import type { NextPage } from 'next'
import styled from "@emotion/styled"

const NavWrapper = styled.div`
background: #ababab;
`

const Nav = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 1.5rem;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  transform: skew(-10deg);
  text-transform: lowercase; 
  cursor: pointer;
`

const NavMenu = styled.div`
  display: flex;
  & ul {
    list-style: none;
    margin: 0;
    padding: 0.5rem 0;
    display: flex;
    & li {
      margin: 0 1rem;
    }
  }
`

const NavItem = styled.li`
  cursor: pointer;
  &:after {
  display:block;
  content: '';
  border-bottom: solid 1px black;  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
  }
  &:hover:after 
  { 
    transform: scaleX(0.9); 
  }
`

const Navbar : NextPage = () => {
  return (<NavWrapper>
    <Nav>
      <Logo>
        <span>Dashboard</span>
      </Logo>
      <NavMenu>
        <ul>
          <NavItem>Users</NavItem>
          <NavItem>News</NavItem>
          <NavItem>Top Users</NavItem>
          <li>Ham</li>
        </ul>
      </NavMenu>
    </Nav>
  </NavWrapper>)
}

export default Navbar