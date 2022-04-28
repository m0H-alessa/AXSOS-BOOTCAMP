import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import AddPlayer from "../view/ManagePlayer/AddPlayer";
import ListPlayer from "../view/ManagePlayer/ListPlayer";

const ManagePlayerRoutes = () => {
  return (
    <Fragment>
      <Route element={<AddPlayer />} path="/manageplayer/AddPlayer" />
      <Route element={<ListPlayer />} path="/manageplayer/ListPlayer" />
    </Fragment>
  );
};

export default ManagePlayerRoutes;
