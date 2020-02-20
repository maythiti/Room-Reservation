import React, { FC, useState, useEffect, Suspense } from "react";
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'
const ListRoom: FC = () => {
  return (<div>
    Hello React
    <EditModal />
    <DeleteModal />
  </div>)
};

export default ListRoom;
