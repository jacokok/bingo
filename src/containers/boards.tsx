import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import { Board } from "../components/board";
import { Config } from "../components/config/config";
import { Header } from "../components/header";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core";
import pdf from "@react-pdf/renderer";
const { PDFViewer } = pdf;

const defaultWords = [
  "Handdoeke",
  "Badmatjie",
  "Laken",
  "Pas laken",
  "Kussing slope",
  "Vaddoeke",
  "Waslappe",
  "Sout potjie",
  "Peper potjie",
  "Asyn houer",
  "Olie houer",
  "Koek pan",
  "Muffin pan",
  "Brood pan",
  "Ys houer",
  "Messe",
  "Vurke",
  "Lepels",
  "Tee koppies",
  "Tee pot",
  "Tee lepels",
  "Koek staander",
  "Glase",
  "Wit wyn glase",
  "Rooi wyn glase",
  "Whiskey glase",
  "Tupperware",
  "Koek roller",
  "Waspoeier houer",
  "Koek blik",
  "Koffie bekers",
  "Tee koppie",
  "Sny bord",
  "Hour bord",
  "Kaas bord",
  "Kaas Mes",
  "Sop lepel",
  "Mash drukker",
  "Sker",
  "Spatula",
  "Kaas snyer",
  "Rasper",
  "Sif",
  "Maatbeker",
  "Maat lepels",
  "Mandjies",
  "Caserole",
  "Cake lifter",
  "Op-skep bakke",
  "Tert bak",
  "Koffie houer",
  "Tee houer",
  "Kerse",
  "Plantjies",
  "Handy Andy",
  "Waspoeier",
  "Sunlight Liquid",
  "Doom",
  "Speserye",
  "Blompot",
  "Kussings",
  "Lekker ruik stokkies",
  "Houtlepel",
  "Borde",
  "Klein bordjies",
  "Bakkies",
  "Sop Bakkies",
  "Melk beker",
  "Suiker pot",
];

export const Boards = () => {
  const [words, setWords] = useState(defaultWords);
  const [isPreview, setIsPreview] = useState(false);
  const [boardCount, setBoardCount] = useState(1);
  const [color, setColor] = useState("#3f51b5");

  const useStyles = makeStyles({
    hideprint: {
      [`@media print`]: {
        display: "none",
      },
    },
  });
  const styles = useStyles();

  const theme = createTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Header styles={styles} />
      <Config
        boardCount={boardCount}
        setBoardCount={setBoardCount}
        styles={styles}
        color={color}
        setColor={setColor}
      />
      <Board
        words={words}
        boardCount={boardCount}
        setIsPreview={setIsPreview}
        isPreview={isPreview}
      />
    </ThemeProvider>
  );
};
