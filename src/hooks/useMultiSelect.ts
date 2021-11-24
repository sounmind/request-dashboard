import { useState } from "react";

/**
 * This hook depends on components/MultipleSelectCheckmarks.tsx
 * which using material-ui's way
 */
const useMultiSelect = ({
  name: selecterName,
  options,
}: {
  name: string;
  options: string[];
}): {
  selected: string[];
  handleChange: (e: any) => void;
  handleReset: () => void;
} => {
  const [selected, setSelected] = useState<string[]>(options);

  const handleChange = ({ target: { name, value } }: any) => {
    setSelected(name === selecterName ? value.split(",") : value);
  };

  const handleReset = () => {
    setSelected([...options]);
  };

  return { selected, handleChange, handleReset };
};

export default useMultiSelect;
