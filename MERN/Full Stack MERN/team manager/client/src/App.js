import { Routes, Route, Outlet } from "react-router-dom";
import ManagePlayerLayout from "./layout/ManagePlayerLayout";
import AppRoutes from "./routes/AppRoutes";
import ManagePlayerRoutes from "./routes/ManagePlayerRoutes";
import GameList from "./view/GameList";
import ManagePlayer from "./view/home/ManagePlayer";
import ManagePlayerStatus from "./view/home/ManagePlayerStatus";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ManagePlayerLayout />}>
        {AppRoutes()}

        <Route path="/manageplayer" element={<ManagePlayer />}>
          {ManagePlayerRoutes()}
        </Route>

        <Route path="/manageplayerstatus" element={<ManagePlayerStatus />}>
          <Route path="/manageplayerstatus/GameList" element={<GameList />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
