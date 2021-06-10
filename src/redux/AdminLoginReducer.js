const initState = {
  userRefDetails:{},
  loginAction: false,
};

// ACTION TYPES
const LOGIN_ACTION = "LOGIN_ACTION";
const LOGIN_ERROR="LOGIN_ERROR";
// ACTIONS :: Login Action
export function AdminLoginAction(payload) {
  // MAKE SURE redux-thunk is installed.
  console.log(payload);
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    try {
      const url = "http://localhost:8080/api/user/login/";
      const requestBody = { ...payload,userType:"admin" };

      // HTTP Client
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const user = await response.json();
      sessionStorage.setItem("user", JSON.stringify(user));
      
      console.log(user)
      if (user.userName) {
        console.log(user);
        dispatch({ type: LOGIN_ACTION, payload: user });
      }
      else{
        dispatch({type:LOGIN_ERROR,payload:false});
      }
    } catch (error) {
      console.log(error);
    }
  };
}

// REDUCER LOGIC
export function AdminLoginReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, loginAction: true,userRefDetails: action.payload };
    case LOGIN_ERROR:
      return{ ...state, loginAction: false} 
    default:
      return state;
  }
}
console.log(initState.userRefDetails)