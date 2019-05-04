import React, { Component } from "react"
import ReactDOM from "react-dom"

class BakeryProject extends Component {
  render() {
    return (
      <div className="project-container">
        <img src="img/go-bakery-screenshot.png" className="project-screenshot"/>
        <p className="project-blurb"> Go bakery is a website that I put together for a fictional bakery. Before
        building this site I was largely unfamiliar with typescript, sass, and go and had minimal experience
        with writing raw sql (having previously mostly worked through node libraries such as knex). As such,
        manipulating a database to manage authentication and sometimes multiple joins at once in Go was a
        great learning experience. A SSL certificate was omitted <strong>only</strong> to mitigate costs with the knowledge that
        this site would see minimal use, as doing so with authentication would normally be unthinkable.</p>
        <p className="project-links"> The app is hosted live on heroku <a href="https://go-bakery.herokuapp.com/">here</a> and
        the source code is available <a href="https://github.com/hudson-prestidge/go-bakery">here</a>.</p>
      </div>
    )
  }
}

export default BakeryProject
