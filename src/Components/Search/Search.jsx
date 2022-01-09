import { useState } from "react";
import { useGlobalContext } from "../../Context/DogsContext";

function Search() {
  const { dogs, getRandomDog } = useGlobalContext;
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!search) getRandomDog();
  };

  return (
    <div>
      <h2>Search dogs</h2>
      <form onSubmit={handleSubmit}>
          <div className="input-group w-100 mb-2 p-2">
            <input type="text" className="form-control" placeholder="Please enter dog specie..." onChange={e => setSearch(e.target.value)} />
          </div>
          <div className="input-group w-25 mb-2 p-2">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
      </form>
    </div>
  );
}

export default Search;