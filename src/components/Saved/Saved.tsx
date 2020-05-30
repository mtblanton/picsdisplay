import React from 'react';

import { ReactComponent as ExternalLink } from '../../assets/external-link.svg';

import './Saved.css';

type SavedProps = {
  savedPics?: PixabayHit[];
};

export const Saved: React.FC<SavedProps> = ({ savedPics = [] }) => {
  return (
    <div className="saved__container">
      <span className="saved__title">Saved</span>
      {savedPics.map((savedPic) => (
        <a href={savedPic.pageURL} className="saved__link" key={savedPic.id}>
          {`#${savedPic.id}`} <ExternalLink className="text-icon" />
        </a>
      ))}
    </div>
  );
};
