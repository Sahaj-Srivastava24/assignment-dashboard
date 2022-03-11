import { useState } from 'react';
import { NextComponentType, NextPageContext } from "next";
import { UserType } from "../../types/UserType";
import handleTopUser from '../../helpers/handleToggleTopUser';
import handleBlocked from '../../helpers/handleToggleBlocked';
import { Row, RowItem } from "./styles";

const TableRow : NextComponentType<NextPageContext, {}, { user : UserType}> = ({ user }) => {
  const { id , name, email } = user;
  const [ blocked, setBlocked ] = useState<boolean>(false);
  const [ topUser, settopUser ] = useState<boolean>(false);

  const onChangeBlock = () => {
    setBlocked(!blocked);
    handleBlocked(id, setBlocked);
  }

  const onChangeTopUser = () => {
    settopUser(!topUser);
    handleTopUser(id);
  }
  
  // const onChangeBlock = () => {
  //   setBlocked(!blocked);
  //   if(window.localStorage.getItem(`user_${id}`) !== null) {
  //     let item = window.localStorage.getItem(`user_${id}`);
  //     let parsedItem = JSON.parse(item);
  //     if(parsedItem.blocked) {
  //       delete parsedItem.blocked;
  //     }
  //     else{
  //       parsedItem = { ...parsedItem, blocked: true };
  //     }
  //     window.localStorage.setItem(`user_${id}`, JSON.stringify(parsedItem));
  //   }
  //   else{
  //     window.localStorage.setItem(`user_${id}`, JSON.stringify({ blocked: true }));
  //   }
  // }
  // const onChangeTopUser = () => {
  //   settopUser(!topUser);
  //   if(window.localStorage.getItem(`user_${id}`) !== null) {
  //     let item = window.localStorage.getItem(`user_${id}`);
  //     let parsedItem = JSON.parse(item);
  //     if(parsedItem.topUser) {
  //       delete parsedItem.topUser;
  //     }
  //     else{
  //       parsedItem = { ...parsedItem, topUser: true };
  //     }
  //     parsedItem.topUser = !topUser;
  //     window.localStorage.setItem(`user_${id}`, JSON.stringify(parsedItem));
  //   }
  //   else{
  //     window.localStorage.setItem(`user_${id}`, JSON.stringify({ topUser: true }));
  //   }
  // }
  return (
    <Row>
      <RowItem>{id}</RowItem>
      <RowItem>{name}</RowItem>
      <RowItem>{email}</RowItem>
      <RowItem><input type="checkbox" checked={topUser} onChange={onChangeTopUser} /></RowItem>
      <RowItem><input type="checkbox" checked={blocked}  onChange={onChangeBlock} /></RowItem>
    </Row>
  )
}

export default TableRow