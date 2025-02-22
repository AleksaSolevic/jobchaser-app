export interface AllJobProps {
  id: number;
  company: string;
  logo: string;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};
