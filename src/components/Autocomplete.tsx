import React from 'react';
import { Link } from 'react-router-dom';
import {SearchResult} from "../../type";


interface AutocompleteProps {
  results: SearchResult[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ results }) => {
  return (
    <div className="container mt-4">
      <ul className= "mt-3">
        {results.map((result) => (
          <li key={result.show.id} className="list-group-item">
            <Link to={`/shows/${result.show.id}`}>{result.show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
