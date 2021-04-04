import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
import Photo from '../components/Photo';
import arrayMove from 'array-move';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { photos } from '../assets/photos';
import Header from '../components/Header';

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={(props) => <SortablePhoto {...props} />} />
));

export default function Art() {
  const [items, setItems] = useState(photos);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div>
      <img src="../assets/artphotos/authentic"></img>
      <Header></Header>
      <Gallery photos={photos} direction={'column'} />;
      {/* <h2>Sortable Gallery</h2>
      <h3>Drag photo to rearrange</h3>
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={'xy'} /> */}
    </div>
  );
}
