import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {

  return(
    <div className="header">
      <h1>Hacker News Clone</h1>
      <div className="nav-link">
        <NavLink to="/top" style={
            ({isActive}) => (
            isActive 
            ? {
                textDecoration: 'none',
                color: 'red',
                fontWeight: 'bold'
              }
            :{}
            )
          } 
        >
          Top Stories
        </NavLink>
        <NavLink to="/new" style={
            ({isActive}) => (
            isActive 
            ? {
                textDecoration: 'none',
                color: 'red',
                fontWeight: 'bold'
              }
            :{}
            )
          } >
          Latest Stories
        </NavLink>
        <NavLink to="/best" style={
            ({isActive}) => (
            isActive 
            ? {
                textDecoration: 'none',
                color: 'red',
                fontWeight: 'bold'
              }
            :{}
            )
          } >
          Best Stories
        </NavLink>
      </div>
    </div>
  )
  
}

export default Header