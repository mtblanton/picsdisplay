import React, { useState } from 'react';
import { getPictures } from './PixabayService';
import { PicCard } from './components/PicCard/PicCard';
import { SearchForm } from './components/Form/SearchForm';
import { Saved } from './components/Saved/Saved';

import './App.css';
import './assets/CssReset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const [response, setResponse] = useState<PixabayResponse>();
  const [savedPics, setSavedPics] = useState<PixabayHit[]>();

  const addSavedPic = (picToSave: PixabayHit) => {
    setSavedPics([...(savedPics ?? []), picToSave]);
  };

  const removeSavedPic = (idToRemove: number) => {
    if (!savedPics) {
      return;
    }
    const newSavedPics = savedPics.filter(
      (savedPic) => savedPic.id !== idToRemove
    );
    setSavedPics(newSavedPics);
  };

  const handleSubmit = async (keyword?: string, category?: string) => {
    const response = await getPictures(keyword, category);
    setResponse(response);
  };

  return (
    <div className="main">
      <SearchForm onSubmit={handleSubmit} />
      <div className="main__results">
        {response?.hits.map((hit) => (
          <PicCard
            hit={hit}
            onSavePic={addSavedPic}
            onUnsavePic={removeSavedPic}
            isSaved={savedPics?.map((savedPic) => savedPic.id).includes(hit.id)}
          />
        ))}
      </div>
      <Saved savedPics={savedPics} />
    </div>
  );
};

export default App;
