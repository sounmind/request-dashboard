import { useState } from "react";

/**
 * This hook depends on components/MultipleSelectCheckmarks.tsx
 * which using material-ui's way
 */
const useMultiSelect = ({
  name: selecterName,
}: {
  name: string;
}): { selected: string[]; handleChange: (e: any) => void } => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = ({ target: { name, value } }: any) => {
    setSelected(name === selecterName ? value.split(",") : value);
  };

  return { selected, handleChange };
};

export default useMultiSelect;
