import React, { useState } from "react";
import { Board } from "../components/board";
import { Config } from "../components/config/config";
import { Header } from "../components/header";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  ThemeOptions,
  Grid,
  Paper,
} from "@mui/material";
import { IconType } from "../components/Icons";
import { useLocalStorage } from "../hooks/localstorage";
import darkScrollbar from "@mui/material/darkScrollbar";
import { defaultWords } from "../words";

export const Boards = () => {
  const [words, setWords] = useLocalStorage("words", defaultWords);
  const [boardCount, setBoardCount] = useLocalStorage("boardCount", 10);
  const [color, setColor] = useLocalStorage("color", "#3f51b5");
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [icon, setIcon] = useLocalStorage<IconType>("icon", "bingo");

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: {
        main: color,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: isDark ? darkScrollbar() : null,
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
