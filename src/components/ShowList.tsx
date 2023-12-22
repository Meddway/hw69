import React from 'react';
import { Link } from 'react-router-dom';
import {Show} from '../../type';

interface ShowListProps {
  shows: Show[];
}

const ShowList: React.FC<ShowListProps> = ({ shows }) => {
  return (
    <div>
      <h2>TV Shows</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <Link to={`/shows/${show.id}`}>{show.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
