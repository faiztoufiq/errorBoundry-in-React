import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/page";
import ErrorFile from "./errorFile/page";
import NotFound from "./notFound/page";
import ErrorBoundary from "./errorBoundry";
import { routes } from "./common/routes";
const AppRoutes: React.FC = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.error} element={<ErrorFile />} />
        <Route path={routes.all} element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoutes;
