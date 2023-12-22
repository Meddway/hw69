import React, {useState, useEffect, ChangeEvent} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Autocomplete from './Autocomplete';
import {SearchResult} from '../../type';

interface ShowDetailsProps {
  name: string;
  summary: string;
  language: string;
  premiered: string;
  image: {
    medium: string;
    original: string;
  };
}

const ShowDetails: React.FC<ShowDetailsProps> = () => {
  const {id} = useParams<{ id: string }>();
  const [showDetails, setShowDetails] = useState<ShowDetailsProps>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShowDetails(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    void fetchShowDetails();
  }, [id]);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    try {
      const response = await axios.get<SearchResult[]>(`https://api.tvmaze.com/search/shows?q=${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  if (!showDetails) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4" style={{maxWidth: '640px'}}>
      <h2>
        <span className="text-primary">Название:</span> {showDetails.name}
      </h2>
      <p>{showDetails.summary}</p>
      <p>
        {' '}
        <span className="text-primary">Language:</span> {showDetails.language}
      </p>
      <p>
        <span className="text-primary">Premiered:</span> {showDetails.premiered}
      </p>
      <img src={showDetails.image.medium} alt={showDetails.name}/>
      <div style={{marginTop: '20px'}}>
        <input
          type="text"
          placeholder="Search for TV shows"
          value={searchQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
        />
      </div>
      <Autocomplete results={searchResults}/>
    </div>
  );
};

export default ShowDetails;