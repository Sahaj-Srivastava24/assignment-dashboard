function handleTopUser(id: Number){
  // Idea: There would be an array of users that are top users stored in localStorage
  // Where ever the handler is called with the id to toggle the top user, it would check if the id is in the array
  // and if it is, it would remove it, if it is not, it would add it.
  type ItemType = {
    id: Number,
    isTop: Boolean,
  }
  
  if(window.localStorage.getItem("topUser") !== null){
    var topUser: ItemType[] = JSON.parse(window.localStorage.getItem("topUser")!);
    let found = topUser.findIndex( (item: any) => {
      return (item.id === id) 
    })
    if(found !== -1){
      topUser.splice(found, 1);
    }
    else{
      topUser.push({
        id: id,
        isTop: true,
      });
    }
    window.localStorage.setItem("topUser", JSON.stringify(topUser));
  }
  else{
    window.localStorage.setItem("topUser", JSON.stringify([{id: id, isTop: true}]));
  }
}

export default handleTopUser;