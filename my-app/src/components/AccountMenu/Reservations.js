import { MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

const Reservations = () => {
  const [tableNumber, setTableNumber] = useState(2);

  const changeTableNumber = (event) => {
    setTableNumber(event.target.value);
  };

  return (
    <div>
      <Select
        label="Броя на гости"
        variant="outlined"
        fullWidth
        margin="normal"
        value={tableNumber}
        onChange={changeTableNumber}
      >
        <MenuItem value={2}>Маса за двама</MenuItem>
        <MenuItem value={3}>Маса за четирима</MenuItem>
        <MenuItem value={6}>Семейна маса (4 - 6 човека)</MenuItem>
        <MenuItem value={10}>Маса за празненства (6+ човека)</MenuItem>
      </Select>

      <TextField
        label="Дата на резервацията"
        variant="outlined"
        fullWidth
        margin="normal"
      >
        Time
      </TextField>

      <TextField
        label="Час на резервацията"
        variant="outlined"
        fullWidth
        margin="normal"
      >
        Date
      </TextField>

      <TextField label="Поводс" variant="outlined" fullWidth margin="normal">
        Event
      </TextField>
    </div>
  );
};

export default Reservations;
