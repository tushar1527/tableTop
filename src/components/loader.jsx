import React from "react";
import { Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="grow" size="lg" />
    </div>
  );
};
