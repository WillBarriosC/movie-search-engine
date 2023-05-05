import React, { useState } from "react";
import { Button, Grid, Input, Spacer } from "@nextui-org/react";

function SearchForm({ onSubmit }) {
  const [movie, setMovie] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(movie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid.Container css={{ mt: "1rem" }} justify="center">
        <Input
          clearable
          bordered
          type="text"
          value={movie}
          onChange={(event) => setMovie(event.target.value)}
          placeholder="Search Movies"
        />
        <Spacer x={0.5} />
        <Button type="submit" color="gradient" auto ghost>
          Send
        </Button>
      </Grid.Container>
    </form>
  );
}
export default SearchForm;
