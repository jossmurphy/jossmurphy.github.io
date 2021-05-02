import Header from '../components/Header';
import React, { useState } from 'react';
import {
  PageTitle,
  Subtitle1,
  Subtitle2,
  SubtitleSection,
  BlockQuote,
  Caption,
  P,
  A,
  Button,
  Container,
  CaseStudy,
  Hyperlink,
} from '../styles/global.js';
// import Resume_pdf from '../assets/JocelyneMurphy_Resume.pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// export default function Resume() {
//   return (
//     <div>
//       <Header></Header>
//       <CaseStudy>
//         <Subtitle1>Welcome!</Subtitle1>
//         <Button primary>
//           <A href={Resume_pdf} target="blank">
//             Projects
//           </A>
//         </Button>
//         <Document file={Resume_pdf}></Document>
//       </CaseStudy>
//     </div>
//   );
// }

export default function Resume() {
  return (
    <div>
      <Header></Header>
      {/* <Document file="JocelyneMurphy_Resume.pdf" /> */}
    </div>
  );
}
