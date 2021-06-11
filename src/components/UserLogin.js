import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FrontAppNavBar } from "../common/FrontAppNavBar";
import { UserLoginAction } from "../redux/UserLoginReducer";
export const UserLogin = () => {
  const dispatch = useDispatch();
  const formUser = useRef();
  const history = useHistory();
  const state = useSelector((state) => state);

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [unsuccessoperation, setUnSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);
  const [type,setType]=useState("password");
  const [message, setMessage] = useState("");
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
  const UserLoginFunction = (e) => {
    if (formUser.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formUser.current.classList.add("was-validated");
      setUnSuccessOperation(true);
      setTimeout(() => {
        setUnSuccessOperation(false);
      }, 5000);
      if (!/^[a-zA-z0-9@#!$*&%]{8,12}$/.test(userPassword)) {
        setMessage("Invalid password");
      }
      if (!/^[a-zA-Z0-9. ]{3,}$/.test(userName)) {
        setMessage("Invalid User Name");
      }
    }
      else{
    dispatch(
      UserLoginAction({
        userName,
        userPassword,
      })
    );

    setErrorOperation(true);
    setTimeout(() => setErrorOperation(false), 5000);

      }
  };

  if (state.UserLogin.loginAction === true) {
    if(state.UserLogin.userRefDetails.userName===userName && state.UserLogin.userRefDetails.userPassword===userPassword){
    history.push("/user");
    }
    else{
    setErrorOperation(true);
    }
  }

  return (
    <div>
      <FrontAppNavBar></FrontAppNavBar>
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6 mt-3">
          <h3 className="alert alert-warning mb-4">User Login</h3>

          {state.UserLogin.loginAction === false && errorOperation && (
            <div className="alert alert-danger">login failure</div>
          )}
          {unsuccessoperation && (
          <div className="alert alert-danger d-flex justify-content-center mb-1 p-2">
            {message}
          </div>
        )}
        <form ref={formUser} className="needs-validation" noValidate>
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name"
              value={userName}
              onChange={(e) => updateUserName(e)}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type={type}
              className="form-control"
              placeholder="Enter your password"
              value={userPassword}
              onChange={(e) => updateUserPassword(e)}
              required
            />
            <input type="checkbox" name="showbox" onClick={()=>updateType()}/>show password
          </div>

          <div className="mb-2">
            <input
              type="button"
              className="btn btn-success w-100"
              value="Login"
              onClick={(e) => UserLoginFunction(e)}
            />
          </div>
          </form>
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
};