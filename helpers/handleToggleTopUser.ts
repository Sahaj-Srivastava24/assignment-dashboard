import type { UserType } from '../types/UserType';

type ItemType = {
    id: Number,
    isTop: Boolean,
    user: UserType
}

export function handleTopUser(user: UserType){
  // Idea: There would be an array of users that are top users stored in localStorage
  // Where ever the handler is called with the id to toggle the top user, it would check if the id is in the array
  // and if it is, it would remove it, if it is not, it would add it.
  if(window.localStorage.getItem("topUser") !== null){
    var topUser: ItemType[] = JSON.parse(window.localStorage.getItem("topUser")!);
    let found = topUser.findIndex( (item: any) => {
      return (item.id === user.id) 
    })
    if(found !== -1){
      topUser.splice(found, 1);
    }
    else{
      topUser.push({
        id: user.id,
        isTop: true,
        user: user,
      });
    }
    window.localStorage.setItem("topUser", JSON.stringify(topUser));
  }
  else{
    window.localStorage.setItem("topUser", JSON.stringify([{id: user.id, isTop: true, user: user}]));
  }
}

// Gets the initial value for the check boxes on Users page
export function checkTopUser(id: Number) {
  // window object is a part of client side and is unavailable until the dom is loaded, so until then it could not be accessed and was resulting in an error
  if (typeof window !== "undefined") {
    if(window.localStorage.getItem("topUser") !== null){
      var topUser: ItemType[] = JSON.parse(window.localStorage.getItem("topUser")!);
      let found = topUser.findIndex( (item: any) => {
        return (item.id === id) 
      })
      if(found !== -1){
        return true
      }
      else{
        return false
      }
    }
  }
  return false;
}
