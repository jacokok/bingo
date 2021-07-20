import React, { useState } from "react";
import { Board } from "../components/board";
import { Config } from "../components/config/config";
import { Header } from "../components/header";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme, Grid, Paper } from "@material-ui/core";
import { IconType } from "../components/Icons";

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
  const [boardCount, setBoardCount] = useState(10);
  const [color, setColor] = useState("#3f51b5");
  const [isDark, setIsDark] = useState(false);
  const [icon, setIcon] = useState<IconType>("bingo");

  const theme = createTheme({
    palette: {
      type: isDark ? "dark" : "light",
      primary: {
        main: color,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ background: theme.palette.background.default }}>
        <Header isDark={isDark} setIsDark={setIsDark} />

        <Grid container justifyContent="center">
          <Config
            words={words}
            setWords={setWords}
            boardCount={boardCount}
            setBoardCount={setBoardCount}
            color={color}
            setColor={setColor}
            icon={icon}
            setIcon={setIcon}
          />
          <Board words={words} boardCount={boardCount} icon={icon} />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};
