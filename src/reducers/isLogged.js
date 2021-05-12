
const isLogged = (state, action) => {
    switch(action.type) {
      case "LOGGIN_IN":
        return true;
      case "LOGGING_OUT":
        return false;
        default:
        return false;
    }
  
  }

  export default  isLogged;