import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import PendingList from "./components/PendingList";
import CompletedList from "./components/CompletedList";
import TrashList from "./components/TrashList";


class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <div className="container">
            <div className="nav-wrapper">
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><Link to="/" className="nav-link">Pending</Link></li>
                  <li><Link to="/completed" className="nav-link">Completed</Link></li>
                  <li><Link to="/create" className="nav-link">Create Task</Link></li>
                  <li><Link to="/trash" className="nav-link">Trash</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Route path="/" exact component={PendingList} />
          <Route path="/completed" component={CompletedList} />
          <Route path="/trash" component={TrashList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;