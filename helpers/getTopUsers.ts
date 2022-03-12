function getTopUsers () {
  return JSON.parse(window.localStorage.getItem("topUser")!);
}

export default getTopUsers;