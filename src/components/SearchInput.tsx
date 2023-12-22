import React, { useState, ChangeEvent } from 'react';
import {Show} from "../../type";
import axios from 'axios';

interface SearchResult {
  show: Show;
}

interface SearchInputProps {
  setSearchResults: React.Dispatch<React.SetStateAction<SearchResult[]>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ setSearchResults }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get<SearchResult[]>(`https://api.tvmaze.com/search/shows?q=${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    void handleSearch(value);
  };

  return <input type="text" placeholder="Search for TV shows" value={query} onChange={handleChange} />;
};

export default SearchInput;
