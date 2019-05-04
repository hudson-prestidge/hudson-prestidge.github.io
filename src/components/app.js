import React, { Component } from "react"
import ReactDOM from "react-dom"
import Header from "./header"
import Bio from "./bio"
import Projects from "./projects"

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <Bio />
        <Projects />
      </div>
    )
  }
}

export default App
