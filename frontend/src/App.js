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
          
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com">
            </a>
            <Link to="/" className="navbar-brand">Todo List App</Link>
            <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/" className="nav-link">Pending</Link>
            </li>
            <li className="navbar-item">
            <Link to="/completed" className="nav-link">Completed</Link>
            </li>
            <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Task</Link>
            </li>
            <li className="navbar-item">
            <Link to="/trash" className="nav-link">Trash</Link>
            </li>
            </ul>
            </div>
          </nav> */}
          <nav>
          <div className="container">
    <div class="nav-wrapper">
      {/* <a href="#" class="brand-logo left">Logo</a> */}
      <ul id="nav-mobile" class="left hide-on-med-and-down">
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