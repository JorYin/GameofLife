import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing";
import Quiz from "./pages/quiz";
import Ending from "./pages/ending";
import Resources from "./pages/resource";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/ending",
    element: <Ending />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
