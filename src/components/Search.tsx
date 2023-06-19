import { type ChangeEvent, useState } from "react";

type SearchProps = {
  onSearchClick: (question: string) => Promise<void>;
};

export const Search = ({ onSearchClick }: SearchProps) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleClick = async () => {
    await onSearchClick(value);
  };

  return (
    <div>
      <input
        placeholder={"Ask a question..."}
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Ask!</button>
    </div>
  );
};
