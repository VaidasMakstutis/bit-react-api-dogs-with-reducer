import React, { useState } from "react";
import { useGlobalContext } from "../../Context/DogsContext";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const Search = () => {
  const { getRandomDog, getSearchDog } = useGlobalContext();
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!search) getRandomDog();
    else getSearchDog(search);
  };

  return (
    <div>
      <h2>Search dogs</h2>
      <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-2 w-25">
            <Form.Control onChange={e => setSearch(e.target.value)} placeholder="Please enter dog specie..." />
            <Button variant="btn btn-primary" type="submit">{search ? "Search" : "Get random dog"}</Button>
      </InputGroup>
      </Form>
    </div>
  );
}

export default Search;