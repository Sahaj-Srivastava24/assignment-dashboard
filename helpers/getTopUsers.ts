import { UserType } from '../types/UserType';

function getTopUsers(){
  type TopUserType = {
  id: number,
  isTop: boolean,
  user: UserType
}
  var userArray : UserType[] = [];
  const data: string | null = window.localStorage.getItem('topUser');
  if(data)
  {
    const parsedData : TopUserType[] = JSON.parse(data!);
    parsedData.sort((a, b) => (a.id > b.id) ? 1 : -1)
    userArray = parsedData.map(user => user.user);
    return userArray;
  }
  return [];
}

export default getTopUsers