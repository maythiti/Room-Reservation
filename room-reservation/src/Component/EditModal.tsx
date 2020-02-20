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

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditModal: FC<EditModalProps> = props => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const { isOpen, onClose } = props;

  function onClickUpdate() {
    console.log('dispatch update service')
  }

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">UPDATE BOOKING ROOM</h2>
          {/* <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p> */}
          <div>
            <TextField defaultValue="id"></TextField>
          </div>
          <div>
            <TextField
              label="Name"
              //   onChange={e => handleTitleEditChange(e)}
            ></TextField>
          </div>
          <div>
            <TextField
              label="Email"
              //   onChange={e => handleEmailEditChange(e)}
            ></TextField>
          </div>
          <div>
            <TextField
              label="Description"
              //   onChange={e => handleDescEditChange(e)}
            ></TextField>
          </div>
          <div>
            <TextField
              label="Start Date"
              //   onChange={e => handleStartDateEditChange(e)}
            ></TextField>
          </div>

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
            className={clsx(classes.buttonGapLeft, classes.buttonGap)}
            onClick={onClickUpdate}
          >
            UPDATE
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default EditModal;
