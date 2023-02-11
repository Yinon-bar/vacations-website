function AuthReducer(state, action) {
  if (action.type === "login") {
    return action.payload;
  }
  if (action.type === "logout") {
    return null;
  }
  return { ...state };
}

export default AuthReducer;
