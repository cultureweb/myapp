import React from "react";

const home = () => {
  // for test only
  const isAuthenticated = true;
  return isAuthenticated ? <p>home</p> : <p>Please login</p>;
};

export default home;
