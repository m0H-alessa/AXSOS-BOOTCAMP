import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import ManagePlayer from "../view/home/ManagePlayer";
import ManagePlayerStatus from "../view/home/ManagePlayerStatus";

const AppRoutes = () => {
  return (
    <Fragment>
      <Route element={<ManagePlayer />} path="/manageplayer" />
      <Route element={<ManagePlayerStatus />} path="/manageplayerstatus" />
    </Fragment>
  );
};

export default AppRoutes;
