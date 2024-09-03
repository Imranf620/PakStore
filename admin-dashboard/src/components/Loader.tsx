
import React from "react";
import { Audio } from "react-loader-spinner";

const Loader:React.FC = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Audio
          height="80"
          width="80"
          color="green"
          ariaLabel="three-dots-loading"
        />
      </div>
    </>
  );
};

export default Loader;
