import React, { FC, useState, useEffect, Suspense } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import AddModal from "./AddModal";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, createStyles, Fab } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoom } from '../store/room/action'


const useStyles = makeStyles(theme =>
  createStyles({
    mainButton: {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      position: "fixed"
    },
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

const ListRoom: FC = () => {
  const classes = useStyles();
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  function onOpenCreate() {
    console.log("add icon was clicked");
    setAddModalOpen(true);
  }

  useEffect(() => {
    console.log('useEffect')
    dispatch(fetchRoom());
  }, [dispatch])

  const room = [
    {
      id: 1,
      title: "test",
      email: "test@js.com",
      description: "test",
      strat: "6767823785273",
      end: "6767823785273"
    }
  ];

  function onClickEdit() {
    console.log("edit clicked");
    setEditModalOpen(true);
  }

  function onClickDelete() {
    console.log("delete clicked");
    setDeleteModalOpen(true);
  }

  return (
    <div>
      Hello React
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Dessert (100g serving)</TableCell> */}
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Modify</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {room.map((row: any, index: any) => (
              <TableRow key={row.id}>
                {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.start}</TableCell>
                <TableCell align="right">
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={onClickEdit}
                  >
                    Edit
                  </Button>

                  <Button
                    className={classes.buttonGapLeft}
                    color="secondary"
                    variant="contained"
                    onClick={onClickDelete}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
      />
      <AddModal
        isOpen={isAddModalOpen}
        onClose={() => setAddModalOpen(false)}
      />
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
