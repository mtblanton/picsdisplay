import React, { useState, useRef } from 'react';
import { getPictures } from './PixabayService';
import { PicCard } from './components/PicCard/PicCard';
import { SearchForm } from './components/Form/SearchForm';
import { Saved } from './components/Saved/Saved';
import { useInfiniteScroll } from 'react-infinite-scroll-hook';

import './App.css';
import './assets/CssReset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const [lastResponse, setLastResponse] = useState<PixabayResponse>();
  const [hits, setHits] = useState<PixabayHit[]>([]);
  const [savedPics, setSavedPics] = useState<PixabayHit[]>();
  const [isLoading, setIsLoading] = useState(false);

  // These would be a good candidate for redux/context if this needed to be expanded
  const [lastSearchedKeyword, setLastSearchedKeyword] = useState<string>();
  const [lastSearchedCategory, setLastSearchedCategory] = useState<string>();
  const [page, setPage] = useState<number>(1);

  const resultsRef = useRef<HTMLUListElement>(null);

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

  const handleNewSearch = async (keyword?: string, category?: string) => {
    // Since it's a new search we need to go back to the first page
    setPage(1);
    setIsLoading(true);

    try {
      const response = await getPictures(1, keyword, category);
      setLastResponse(response);
      setHits(response.hits);

      setLastSearchedKeyword(keyword);
      setLastSearchedCategory(category);
    } finally {
      setIsLoading(false);
    }

    resultsRef?.current?.scrollTo(0, 0);
  };

  const fetchNextPage = async () => {
    const nextPage = page + 1;

    setIsLoading(true);
    try {
      const response = await getPictures(
        nextPage,
        lastSearchedKeyword,
        lastSearchedCategory
      );

      setPage(nextPage);
      setLastResponse(response);
      setHits([...hits, ...response.hits]);
    } finally {
      setIsLoading(false);
    }
  };

  const infiniteScrollRef = useInfiniteScroll<HTMLUListElement>({
    loading: isLoading,
    // 20 is default page size, would need to change 20 to variable if we make it changeable
    hasNextPage: (lastResponse?.total ?? 0) > page * 20,
    onLoadMore: fetchNextPage,
    scrollContainer: 'parent',
    threshold: 500,
  });
  return (
    <div className="main">
      <SearchForm onSubmit={handleNewSearch} />
      <div className="main__results">
        <ul ref={infiniteScrollRef}>
          {hits.map((hit) => (
            <PicCard
              key={hit.id}
              hit={hit}
              onSavePic={addSavedPic}
              onUnsavePic={removeSavedPic}
              isSaved={savedPics
                ?.map((savedPic) => savedPic.id)
                .includes(hit.id)}
            />
          ))}
        </ul>
      </div>
      <Saved savedPics={savedPics} />
    </div>
  );
};

export default App;
