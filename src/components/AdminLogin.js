import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AdminLoginAction } from "../redux/AdminLoginReducer";
import { AppNavBar} from "../common/AppNavBar"
import { FrontAppNavBar } from "../common/FrontAppNavBar";

export function AdminLogin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const[type,setType]=useState("password");
  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateUserName = (e) => setUserName(e.target.value);
  const updateUserPassword = (e) => {
      setType(e.target.type);
      setUserPassword(e.target.value)
    };
    const updateType=()=>{
        if(type==="text"){
            setType("password");
        }
        else{
            setType("text");
        }
    }

  const AdminLoginFunction = () => {
    dispatch(
      AdminLoginAction({
        userName,
        userPassword,
      })
    );

    setErrorOperation(true);
    setTimeout(() => setErrorOperation(false), 5000);

    console.log(userName, userPassword);
  };

 if (state.UserLogin.loginAction === true) {
    if(state.UserLogin.userRefDetails.userName===userName && state.UserLogin.userRefDetails.userPassword===userPassword){
    history.push("/admin");
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
        <div className="col-12 col-md-6">
          <h3 className="alert alert-warning">Admin Login</h3>

          {state.AdminLogin.loginAction === false && errorOperation && (
            <div className="alert alert-danger">login failure</div>
          )}

          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter username"
            required="required"
            onChange={(e) => updateUserName(e)}
          />
            <input
              type={type}
              className="form-control"
              placeholder="Enter your password"
              value={userPassword}
              onChange={(e) => updateUserPassword(e)}
            />
            <input type="checkbox" name="showbox" onClick={()=>updateType()}/>show password
          <input
            type="button"
            className="btn btn-success w-100"
            value="Login"
            onClick={() => AdminLoginFunction()}
          />
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
}