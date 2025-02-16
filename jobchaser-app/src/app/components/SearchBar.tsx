import { SearchBarProps } from "../../../types/types";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Search for a job..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </>
  );
}
