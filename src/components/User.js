import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateRefUser } from "../redux/UserReducer";
import {UserAppNavBar} from "../common/UserNavBar";
export const User=()=>{
    const dispatch = useDispatch();
    const history=useHistory();
    const state = useSelector((state) => state);
    const updateUser=(item)=>{
        dispatch(updateRefUser(item));
        console.log(item);
        history.push("/create-user");
    }
    return(
        <div>
            <UserAppNavBar/>
            <div className="row">
            <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
          <h3 className="alert alert-warning"> User Details</h3>
          <div className="mb-2">Name:-{state.UserLogin.userRefDetails.userName}</div>
          <div className="mb-2">Password:{state.UserLogin.userRefDetails.userPassword}</div>
          <div className="mb-2">Email:{state.UserLogin.userRefDetails.userEmail}</div>
          <div className="mb-2">Mobile Number:{state.UserLogin.userRefDetails.userMobile}</div>
          <div><input type="button" value="update user" 
          className="btn btn-success form-control"
          onClick={()=>updateUser(state.UserLogin.userRefDetails)}/></div>
          </div>
            </div>
        </div>
    );
}