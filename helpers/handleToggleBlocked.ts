function handleBlocked(id: Number, setBlocked: Function) {
  // Idea: There would be an array of users that are blocked stored in localStorage
  // When ever the handler is called with the id to toggle the block, it would check if the id is in the array
  // and if it is, it would remove it, if it is not, it would add it.
  type ItemType = {
    id: Number, 
    isTop: Boolean, 
    time: ReturnType<typeof setTimeout>
  }

  if(window.localStorage.getItem("blocked") !== null){
    var blocked: ItemType[] = JSON.parse(window.localStorage.getItem("blocked")!);
    console.log(blocked);
    let found = blocked.findIndex( (item: any) => {
      return (item.id === id) 
    })
    if(found !== -1){
      blocked.splice(found, 1);
    }
    else{
      blocked.push({
        id: id,
        isTop: true,
        time: setTimeout(() => {
            handleBlocked(id, setBlocked);
            setBlocked((prev: boolean) => !prev) 
          },5000)
      });
    }
    window.localStorage.setItem("blocked", JSON.stringify(blocked));
  }
  else{
    const item = [{
      id: id,
      isTop: true,
      time: setTimeout(() => {
          handleBlocked(id, setBlocked);
          setBlocked((prev: boolean) => !prev) 
        },5 * 60 * 1000) // 5 minutes
    },]
    window.localStorage.setItem("blocked", JSON.stringify(item));
  }
}

export default handleBlocked;