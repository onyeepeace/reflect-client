import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Notes from "./pages/Notes";
import { CreateNote } from "./pages/CreateNote";
import { EditNote } from "./pages/EditNote";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/create" component={CreateNote} />
          <Route path="/notes" component={Notes} />
          <Route path="/edit/:id" component={EditNote} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
