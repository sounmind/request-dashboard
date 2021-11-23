import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import React from "react";

const ITEM_HEIGHT = 32;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

interface MultipleSelectCheckmarksProps {
  name: string;
  selected: string[];
  options: string[];
  handleChange: (event: any) => void;
}

const MultipleSelectCheckmarks: React.FC<MultipleSelectCheckmarksProps> = ({
  name,
  selected,
  options,
  handleChange,
}) => {
  return (
    <div>
      <FormControl sx={{ mt: 1, mb: 1, width: 150 }}>
        <InputLabel id="multiple-checkbox-label">{name}</InputLabel>
        <Select
          inputProps={{ "aria-label": "Without label" }}
          labelId="multiple-checkbox-label"
          id="multiple-checkbox"
          multiple
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => `${name}(${selected.length})`}
          MenuProps={MenuProps}>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={selected.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelectCheckmarks;
