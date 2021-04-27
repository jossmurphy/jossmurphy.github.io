import { photos } from '../assets/photos';
import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
import Photo from '../components/Photo';
import arrayMove from 'array-move';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Header from '../components/Header';
import {
  PageTitle,
  Subtitle1,
  Subtitle2,
  SubtitleSection,
  BlockQuote,
  Caption,
  P,
  CaseStudy,
  Hyperlink,
  HeroDiv,
  HeroImage,
} from '../styles/global.js';

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={(props) => <SortablePhoto {...props} />} />
));

// const shuffleGallery = (photos) => {
//   shuffle(photos);
// };

export default function Art() {
  // const [items, setItems] = useState(photos);
  // const onSortEnd = ({ oldIndex, newIndex }) => {
  //   setItems(arrayMove(items, oldIndex, newIndex));
  // };
  // console.log(photos);

  // const [photos, setPhotos] = React.useState(shuffleGallery(photos));

  return (
    <div>
      <Header></Header>
      <PageTitle> . </PageTitle>
      <Gallery
        photos={photos}
        direction={'column'}
        margin={4}
        // onClick={() => {
        //   for (let i = photos.length - 1; i > 0; i--) {
        //     const j = Math.floor(Math.random() * i);
        //     const temp = photos[i];
        //     photos[i] = photos[j];
        //     photos[j] = temp;
        //   }

        //   setPhotos(photos);
        // }}
      />
      ;
      {/* <h2>Sortable Gallery</h2>
      <h3>Drag photo to rearrange</h3>
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={'xy'} /> */}
    </div>
  );
}
