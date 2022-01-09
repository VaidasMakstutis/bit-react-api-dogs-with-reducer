import React from "react";
import { useGlobalContext } from "../../Context/DogsContext";

const Dogs = () => {

const {dogs} = useGlobalContext();

    return (
        dogs.length && dogs.map (d => (
            <div className="card">
            <div className="card-body">
                <img src={d} alt='dog' />
            </div>
          </div> 
        ))
    );
  }
  
  export default Dogs;