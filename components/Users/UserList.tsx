import { useState } from "react";
import { NextComponentType, NextPageContext } from "next";
import { SearchBar, Table, TableHeading, TableBody, Header, RowHeading, Button, SearchInput } from "./styles"
import { UserType } from "../../types/UserType";
import UserInfo from "./UserInfo";
import TableRow from "./TableRow";

type Props = {
  users: UserType[]
}

const UserList : NextComponentType<NextPageContext, {}, Props> = ({ users }) => {
  const [ detailedView, setDetailedView ] = useState<Boolean>(false);
  const [ detailedUser, setDetailedUser ] = useState<UserType>(users[0]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setFilteredUsers( users.filter((user) => {
      return user.name.toLowerCase().includes(e.target.value.toLowerCase()) || user.email.toLowerCase().includes(e.target.value.toLowerCase()); ;
    }))
  }
  return (<>
    <SearchBar>
      <span>UserList</span>
      <SearchInput type="text" value={search} onChange={e => handleSearch(e)}/>
      {detailedView? 
      (<Button onClick={() => {
        setDetailedView(false)
      }}>Close</Button>) 
      : 
      (<Button onClick={()=> {
        setSearch("");
        setFilteredUsers(users);
      }}>Clear</Button>)}
      
      
    </SearchBar>
    {detailedView? 
      (
      <UserInfo user={detailedUser} back={setDetailedView}/>
      ) : (
      <Table>
        <Header>
          <RowHeading>User ID</RowHeading>
          <RowHeading>Username</RowHeading>
          <RowHeading>User Email</RowHeading>
          <RowHeading>Top User</RowHeading>
          <RowHeading>Blocked</RowHeading>
        </Header>
        <TableBody>
          { filteredUsers.map((user: UserType, index) => <TableRow key={index} user={user} openDetailedView={setDetailedView} setUser={setDetailedUser}/>) }
        </TableBody>
    </Table>
    )}
  </>)
}

export default UserList;