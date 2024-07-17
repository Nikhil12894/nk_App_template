import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { appRout } from "./AppRouts";

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={appRout}></RouterProvider>
    </Suspense>
  );
}

export default App;
