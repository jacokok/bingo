import React, { useState } from "react";
import pdflib from "@react-pdf/renderer";
import { Button, CircularProgress } from "@material-ui/core";
import { saveAs } from "file-saver";
import { PDFDocument } from "./Document";
import { IconType } from "../Icons";
import { debounce } from "../../utils/utils";

const { pdf } = pdflib;

interface Props {
  words: Array<string>;
  boardCount: number;
  color: string;
  icon: IconType;
}

export const DownloadButton = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const download = async () => {
    setIsLoading(true);
    await downloadPDF();
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

  const deboucnedDownloadPDF = debounce(downloadPDF, 100);

  return (
    <React.Fragment>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Button
          onClick={download}
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
