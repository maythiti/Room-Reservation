import React, { FC, useState, useEffect, Suspense } from "react";
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'
import AddModal from './AddModal'

const ListRoom: FC = () => {
  return (<div>
    Hello React
    <EditModal />
    <DeleteModal />
    <AddModal />
  </div>)
};

export default ListRoom;
