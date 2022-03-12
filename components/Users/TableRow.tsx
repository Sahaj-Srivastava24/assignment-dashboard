import { useState, Dispatch, SetStateAction } from 'react';
import { NextComponentType, NextPageContext } from "next";
import { UserType } from "../../types/UserType";
import { handleTopUser, checkTopUser } from '../../helpers/handleToggleTopUser';
import { handleBlocked, checkBlocked } from '../../helpers/handleToggleBlocked';
import { useRouter } from 'next/router'
import getTopUsers from "../..//helpers/getTopUsers"
import { Row, RowItem } from "./styles";

type Props = {
  user: UserType;
  openDetailedView: Dispatch<SetStateAction<Boolean>>;
  setDetailedUser: Dispatch<SetStateAction<UserType>>;
  setTopUsers: Dispatch<SetStateAction<UserType[]>>;
}
const TableRow : NextComponentType<NextPageContext, {}, Props> = ({ user, openDetailedView, setDetailedUser, setTopUsers }) => {
  const router = useRouter()
  const { id , name, email } = user;
  const [ blocked, setBlocked ] = useState<boolean>(checkBlocked(id));
  const [ topUser, settopUser ] = useState<boolean>(checkTopUser(id));

  const onChangeBlock = () => {
    setBlocked(!blocked);
    handleBlocked(id, setBlocked);
  }

  const onChangeTopUser = () => {
    if(topUser && (router.pathname === "/top_users")){
      console.log("removed from top users " + id );
      setTopUsers(users => {
        console.log(users)
        return users.filter(user => user.id !== id)
      });
    }
    settopUser(prev => !prev);
    handleTopUser(user); 
    console.log(user)
  }

  const handleShowDetails = () => {
    setDetailedUser(user);
    openDetailedView(true);
  }
  return (
    <Row>
      <RowItem>{id}</RowItem>
      <RowItem onClick={handleShowDetails}>{name}</RowItem>
      <RowItem>{email}</RowItem>
      <RowItem><input type="checkbox" checked={topUser} onChange={onChangeTopUser} /></RowItem>
      <RowItem><input type="checkbox" checked={blocked}  onChange={onChangeBlock} /></RowItem>
    </Row>
  )
}

export default TableRow