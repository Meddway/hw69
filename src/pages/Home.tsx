import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import Autocomplete from '../components/Autocomplete';
import {SearchResult} from "../../type";

const Home: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  return (
    <div className="m-3" style={{ maxWidth: '640px' }}>
      <h1>Search for tv shows</h1>
      <SearchInput setSearchResults={setSearchResults} />
      {searchResults.length > 0 && <Autocomplete results={searchResults} />}
    </div>
  );
};

export default Home;
