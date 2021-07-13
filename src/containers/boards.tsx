import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import { Board } from "../components/board/board";
import { Config } from "../components/config/config";
import { Header } from "../components/header";

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
  const [preview, setPreview] = useState(false);
  const [boardCount, setBoardCount] = useState(1);

  const boards = [...Array(boardCount)].map((e, i) => {
    return <Board words={words} />;
  });

  // const rows = [0, 1, 2, 3, 4].map((value) => {
  //   return (
  //     <Row
  //       key={"row_" + value}
  //       getRandomWord={getRandomWord}
  //       centerItem={value == 2}
  //     />
  //   );
  // });

  return (
    <React.Fragment>
      <Header />
      <Config boardCount={boardCount} setBoardCount={setBoardCount} />
      {boards}
    </React.Fragment>
  );
};
