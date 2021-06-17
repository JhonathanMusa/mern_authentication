import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from "./hooks/UserContext";
import useFindUser from "./hooks/useFindUser";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const { user, setUser, isLoading } = useFindUser();

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser, isLoading }}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
