const formReducer = (state, action) => {
  switch (action.type) {
    case "FIRST_NAME":
      return { ...state, firstName: action.payload };

    case "LAST_NAME":
      return { ...state, lastName: action.payload };

    case "EMAIL":
      return { ...state, email: action.payload };

    case "PASSWORD":
      return { ...state, password: action.payload };
    default:
      return {};
  }
};

export default formReducer;
