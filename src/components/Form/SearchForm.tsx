import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './SearchForm.css';

type SearchFormProps = {
  onSubmit: (keyword?: string, category?: string) => void;
};

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState<string>();
  const [category, setCategory] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(keyword, category);
  };

  return (
    <Form onSubmit={handleSubmit} className="search-form__form">
      <Form.Control
        name="keyword"
        type="text"
        placeholder="Keyword..."
        onChange={(e) => setKeyword(e.target.value.trim())}
      />
      <Form.Control
        name="category"
        as="select"
        onChange={(e) => setCategory(e.target.value)}
        defaultValue=""
      >
        <option value="" data-default>
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
      <Button
        variant="primary"
        size="lg"
        type="submit"
        className="search-form__button"
      >
        Search
      </Button>
    </Form>
  );
};
