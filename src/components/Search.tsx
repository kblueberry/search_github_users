import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Search({search}: {search: Function}) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearchInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const getInputValue = () => inputValue;

  return <div className="container d-flex flex-row align-items-baseline my-2">
    <TextField id="standard-basic" label="Type to start search" variant="standard" value={inputValue} onChange={handleSearchInputChange} />
    <Button className="mx-4" variant="contained" onClick={() => search(getInputValue)}>Search</Button>
  </div>
}