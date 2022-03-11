import { NextComponentType, NextPageContext } from "next";
import { SearchBar, Table, TableHeading, TableBody, Header, RowHeading, Clear, SearchInput } from "./styles"
import { UserType } from "../../types/UserType";
import TableRow from "./TableRow";

type Props = {
  users: UserType[]
}

const UserList : NextComponentType<NextPageContext, {}, Props> = ({ users }) => {
  const results = users;

  return (<>
    <SearchBar>
      <span>UserList</span>
      <SearchInput type="text" />
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
        { users.map((user: UserType, index) => <TableRow key={index} user={user} />) }
      </TableBody>
    </Table>
  </>)
}

export default UserList;