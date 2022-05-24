import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout</h1>
      <ul>
        <li>
          <NavLink to="lazy1"> Lazy 1 </NavLink>
        </li>
        <li>
          <NavLink to="lazy2"> Lazy 2 </NavLink>
        </li>
        <li>
          <NavLink to="lazy3"> Lazy 3 </NavLink>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="lazy1" element={<LazyPage1 />}>
            Lazy 1
          </Route>
          <Route path="lazy2" element={<LazyPage2 />}>
            Lazy 2
          </Route>
          <Route path="lazy3" element={<LazyPage3 />}>
            Lazy 3
          </Route>
          <Route path="*" element={<Navigate to="lazy1" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default LazyLayout;
