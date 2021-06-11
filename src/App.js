import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserUpsert } from "./components/UserUpsert";
import { UserList } from "./components/UserList";
import Switch from "react-bootstrap/esm/Switch";
import { AppNavBar } from "./common/AppNavBar";
import { UserLogin} from "./components/UserLogin";
import {AdminLogin} from "./components/AdminLogin";
import {HomePage} from "./components/HomePage";
import {MechanicUpsert} from "./components/MechanicUpsert"
import {MechanicList} from "./components/MechanicList";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create-user">
        <AppNavBar></AppNavBar>
          <UserUpsert />
        </Route>
        <Route path="/list-user">
        <AppNavBar />
          <UserList />
        </Route>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route  path="/userlogin">
          <UserLogin />
        </Route>
        <Route  path="/adminlogin">
          <AdminLogin/>
        </Route>
        <Route  path="/admin">
        <AppNavBar></AppNavBar>
        </Route>
        <Route  path="/user">
        <AppNavBar></AppNavBar>
        </Route>
        <Route  path="/mechanic-list">
        <AppNavBar></AppNavBar>
        <MechanicList></MechanicList>
        </Route>
        <Route  path="/mechanic-create">
        <AppNavBar></AppNavBar>
        <MechanicUpsert></MechanicUpsert>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
