import React from "react";
import { Grid, Input } from "@nextui-org/react";

function FilterForm({ onChange }) {

  const handleFilter = (event) => {
    onChange(event.target.value);
  };

  return (
    <Grid.Container css={{ mt: "1rem" }} justify="space-around">
      <Input
        clearable
        bordered
        type="text"
        onChange={handleFilter}
        placeholder="Filter Movies"
      />
    </Grid.Container>
  );
}
export default FilterForm;
