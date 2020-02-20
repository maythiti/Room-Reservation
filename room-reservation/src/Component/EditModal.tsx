import React, { FC, useState, useEffect, Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, createStyles, Fab } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";

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
const EditModal: FC = () => {
    const classes = useStyles();
    const [openEditModal, setOpenEditModal] = useState(true)
    const [modalStyle] = useState(getModalStyle);
    
    function handleClose() {
        setOpenEditModal(false)
    }

  return (<div>
    <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openEditModal}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">UPDATE BOOKING ROOM</h2>
          {/* <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p> */}
          <div>
            <TextField
              defaultValue='id'
            ></TextField>
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

          <div className={classes.buttonGap}>
            <Button color="primary" variant="contained">
              UPDATE
            </Button>
          </div>
        </div>
      </Modal>
  </div>)
};

export default EditModal;
