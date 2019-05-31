import React, { Component } from "react"
import ReactDOM from "react-dom"

class NoteProject extends Component {
  render() {
    return (
      <div className="project-container">
        <p className="project-links"> The app is hosted live on heroku <a href="https://note-taking-express.herokuapp.com/">here</a> and
        the source code is available <a href="https://github.com/hudson-prestidge/note-taking-express">here</a>.</p>
        <p className="project-blurb"> Note taking express is a very minimal note-taking app
        I put together to start off this portfolio. It uses largely basic html/css/js and a node backend,
        using express as a server, knex to manage the database connection and mocha for testing. It otherwise uses
        very few external libraries - a conscious decision to have this as a starting point for the portfolio. It also contains no
        user authentication, so any notes created are shared between all users of the site. It was mostly an exercise of CRUD operations
        for a database.</p>
        <img src="img/note-taking-screenshot.png" className="project-screenshot"/>
      </div>
    )
  }
}

export default NoteProject
