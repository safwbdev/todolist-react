import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import 'font-awesome/css/font-awesome.min.css';
import CreateTask from "./components/create-todo.component";
import EditTask from "./components/edit-todo.component";
import PendingList from "./components/PendingList";
import CompletedList from "./components/CompletedList";
import TrashList from "./components/TrashList";
import Navbar from "./components/Navbar";


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <Route path="/" exact component={PendingList} />
          <Route path="/completed" component={CompletedList} />
          <Route path="/trash" component={TrashList} />
          <Route path="/edit/:id" component={EditTask} />
          <Route path="/create" component={CreateTask} />
        </div>
      </Router>
    );
  }
}

export default App;