import { Route, Routes } from "react-router-dom";
import Circle from "./Components/Circle";
import Layout from "./Layout";
import Home from "./Screens/Home";
import NotFound from "./Screens/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/circle" element={<Circle CircleColor={"Tomato"} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
