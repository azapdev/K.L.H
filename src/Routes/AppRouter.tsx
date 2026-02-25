import { Route, Routes } from "react-router-dom";
import { NavRoutes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {NavRoutes.map(({ path, element }, index) => {
        return <Route key={index} path={path} element={element}></Route>;
      })}
    </Routes>
  );
};

export default AppRouter;
