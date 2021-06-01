import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './header.css'

const Header = props => (
  <nav className="header-bar">
    <div className="limiter">
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <div className="w-controls">
        <a className="w-control w-minimize" href="">{ props.minimize }</a>
        <a className="w-control w-maximize" href="">{ props.maximize }</a>
        <a className="w-control w-close" href="">{ props.close }</a>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  title: PropTypes.string,
  minimize: PropTypes.string,
  maximize: PropTypes.string,
  clos: PropTypes.string,
}

Header.defaultProps = {
  title: "is Empty",
  minimize: "_",
  maximize: "[]",
  close: "X"
}

export default Header