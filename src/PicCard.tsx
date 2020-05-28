import React from 'react';
import Card from 'react-bootstrap/Card';

type PicCardProps = {
  hit: PixabayHit;
};

export const PicCard: React.FC<PicCardProps> = ({ hit }) => {
  return (
    <Card>
      <img
        src={hit.previewURL}
        alt={hit.tags}
        height={hit.previewHeight}
        width={hit.previewWidth}
      />
      {hit.tags.split(', ').map((tag) => (
        <div>{tag}</div>
      ))}
      <div>{hit.likes}</div>
      <div>{hit.favorites}</div>
    </Card>
  );
};
