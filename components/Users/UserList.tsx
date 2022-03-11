import { useState } from "react";
import { NextComponentType, NextPageContext } from "next";
import { SearchBar, Table, TableHeading, TableBody, Header, RowHeading, Clear, SearchInput } from "./styles"
import { UserType } from "../../types/UserType";
import TableRow from "./TableRow";

type Props = {
  users: UserType[]
}

const UserList : NextComponentType<NextPageContext, {}, Props> = ({ users }) => {
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
      <Clear>Clear</Clear>
    </SearchBar>
  
    <Table>
      <Header>
        <RowHeading>User ID</RowHeading>
        <RowHeading>Username</RowHeading>
        <RowHeading>User Email</RowHeading>
        <RowHeading>Top User</RowHeading>
        <RowHeading>Blocked</RowHeading>
      </Header>
      <TableBody>
        { filteredUsers.map((user: UserType, index) => <TableRow key={index} user={user} />) }
      </TableBody>
    </Table>
  </>)
}

export default UserList;