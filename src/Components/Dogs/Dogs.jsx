import React from "react";
import { useGlobalContext } from "../../Context/DogsContext";

const Dogs = () => {

const {dogs} = useGlobalContext();

    return (
        dogs.length && dogs.map (dog => (
            <div className="card">
            <div className="card-body">
                <img src={dog} alt="dog" />
            </div>
          </div> 
        ))
    );
  }
  
  export default Dogs;