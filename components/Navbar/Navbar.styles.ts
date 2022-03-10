import styled from "@emotion/styled"

export const NavWrapper = styled.div`
  background: #ababab;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 1.5rem;
`

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  transform: skew(-10deg);
  text-transform: lowercase; 
  cursor: pointer;
`

export const NavMenu = styled.div`
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

export const NavItem = styled.li`
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
export const DrawerWrapper = styled.li`
  min-width: 10%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: #ababab;
`

export const CloseButton = styled.div`
  cursor: pointer;
  
  `
export const DrawerList = styled.div`
`

export const DrawerItem = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 1rem;
`
