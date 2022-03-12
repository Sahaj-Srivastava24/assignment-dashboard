import { useState, useEffect, Dispatch, SetStateAction } from "react"
import { NextComponentType, NextPageContext } from "next";
import { UserType } from "../types/UserType";
import { Table, TableBody, Header, RowHeading} from "./Users/styles"
import UserInfo from "./Users/UserInfo";
import TableRow from "./Users/TableRow";


type Props = {
  users: UserType[];
  setUsers: Dispatch<SetStateAction<UserType[]>>;
}

const TopUserList : NextComponentType<NextPageContext, {},Props> = ({ users, setUsers }) => {
  const [ detailedView, setDetailedView ] = useState<Boolean>(false);
  const [ detailedUser, setDetailedUser ] = useState<UserType>(users[0]);
  if(detailedView) {
    return (
      <UserInfo user={detailedUser} back={setDetailedView}/>
    )
  }


  if( users!.length > 0 ){
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
          { users!.map((user: UserType) => <TableRow key={user.id} user={user} openDetailedView={setDetailedView} setDetailedUser={setDetailedUser} setTopUsers={setUsers}/>) }
        </TableBody>
    </Table>
    )
  }
  else {
    return (
      <h1>No Top Users</h1>
    )
  }
}

export default TopUserList;