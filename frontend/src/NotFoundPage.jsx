import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <div>404 - Page Not Found</div>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
