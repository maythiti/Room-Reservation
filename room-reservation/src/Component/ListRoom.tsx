import React, { FC, useState, useEffect, Suspense } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import AddModal from "./AddModal";
import { createStyles, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    mainButton: {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      position: "fixed"
    }
  })
);
const ListRoom: FC = () => {
  const classes = useStyles()

  function onOpenCreate() {
    console.log('add icon was clicked')
  }
  return (
    <div>
      Hello React
      <EditModal />
      <DeleteModal />
      <AddModal />
      <Fab
        className={classes.mainButton}
        color="primary"
        aria-label="add"
        onClick={onOpenCreate}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default ListRoom;
