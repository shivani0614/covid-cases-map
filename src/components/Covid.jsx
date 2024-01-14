import React, { useState } from "react";
import Loading from "./Loading";
import Maps from "./Maps";
import Legend from "./Legend";

const Covid = () => {
  const [countries, setCountries] = useState([]);
  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          {" "}
          <Maps />
          <Legend />
        </div>
      )}
    </div>
  );
};

export default Covid;
