import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

interface Props {
  words: Array<string>;
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Words = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const [tempWords, setTempWords] = React.useState(props.words.join("\n"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempWords(event.target.value);
  };

  const handleDone = () => {
    console.log(tempWords);
    props.onChange(tempWords.split("\n"));
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Update Words
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Edit Words</DialogTitle>
        <DialogContent dividers={true} style={{ minWidth: 500 }}>
          <TextField
            label="Words"
            multiline
            defaultValue={tempWords}
            variant="outlined"
            onChange={handleTextChange}
            style={{ width: "100%" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDone} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
