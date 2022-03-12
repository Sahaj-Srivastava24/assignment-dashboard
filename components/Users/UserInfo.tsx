import { Dispatch, SetStateAction } from "react";
import { NextComponentType, NextPageContext } from "next";
import { UserType } from "../../types/UserType";
import { MainHeading, SubHeading, DetailedWrapper } from "./styles";

type Props = {
  user: UserType;
  back: React.Dispatch<SetStateAction<Boolean>>;
}
const UserInfo : NextComponentType<NextPageContext, {}, Props> = ({ user, back }) => {
  const { id, name, username, email, address, phone, website, company } = user;
  const { street, suite, city, zipcode } = address;
  const { name: companyName, catchPhrase, bs } = company;
  return (
    <DetailedWrapper>
      <MainHeading>
        <h1>Personal Details</h1>
        <SubHeading>
          <h4>Name:-</h4>
          <h4>{name}</h4>
        </SubHeading>
        <SubHeading>
          <h4>UserName:-</h4>
          <h4>{username}</h4>
        </SubHeading>
        <SubHeading>
          <h4>Email Address:-</h4>
          <h4>{email}</h4>
        </SubHeading>
        <SubHeading>
          <h4>Phone Number:-</h4>
          <h4>{phone}</h4>
        </SubHeading>
        <SubHeading>
          <h4>Website:-</h4>
          <h4>{website}</h4>
        </SubHeading>
      </MainHeading>
      <MainHeading>
        <h1>Address</h1>
        <SubHeading>
          <h4>First Line:-</h4>
          <h4>{suite + ", " + street + ","}</h4>
        </SubHeading>
        <SubHeading>
          <h4>Second Line:-</h4>
          <h4>{city + " - " + zipcode}</h4>
        </SubHeading>
      </MainHeading>
      <MainHeading>
        <h1>Company Information</h1>
        <SubHeading>
          <h4>Company Name:-</h4>
          <h4>{companyName}</h4>
        </SubHeading>
        <SubHeading>
          <h4>Catch Phrase:-</h4>
          <h4>{catchPhrase}</h4>
        </SubHeading>
        <SubHeading>
          <h4>BS:-</h4>
          <h4>{bs}</h4>
        </SubHeading>
      </MainHeading>

    </DetailedWrapper>
  )
}

export default UserInfo;