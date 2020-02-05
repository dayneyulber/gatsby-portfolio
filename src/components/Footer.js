import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <ul className="icons">
      <li>
        <a href="https://codebushi.com" className="icon fa-linkedin">
          <span className="label">linkedin</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/codebushi/gatsby-starter-dimension"
          className="icon fa-github"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
    <p className="copyright"> copyright &copy; Dayne Beronque 2020</p>
  </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
