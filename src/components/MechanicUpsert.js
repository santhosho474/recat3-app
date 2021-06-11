import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createMechanicAction,
  updateMechanicAction,
} from "../redux/MechanicReducer";

export function MechanicUpsert() {
  const dispatch = useDispatch();
  const formEL=useRef();
  const state = useSelector((state) => state);
  const [mechanicsName, setMechanicsName] = useState(state.mechanic.refmec.mechanicsName);
  const [mechanicsAge, setMechanicsAge] = useState(state.mechanic.refmec.mechanicsAge);
  const [mechanicsMobile, setMechanicsMobile] = useState(state.mechanic.refmec.mechanicsMobile);
  const[message,setMessage]=useState("");

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateMechanicsName = (e) => setMechanicsName(e.target.value);
  const updateMechanicsAge = (e) => setMechanicsAge(e.target.value);
  const updateMechanicsMobile = (e) =>setMechanicsMobile(e.target.value);

  const addMechanic = (e) => {
    if (formEL.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
      setErrorOperation(true);
      if(/^[6-9]{1}[0-9]{9}$/.test(mechanicsMobile)===false){
        setMessage("Invalid mecahnics mobile");
      }
      if(!(mechanicsAge>=18&&mechanicsAge<=60)){
      setMessage("Invalid mechanics Age");
      }
       if(!/^[A-Za-z. ]{3,}$/.test(mechanicsName)){
        setMessage("Invalid mecahnics Name");
      }
      setTimeout(() => {
        setErrorOperation(false)
      }, 2000);
    }
    else{
    dispatch(
      createMechanicAction({
        mechanicsName, 
        mechanicsAge, 
        mechanicsMobile
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 2000);

    // A2: navigate to another page
    // history.push("/list-employee");

    // reset the form
    setMechanicsName("");
    setMechanicsAge("");
    setMechanicsMobile("");
    setMessage("");
  }
  };

  const updateMechanic = (e) => {
    if (formEL.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
      setErrorOperation(true);
      if(/^[6-9]{1}[0-9]{9}$/.test(mechanicsMobile)===false){
        setMessage("Invalid mecahnics mobile");
      }
      if(!(mechanicsAge>=18&&mechanicsAge<=60)){
      setMessage("Invalid mechanics Age");
      }
       if(!/^[A-Za-z. ]{3,}$/.test(mechanicsName)){
        setMessage("Invalid mecahnics Name");
      }
      setTimeout(() => {
        setErrorOperation(false)
      }, 2000);
    }
    else{
    dispatch(
      updateMechanicAction({
        mechanicsId: state.mechanic.refmec.mechanicsId,
        mechanicsName,
        mechanicsAge,
        mechanicsMobile
      })
    );
    console.log(mechanicsName, mechanicsAge, mechanicsMobile);
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 2000);

    // reset the form
    setMechanicsName("");
    setMechanicsAge("");
    setMechanicsMobile("");
    setMessage("");
    }
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-warning">
          {state.mechanic.refmec.mechanicsId ? "Update Mechanic" : "Create Mechanic"}
        </h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Mechanics added!!!</div>
        )}
        {errorOperation && (
          <div className="alert alert-danger">{message}</div>
        )}
      <form ref={formEL} class="needs-validation" novalidate>
        <div className="mb-1">
          <input
            type="text"
            value={mechanicsName}
            onChange={(e) => updateMechanicsName(e)}
            className="form-control"
            placeholder="Enter Mechanics name"
            pattern="[a-zA-Z. ]{3,}"
            required
          />
        </div>

        <div className="mb-1">
          <input
            type="number"
            value={mechanicsAge}
            onChange={(e) => updateMechanicsAge(e)}
            className="form-control"
            placeholder="Enter age"
            max={60}
            min={18}
            required
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={mechanicsMobile}
            onChange={(e) => updateMechanicsMobile(e)}
            className="form-control"
            placeholder="Enter Mobile"
            pattern="[6-9][0-9]{9}"
            required
          />
        </div>

        <div className="mb-1">
          {state.mechanic.refmec.mechanicsName ? (
            <input
              type="button"
              className="btn btn-success w-100"
              value="Update Mechanic"
              onClick={(e) => updateMechanic(e)}
            />
          ) : (
            <input
              type="button"
              className="btn btn-success w-100"
              value="Add Mechanic"
              onClick={(e) => addMechanic(e)}
            />
          )}
        </div>
      </form>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}