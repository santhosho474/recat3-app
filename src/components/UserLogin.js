import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppNavBar } from "../common/AppNavBar";
import { UserLoginAction } from "../redux/UserLoginReducer";
export const UserLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorOperation, setErrorOperation] = useState(false);
  const [type,setType]=useState("password");
  const updateUserName = (e) => setUserName(e.target.value);
  const updateUserPassword = (e) =>{ 
    setType(e.target.type)
    setUserPassword(e.target.value)};
  const updateType=()=>{
    if(type==="text"){
      setType("password");
    }
    else{
      setType("text");
    }
  }
  const UserLoginFunction = () => {
    dispatch(
      UserLoginAction({
        userName,
        userPassword,
      })
    );

    setErrorOperation(true);
    setTimeout(() => setErrorOperation(false), 5000);

    console.log(userName, userPassword);
    console.log(state.message);
  };

  if (state.UserLogin.loginAction === true) {
    if(state.UserLogin.userRefDetails.userName===userName && state.UserLogin.userRefDetails.userPassword===userPassword){
    history.push("/list-user");
    }
    else{
    setErrorOperation(true);
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary mb-4">User Login</h3>

          {state.UserLogin.loginAction === false && errorOperation && (
            <div className="alert alert-danger">login failure</div>
          )}

          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name"
              value={userName}
              onChange={(e) => updateUserName(e)}
            />
          </div>

          <div className="mb-4">
            <input
              type={type}
              className="form-control"
              placeholder="Enter your password"
              value={userPassword}
              onChange={(e) => updateUserPassword(e)}
            />
            <input type="checkbox" name="showbox" onClick={()=>updateType()}/>show password
          </div>

          <div className="mb-2">
            <input
              type="button"
              className="btn btn-outline-dark w-100"
              value="Login"
              onClick={() => UserLoginFunction()}
            />
          </div>
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
};