import React from "react";
import { useGlobalContext } from "../../Context/DogsContext";

const Dogs = () => {

const {dogs} = useGlobalContext();

    return (
        dogs.length ? 
        (dogs[0].map (dog => (
            <div className="card">
            <div className="card-body">
                <img src={dog} alt="dog" />
            </div>
          </div> 
        ))
        )
        :
        (<div></div>)
    );
  }
  
  export default Dogs;