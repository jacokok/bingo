import React, { useState } from "react";
import pdflib from "@react-pdf/renderer";
import { Button, CircularProgress } from "@material-ui/core";
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
  const [isLoading, setIsLoading] = useState(false);

  const downloadPDF = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };
  return (
    <React.Fragment>
      <Button
        onClick={downloadPDF}
        variant="contained"
        color="primary"
        disabled={isLoading}
      >
        Download PDF
      </Button>
      {isLoading && <CircularProgress />}
    </React.Fragment>
  );
};
