import React, { FC, useState, useEffect, Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, createStyles, Fab } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";

const useStyles = makeStyles(theme =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    table: {
      minWidth: 650
    },
    buttonGap: {
      marginTop: "10px"
    },
    buttonGapLeft: {
      marginLeft: "15px"
    },
    mainButton: {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      position: "fixed"
    }
  })
);

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddModal: FC<AddModalProps> = props => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const { isOpen, onClose } = props;

  useEffect(() => {
    console.log("isOpen >> ", isOpen);
  });

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  function onAddRoom() {
    console.log("dispatch add room service");
  }

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Add Room</h2>
          <div>
            <TextField label="Name" />
          </div>
          <div>
            <TextField label="Email" />
          </div>
          <div>
            <TextField label="Description" />
          </div>
          <div></div>
          <Button
            className={classes.buttonGap}
            variant="contained"
            color="primary"
            onClick={onClose}
          >
            CANCEL
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={onAddRoom}
            className={clsx(classes.buttonGap, classes.buttonGapLeft)}
          >
            ADD
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AddModal;
