import * as React from 'react'
import PropTypes from "prop-types"
import "./social.scss"

const Social = ({ title, link, children }) => {
  return (
    <main>
      <div data-bs-toggle="tooltip" data-bs-placement="top" title={title}>
        <a href={link}>
          <img className="icon" src={children} alt={title} width="64" height="64"></img>
        </a>
      </div>    
    </main>
  )
}

Social.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Social
