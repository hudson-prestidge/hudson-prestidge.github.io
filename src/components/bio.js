import React, { Component } from "react"
import ReactDOM from "react-dom"

class Bio extends Component {
  render() {
    return (
      <div className="bio-container">
        <img className="bio-image" src="img/potato2.png" />
        <p className="bio-blurb"> Thanks for taking the time to look at my portfolio!
        I built this to showcase some of my more recent web development work and highlight
        the new technologies used in each project. I'm currently seeking employment, and for
        more info my linkedin is
        available <a href="https://www.linkedin.com/in/hudson-prestidge-b31802125/">here</a> and my github is available <a href="https://github.com/hudson-prestidge">here</a>. I hope
        you enjoy my work, and if you have any questions or suggestions feel free to contact me
        via one of those profiles.
        </p>
      </div>
    )
  }
}

export default Bio
