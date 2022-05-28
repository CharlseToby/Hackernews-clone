import React from "react"
import { Link } from "react-router-dom"

const PageNotFound = () => {

  return(
    <div className="pageNotFound">
      Page not found. Return <Link to="/">Home</Link>
    </div>
  );
};

export default PageNotFound