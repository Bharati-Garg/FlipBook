import React from "react";
import Iframe from "react-iframe";
//import "./App.css";

const PdfFlipbook = () => (
  <Iframe
    src="./pdf-viewer/index.html"
    width="100%"
    height="500px"
    frameBorder="0"
    allowFullScreen
  />
);
export default PdfFlipbook;
