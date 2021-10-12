import React from "react";

import "./Loader.css";

const Loader = ({ loading }) => {
  return (
    <div className={loading.isLoading ? "Loader loading" : "Loader"}>
      <p>{loading.message}</p>
    </div>
  );
};

export default Loader;
