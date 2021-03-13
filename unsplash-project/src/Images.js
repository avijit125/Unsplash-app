import React, { useEffect,useState } from "react";
import Image from "./Image";

const Images = () => {
  const [Data,setData]=useState(null)
  useEffect(() => {
    console.log("avijit");

    fetch(
      "https://api.unsplash.com/photos?query=cat&client_id=DEayZfQHafm0Se7vZ2grZQ-MW1rJTZ-1RvtRHw1pOyk&per_page=20"
    )
      .then((data) => data.json())
      .then((data) =>  setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="row"  style={{marginTop:"40px"}}>
        
          {Data && Data.map((data)=>(
            <Image key={data.id} Data={data}/>
          ))}
            

      </div>
    </>
  );
};

export default Images;
