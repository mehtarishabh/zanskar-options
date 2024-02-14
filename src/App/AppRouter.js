import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";
const Home = lazy(() => import('../pages/Home/Home'));
const Charts = lazy(() => import('../pages/Charts/Charts'));
const renderLoader = () => <p>Loading</p>;

function AppRouter() {
  return (
    <div className="AppRouter">
      <BrowserRouter>
        <Suspense fallback={renderLoader()}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/charts" element={<Charts />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;