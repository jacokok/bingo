import React from "react";
import pdf from "@react-pdf/renderer";

import Roboto from "../../fonts/Roboto-Regular.ttf";
import RobotoBold from "../../fonts/Roboto-Bold.ttf";
import { Row } from "./row";

const {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  Font,
} = pdf;

interface Props {
  color: string;
  words: Array<string>;
  boardCount: number;
}

Font.register({
  family: "Roboto",
  fonts: [
    { src: Roboto },
    {
      src: RobotoBold,
      fontWeight: 700,
    },
  ],
});

export const PDFDocument = (props: Props) => {
  const existing: any = [];
  const getRandomWord = () => {
    var retry = 0;
    var word = props.words[Math.floor(Math.random() * props.words.length)];
    while (existsInArray(word) && retry < 10000) {
      word = props.words[Math.floor(Math.random() * props.words.length)];
      retry++;
    }
    existing.push(word);
    return word;
  };

  const existsInArray = (val: any) => {
    for (var i = 0; i <= existing.length; i++) {
      if (existing[i] == val) {
        return true;
      }
    }
    return false;
  };

  const docStyles = StyleSheet.create({
    page: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    table: {},
    row: {
      flexDirection: "row",
    },
    th: {
      width: 120,
      height: 60,
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "white",
      color: props.color,
      margin: "-2pt",
      border: "2pt  0   0  2pt solid " + props.color,
      fontSize: 22,
      fontWeight: 700,
      fontFamily: "Roboto",
    },
    td: {
      width: 120,
      height: 60,
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: "white",
      color: props.color,
      margin: "-2pt",
      border: "2pt  0   0  2pt solid " + props.color,
      fontSize: 10,
      fontFamily: "Roboto",
    },
  });

  const doc = () => {
    return (
      <View style={docStyles.table}>
        <View style={docStyles.row}>
          <View style={docStyles.th}>
            <Text>B</Text>
          </View>
          <View style={docStyles.th}>
            <Text>I</Text>
          </View>
          <View style={docStyles.th}>
            <Text>N</Text>
          </View>
          <View style={docStyles.th}>
            <Text>G</Text>
          </View>
          <View style={docStyles.th}>
            <Text>O</Text>
          </View>
        </View>
        <Row style={docStyles} getRandomWord={getRandomWord} />
      </View>
    );
  };

  const rows = [...Array(props.boardCount)].reduce(function (rows, key, index) {
    return (
      (index % 2 == 0
        ? rows.push([index])
        : rows[rows.length - 1].push(index)) && rows
    );
  }, []);

  const boards = rows.map((row) => {
    return (
      <Page size="A4" style={docStyles.page}>
        {row.map(() => doc())}
      </Page>
    );
  });

  // rows.map(row => (
  //   <Row >
  //   { row.map(col => (<Col>{col}</Col>)) }
  //   </Row>
  // ))

  // const boards = [...Array(props.boardCount)].map((e, i) => {
  //   return (
  //     <Page size="A4" style={docStyles.page}>
  //       {doc()}
  //     </Page>
  //   );
  // });

  return (
    <PDFViewer height={700} style={{ width: "100%" }}>
      <Document>{boards}</Document>
    </PDFViewer>
  );
};
