import { Button, TextField } from "@mui/material";

export default function Search() {
  return <div className="container d-flex flex-row align-items-end my-2">
    <TextField id="standard-basic" label="Type to start search" variant="standard" />
    <Button className="mx-4" variant="contained">Search</Button>
  </div>
}