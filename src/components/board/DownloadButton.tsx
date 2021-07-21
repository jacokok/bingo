import React, { useState } from "react";
import pdflib from "@react-pdf/renderer";
import { Button, CircularProgress } from "@material-ui/core";
import { saveAs } from "file-saver";
import { PDFDocument } from "./Documents";
import { IconType } from "../Icons";
import * as worker from "../../workers/DownloadWorker";

const { pdf } = pdflib;

interface Props {
  words: Array<string>;
  boardCount: number;
  color: string;
  icon: IconType;
}

export const DownloadButton = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const test = async () => {
    worker.postMessage();
    console.log(worker);
  };

  const downloadPDF = async () => {
    setIsLoading(true);
    const asPdf = pdf([] as any);
    const MyDoc = (
      <PDFDocument
        words={props.words}
        boardCount={props.boardCount}
        color={props.color}
        icon={props.icon}
      />
    );
    asPdf.updateContainer(MyDoc);
    const blob = await asPdf.toBlob();
    saveAs(blob, "document.pdf");
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Button
          onClick={test}
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          Download PDF
        </Button>
      )}
    </React.Fragment>
  );
};
