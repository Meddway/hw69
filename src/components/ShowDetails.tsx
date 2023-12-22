import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

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

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`http://api.tvmaze.com/shows/${id}`);
        setShowDetails(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    void fetchShowDetails();
  }, [id]);

  if (!showDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Name: {showDetails.name}</h2>
      <p>{showDetails.summary}</p>
      <p>Language: {showDetails.language}</p>
      <p>Premiered: {showDetails.premiered}</p>
      <img src={showDetails.image.medium} alt={showDetails.name}/>
    </div>
  );
};

export default ShowDetails;
