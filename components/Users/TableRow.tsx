import { useState, Dispatch, SetStateAction } from 'react';
import { NextComponentType, NextPageContext } from "next";
import { UserType } from "../../types/UserType";
import { handleTopUser, checkTopUser } from '../../helpers/handleToggleTopUser';
import { handleBlocked, checkBlocked } from '../../helpers/handleToggleBlocked';
import { Row, RowItem } from "./styles";

type Props = {
  user: UserType;
  openDetailedView: Dispatch<SetStateAction<Boolean>>;
  setUser: Dispatch<SetStateAction<UserType>>;
}
const TableRow : NextComponentType<NextPageContext, {}, Props> = ({ user, openDetailedView, setUser }) => {
  const { id , name, email } = user;
  const [ blocked, setBlocked ] = useState<boolean>(checkBlocked(id));
  const [ topUser, settopUser ] = useState<boolean>(checkTopUser(id));
  console.log(checkTopUser(id));

  const onChangeBlock = () => {
    setBlocked(!blocked);
    handleBlocked(id, setBlocked);
  }

  const onChangeTopUser = () => {
    settopUser(!topUser);
    handleTopUser(user);
  }

  const handleShowDetails = () => {
    setUser(user);
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