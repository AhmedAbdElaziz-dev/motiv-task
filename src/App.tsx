import React from "react";
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

function App() {
  const routeDefinitions = createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}></Route>
    </Route>
  );
  const router = createBrowserRouter(routeDefinitions);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
