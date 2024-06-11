import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

const EntryForm = () => {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [links, setLinks] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/entries', { content, tags: tags.split(','), links: links.split(',') });
      history.push('/entries');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Entry</h2>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your entry here..." required />
      <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma separated)" />
      <input type="text" value={links} onChange={(e) => setLinks(e.target.value)} placeholder="Links (comma separated)" />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default EntryForm;
