import React, { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import { getPictures } from './PixabayService';

import { PicCard } from './PicCard';

const App: React.FC = () => {
  const [response, setResponse] = useState<PixabayResponse>();
  const [keyword, setKeyword] = useState<string>();
  const [category, setCategory] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await getPictures(keyword, category);
    setResponse(response);
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Keyword..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Form.Control as="select" onChange={(e) => setCategory(e.target.value)}>
          <option hidden disabled selected>
            Category...
          </option>
          <option>fashion</option>
          <option>nature</option>
          <option>backgrounds</option>
          <option>science</option>
          <option>education</option>
          <option>people</option>
          <option>feelings</option>
          <option>religion</option>
          <option>health</option>
          <option>places</option>
          <option>animals</option>
          <option>industry</option>
          <option>food</option>
          <option>computer</option>
          <option>sports</option>
          <option>transportation</option>
          <option>travel</option>
          <option>buildings</option>
          <option>business</option>
          <option>music</option>
        </Form.Control>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      {response?.hits.map((hit) => (
        <PicCard hit={hit} />
      ))}
    </div>
  );
};

export default App;
