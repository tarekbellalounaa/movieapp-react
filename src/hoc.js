import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

const HOC = Component => {
  return props =>
    props.isLoading ? (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    ) : (
      <Component {...props} />
    );
};
export default HOC;
