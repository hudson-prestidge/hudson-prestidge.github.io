import React, { Component } from "react"
import ReactDOM from "react-dom"
import BakeryProject from "./bakeryProject"
import NoteProject from "./noteProject"

class Projects extends Component {
  render() {
    return (
      <div className="recent-projects-container">
        <h2> Recent Projects </h2>
        <BakeryProject />
        <NoteProject />
      </div>
    )
  }
}

export default Projects
