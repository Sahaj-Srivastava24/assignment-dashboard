import { NextComponentType, NextPageContext } from "next";
import { UserType } from "../../types/UserType";
import { Row, RowItem } from "./styles";

const TableRow : NextComponentType<NextPageContext, {}, { user : UserType}> = ({ user }) => {
  const { id , name, email } = user;
  return (
    <Row>
      <RowItem>{id}</RowItem>
      <RowItem>{name}</RowItem>
      <RowItem>{email}</RowItem>
      <RowItem><input type="checkbox" value="Bike" /></RowItem>
      <RowItem><input type="checkbox" value="Bike" /></RowItem>
    </Row>
  )
}

export default TableRow