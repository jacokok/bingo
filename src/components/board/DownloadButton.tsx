import React, { useState } from "react";
import pdflib from "@react-pdf/renderer";
import { Button, CircularProgress } from "@mui/material";
import { saveAs } from "file-saver";
import { PDFDocument } from "./Document";
import { IconType } from "../Icons";

const { pdf } = pdflib;

interface Props {
  words: Array<string>;
  boardCount: number;
  color: string;
  icon: IconType;
}

export const DownloadButton = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const downloadPDF = async () => {
    setIsLoading(true);
    const blob = await pdf(
      <PDFDocument
        words={props.words}
        boardCount={props.boardCount}
        color={props.color}
        icon={props.icon}
      />
    ).toBlob();
    saveAs(blob, "document.pdf");
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Button
          onClick={downloadPDF}
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
