import React from "react";

const Image = ({ Data }) => {
  return (
    <div className="col-md-3">
      <div className="card">
        {Data.alt_description ? <h3 className="card-header">{Data.alt_description}</h3> : <h3>IMAGE WITH NO DESCRIPTION</h3> }
        <img className="card-img" src={Data.urls.regular} />
      </div>
    </div>
  );
};

export default Image;
