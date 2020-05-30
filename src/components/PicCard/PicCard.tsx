import React from 'react';

import Star from '../../assets/star.svg';
import ThumbsUp from '../../assets/thumbs-up.svg';

import './PicCard.css';

type PicCardProps = {
  hit: PixabayHit;
  onSavePic: (picToSave: PixabayHit) => void;
  onUnsavePic: (idToRemove: number) => void;
  isSaved?: boolean;
};

export const PicCard: React.FC<PicCardProps> = ({
  hit,
  onSavePic,
  onUnsavePic,
  isSaved,
}) => {
  const handleSavePic = () => {
    onSavePic(hit);
  };

  const handleUnsavePic = () => {
    onUnsavePic(hit.id);
  };

  return (
    <div className="pic-card__container">
      <button
        className="pic-card__pic-container"
        onClick={isSaved ? handleUnsavePic : handleSavePic}
      >
        <img src={hit.webformatURL} alt={hit.tags} className="pic-card__pic" />
        <div
          //  Would've used classnames here but I didn't want to install it for only one use
          className={`pic-card__save-button ${
            isSaved ? 'pic-card__save-button--saved' : ''
          }`}
        >
          {isSaved ? 'Saved' : 'Save'}
        </div>
      </button>
      <div className="pic-card__tags-container">
        {hit.tags.split(', ').map((tag) => {
          const tagToDisplay = tag.trim();
          return (
            tagToDisplay.length > 0 && (
              <div className="pic-card__tag" key={tag}>
                {tag}
              </div>
            )
          );
        })}
      </div>
      <div className="pic-card__social">
        <div className="pic-card__count">
          <span>{hit.likes}</span>{' '}
          <img src={ThumbsUp} alt="Likes" className="text-icon" />
        </div>
        <div className="pic-card__count">
          <span>{hit.favorites}</span>
          <img src={Star} alt="Favorites" className="text-icon" />
        </div>
      </div>
    </div>
  );
};
