import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createUserAction, updateUserAction } from "../redux/UserReducer";
//capture information
export function UserUpsert() {
  const dispatch = useDispatch();
  const formUser = useRef();
  //const history = useHistory();

  const state = useSelector((state) => state);
  console.log(state);

  const [userName, setUserName] = useState(state.user.refuser.userName);
  const [userEmail, setUserEmail] = useState(state.user.refuser.userEmail);
  const [userPassword, setUserPassword] = useState(
    state.user.refuser.userPassword
  );
  const [userMobile, setUserMobile] = useState(state.user.refuser.userMobile);
  const [userType, setUserType] = useState(state.user.refuser.userType);
  const [message, setMessage] = useState("");

  const [successoperation, setSuccessOperation] = useState(false);
  const [unsuccessoperation, setUnSuccessOperation] = useState(false);

  const UpdateUserName = (e) => setUserName(e.target.value);
  const UpdateUserEmail = (e) => setUserEmail(e.target.value);
  const UpdateUserPassword = (e) => setUserPassword(e.target.value);
  const UpdateUserMobile = (e) => setUserMobile(e.target.value);
  const UpdateUserType = (item) => setUserType(item);

  const register = (e) => {
    e.preventDefault();

    console.log(userName, userPassword, userType, userEmail, userMobile);
    if (formUser.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formUser.current.classList.add("was-validated");
      setUnSuccessOperation(true);
      setTimeout(() => {
        setUnSuccessOperation(false);
      }, 5000);
      if (!/^[6-9][0-9]{9}$/.test(userMobile)) {
        setMessage("Mobile Number is Invalid");
      }
      if (!/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(userEmail)) {
        setMessage("Invalid Email");
      }
      if (!/^[a-zA-z0-9@#!$*&%]{8,12}$/.test(userPassword)) {
        setMessage("Invalid password");
      }

      if (!/^[a-zA-Z0-9. ]{3,}$/.test(userName)) {
        setMessage("Invalid User Name");
      }
      if (!/user/.test(userType)) {
        if (!/admin/.test(userType)) {
          setMessage("select your specification");
        }
      }
    } else {
      dispatch(
        createUserAction({
          userName,
          userPassword,
          userType,
          userEmail,
          userMobile,
        })
      );

      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 5000);

      //history.push("/list-user")

      setUserName("");
      setUserEmail("");
      setUserPassword("");
      setUserMobile("");
      setUserType("");
    }
  };

  const updateUser = (e) => {
    if (formUser.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formUser.current.classList.add("was-validated");
      setUnSuccessOperation(true);
      setTimeout(() => {
        setUnSuccessOperation(false);
      }, 5000);
      if (!/^[6-9][0-9]{9}$/.test(userMobile)) {
        setMessage("Mobile Number is Invalid");
      }
      if (!/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(userEmail)) {
        setMessage("Invalid Email");
      }
      if (!/^[a-zA-z0-9@#!$*&%]{8,12}$/.test(userPassword)) {
        setMessage("Invalid password");
      }

      if (!/^[a-zA-Z0-9. ]{3,}$/.test(userName)) {
        setMessage("Invalid User Name");
      }
    } else {
      dispatch(
        updateUserAction({
          userId: state.user.refuser.userId,
          userName,
          userPassword,
          userType,
          userEmail,
          userMobile,
        })
      );

      // reset the form
      setUserName("");
      setUserEmail("");
      setUserPassword("");
      setUserMobile("");
      setUserType("");
    }
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary d-flex justify-content-center">
          {state.user.refuser.userId ? "Update Details" : "Registration"}
        </h3>

        {successoperation && (
          <div className="alert alert-success d-flex justify-content-center mb-1 p-2">
            User Details Added
          </div>
        )}

        {unsuccessoperation && (
          <div className="alert alert-danger d-flex justify-content-center mb-1 p-2">
            {message}
          </div>
        )}
        <form ref={formUser} className="needs-validation" noValidate>
          <div className="mb-1">
            <input
              type="text"
              value={userName}
              onChange={(e) => UpdateUserName(e)}
              className="form-control"
              placeholder="Enter userName"
              pattern="[a-zA-Z0-9. ]{3,}"
              required
            />
          </div>
          <div className="mb-1">
            <input
              type="password"
              value={userPassword}
              onChange={(e) => UpdateUserPassword(e)}
              className="form-control"
              placeholder="Enter password"
              pattern="[a-zA-z0-9@#!$*&%]{8,12}"
              required
            />
          </div>
          <div className="mb-1">
            <input
              type="email"
              value={userEmail}
              onChange={(e) => UpdateUserEmail(e)}
              className="form-control"
              placeholder="Enter email"
              pattern="^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$"
              required
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              value={userMobile}
              onChange={(e) => UpdateUserMobile(e)}
              className="form-control"
              placeholder="Enter mobile"
              pattern="[6-9][0-9]{9}"
              required
            />
          </div>
          <div className="mb-1">
            {state.user.refuser.userId ? (
              <div></div>
            ) : (
              <div>
                <h6>Select your specification</h6>
                <div>
                  <h5>user</h5>
                  <input
                    type="radio"
                    name="userType"
                    value={userType}
                    onClick={() => UpdateUserType("user")}
                    required
                  />
                </div>
                <div>
                  <h5>admin</h5>
                  <input
                    type="radio"
                    name="userType"
                    value={userType}
                    onClick={() => UpdateUserType("admin")}
                    required
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mb-1">
            {state.user.refuser.userId ? (
              <input
                type="button"
                className="btn btn-secondary w-100"
                value="Update Details"
                onClick={(e) => updateUser(e)}
              />
            ) : (
              <input
                type="button"
                className="btn btn-secondary w-100"
                value="REGISTER"
                onClick={(e) => register(e)}
              />
            )}
          </div>
        </form>
      </div>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
    </div>
  );
}
