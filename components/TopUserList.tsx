import { useState } from "react"
import { NextComponentType, NextPageContext } from "next";
import { UserType } from "../types/UserType";
import { Table, TableBody, Header, RowHeading} from "./Users/styles"
import UserInfo from "./Users/UserInfo";
import TableRow from "./Users/TableRow";


type Props = {
  users: UserType[];
}

const TopUserList : NextComponentType<NextPageContext, {},Props> = ({ users }) => {
  const [ detailedView, setDetailedView ] = useState<Boolean>(false);
    const [ detailedUser, setDetailedUser ] = useState<UserType>(users[0]);
  if(detailedView) {
    return (
      <UserInfo user={detailedUser} back={setDetailedView}/>
    )
  }
  else{
    return (
      <Table>
        <Header>
          <RowHeading>User ID</RowHeading>
          <RowHeading>Username</RowHeading>
          <RowHeading>User Email</RowHeading>
          <RowHeading>Top User</RowHeading>
          <RowHeading>Blocked</RowHeading>
        </Header>
        <TableBody>
          { users.map((user: UserType, index) => <TableRow key={index} user={user} openDetailedView={setDetailedView} setUser={setDetailedUser}/>) }
        </TableBody>
    </Table>
    )
  }
}

export default TopUserList;