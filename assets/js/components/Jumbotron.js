import React from "react";
import './Jumbotron.css';

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h2 className="colorful-text">
        Welcome to Phoenix with Webpack and React
        <span className="version">v2</span>
      </h2>
      <p className="lead">
        A productive web framework that<br />
        does not compromise speed and maintainability.
      </p>
      <p className="lead">
        <a href="http://whatdidilearn.info/2018/05/20/how-to-use-webpack-and-react-with-phoenix-1-3.html">
          Read the full article
        </a>
      </p>
    </div>
  )
};

export default Jumbotron;
