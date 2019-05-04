import React, { Component } from "react"
import ReactDOM from "react-dom"
import Header from "./header"
import Bio from "./bio"

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <Bio />
      </div>
    )
  }
}

export default App
