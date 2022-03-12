import styled from "@emotion/styled"

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  & span{
    padding: 0.8rem 2rem;
    line-height: 50px;
    font-size: 1.5rem;
    font-weight: bold;
    width: 10%;
  }
`
  
export const SearchInput = styled.input`
  line-height: 45px;
  width: 60%;
  height: 50px;
  font-size: 0.9rem;
  padding: 0.5rem;
  margin-right: 2rem;
`

export const Button = styled.button`
  width: 5%;
  height: 50px;
  margin: 0 0 0 1rem;
`

  export const Table = styled.div`
  width: 100%;
  display : flex;
  flex-direction : column;
`

export const TableHeading = styled.div``
export const TableBody = styled.div``
export const SearchButton = styled.button``

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
  // &:hover {
  //   transform : scale(1.005);
  //   transition: transform 0.3s ease-in-out;
  //   overflow: hidden;
  // }
`

export const RowItem = styled.span`
  display: inline;
  padding-left: 2rem;
  width: 20%;
  cursor: pointer;
`
export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
`
export const RowHeading = styled.span`
  font-size: 1.5rem;
  font-weight: bold; 
  padding-left: 2rem;
  width: 20%
`

export const DetailedWrapper = styled.div`
  width: 94%;
  background-color: #f2f2f2;
  margin: 1% 3%;
  padding: 2rem;

  & h1{
    width: 100%;
    margin: 1rem 0;
    color: #383838;
  }
`
export const MainHeading = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubHeading = styled.div`
  padding: 0.3rem 1rem;
  display: flex;
  & h4{
    min-width: 30%;
    color: #4f4f4f;
  }
`