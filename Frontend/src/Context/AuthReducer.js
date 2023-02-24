function AuthReducer(state, action) {
  if (action.type === "login") {
    return action.payload;
  }
  if (action.type === "logout") {
    return null;
  }
  if (action.type === "register") {
    return action.payload;
  }
  return { ...state };
}

export default AuthReducer;
