import React from "react";
import GatsbyLink from "gatsby-link";

export default () => (
  <div style={{ color: `tomato` }}>
    Hello!
    <br />{" "}
    <div>
      <GatsbyLink to="/page2/">Link</GatsbyLink>
      <br />
      <GatsbyLink to="/page3/">Another link</GatsbyLink>
    </div>
  </div>
);
