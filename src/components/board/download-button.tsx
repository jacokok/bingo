import React from "react";
import pdflib from "@react-pdf/renderer";
import { Button } from "@material-ui/core";
import { saveAs } from "file-saver";
import { PDFDocument } from "./document";

const { pdf } = pdflib;

interface ParentProps {
  words: Array<string>;
  boardCount: number;
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
  isPreview: boolean;
}

interface Props {
  words: Array<string>;
  boardCount: number;
  color: string;
}

export const DownloadButton = (props: Props) => {
  console.log("props changed");

  const downloadPDF = async () => {
    console.log("dong asldfk changed");
    const asPdf = pdf([] as any);
    const MyDoc = (
      <PDFDocument
        words={props.words}
        boardCount={props.boardCount}
        color={props.color}
      />
    );
    asPdf.updateContainer(MyDoc);
    const blob = await asPdf.toBlob();
    saveAs(blob, "document.pdf");
  };
  return (
    <React.Fragment>
      <Button onClick={downloadPDF} variant="contained" color="primary">
        Download PDF
      </Button>
    </React.Fragment>
  );
};
