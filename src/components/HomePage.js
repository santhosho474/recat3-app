import { useHistory } from "react-router";

export const HomePage=()=>{
    const history=useHistory();
    const UserPage=()=>{
        history.push("/userlogin");
    }
    const AdminPage=()=>{
        history.push("/adminlogin");
    }
    return(
        <div>
        <div className="row" style={{marginTop:"30px"}}>
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-warning mb-4">Home Page</h3>
         <div className="mb-2">
         <input type="button"
          value="User Login" 
          className="btn btn-success form-control"
          onClick={()=>UserPage()}/>
         </div>
         <div className="mb-2">
         <input type="button"
         className="btn btn-success form-control"
          value="Admin Login" 
          onClick={()=>AdminPage()}/>
         </div>
        </div>
        </div>
        </div>
    );
}