import * as React from 'react'
import PropTypes from "prop-types"

const Skill = ({ title, list }) => {
  return (
    <main>
      <ul className="list-group">
        <li className="list-group-item list-group-item-dark">
          <div className="fw-bold">
            {title}
          </div>
        </li>
        {list.map(item => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>  
    </main>
  )
}

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
}

export default Skill
