import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import 'font-awesome/css/font-awesome.min.css';
import Navbar from "./components/layout/Navbar";
import PendingList from "./components/pages/PendingList";
import CompletedList from "./components/pages/CompletedList";
import CreateTask from "./components/pages/CreateTask";
import EditTask from "./components/pages/EditTask";
import TrashList from "./components/pages/TrashList";
import './App.scss';


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