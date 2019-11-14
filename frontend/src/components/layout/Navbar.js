import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    render() {
        return (
          <nav>
            <div className="nav-wrapper teal">
              <div className="container">
                <ul id="" className="left">
                  <li className="brand-logo hide-on-med-and-down">TODO LIST</li>
                  <li>
                    <Link to="/">
                      <span><i className="fa fa-list"></i></span>
                      <span className="hide-on-small-only">{' '}Pending Tasks</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/completed">
                        <span><i className="fa fa-check-square-o" ></i></span>
                        <span className="hide-on-small-only">{' '}Completed Tasks</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/create"> 
                        <span><i className="fa fa-plus-circle"></i></span>
                        <span className="hide-on-small-only">{' '}New Task</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/trash">
                        <span><i className="fa fa-trash"></i></span>
                        <span className="hide-on-small-only">{' '}Trash</span>
                      </Link>
                    </li>
                  </ul>
              </div>
            </div>
          </nav>
        )
    }
}
