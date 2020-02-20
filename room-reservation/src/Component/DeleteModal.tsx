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
    }
  })
);

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteModal: FC<DeleteModalProps> = props => {
  const { isOpen, onClose } = props;
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

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

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Confirm to Delete</h2>
          <p id="simple-modal-description">delete room </p>
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
            className={clsx(classes.buttonGap, classes.buttonGapLeft)}
          >
            DELETE
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
