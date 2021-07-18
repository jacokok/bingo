import React from "react";
import CSS from "csstype";
import "./board.css";
import { ChildFriendly } from "@material-ui/icons";
import { Container } from "@material-ui/core";
import { BabyIcon } from "../Icons/BabyIcon";

interface Props {
  words: Array<string>;
  color: string;
}

export const Preview = (props: Props) => {
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

  const td: CSS.Properties = {
    borderColor: props.color,
    color: props.color,
  };

  return (
    <Container maxWidth="sm">
      <table>
        <thead>
          <tr>
            <th style={td}>B</th>
            <th style={td}>I</th>
            <th style={td}>N</th>
            <th style={td}>G</th>
            <th style={td}>O</th>
          </tr>
          <tr>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
          </tr>
          <tr>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
          </tr>
          <tr>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>
              <BabyIcon color="red" isPDF={false} />
            </td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
          </tr>
          <tr>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
          </tr>
          <tr>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
            <td style={td}>{getRandomWord()}</td>
          </tr>
        </thead>
      </table>
    </Container>
  );
};
