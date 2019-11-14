import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Navbar extends Component {

    render() {
        return (
          <nav>
          <div className="container">
            <div className="nav-wrapper">
              <ul id="nav-mobile" className="left">
                <li>
                  <Link to="/" className="nav-link">
                    <span><i className="fa fa-list"></i></span>
                    <span className="hide-on-med-and-down">{' '}Pending</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/completed" className="nav-link">
                      <span><i className="fa fa-check-square-o" ></i></span>
                      <span className="hide-on-med-and-down">{' '}Completed</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/create" className="nav-link"> 
                      <span><i className="fa fa-plus-circle"></i></span>
                      <span className="hide-on-med-and-down">{' '}New Task</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/trash" className="nav-link">
                      <span><i className="fa fa-trash"></i></span>
                      <span className="hide-on-med-and-down">{' '}Trash</span>
                    </Link>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
        )
    }
}
