import React, { useEffect, useState } from 'react';
import api from '../services/api';

const EntryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await api.get('/api/entries');
        setEntries(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div>
      <h2>Your Entries</h2>
      {entries.map((entry) => (
        <div key={entry._id}>
          <p>{entry.date}</p>
          <p>{entry.content}</p>
          <p>Tags: {entry.tags.join(', ')}</p>
          <p>Links: {entry.links.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
