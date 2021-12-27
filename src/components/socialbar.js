import * as React from "react"

import Social from "./social"

import envelope from "../images/envelope.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"
import instagram from "../images/instagram.svg"
import spotify from "../images/spotify.svg"

const SocialBar = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <Social  title="Email" link="mailto:matthewrobbarton@gmail.com">
            {envelope}
          </Social>
        </div>
        <div className="col-auto">
          <Social title="LinkedIn" link="https://www.linkedin.com/in/matthewbartontx/">
            {linkedin}
          </Social>
        </div>
        <div className="col-auto">
          <Social className="col-auto" title="GitHub" link="https://github.com/MatthewNavy">
            {github}
          </Social>
        </div>
        <div className="col-auto">
          <Social title="Instagram" link="https://www.instagram.com/matthewbart0n/">
            {instagram}
          </Social>
        </div>
        <div className="col-auto">
          <Social title="Spotify" link="https://open.spotify.com/user/someguymatthew?si=La4-AJDESwOeEeuroyC_cg">
            {spotify}
          </Social>
        </div>
      </div>
      <a
        className="btn btn-link"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Secret Link"
        href="https://www.cs.trinity.edu/~mbarton/WebApps/"
        >
          hehe
      </a>
    </div>
    )
}

export default SocialBar
