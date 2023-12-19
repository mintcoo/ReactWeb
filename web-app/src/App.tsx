import { Route, Routes } from "react-router-dom";
import Circle from "./Components/Circle";
import Layout from "./Layout";
import Home from "./Screens/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/circle" element={<Circle CircleColor={"Tomato"} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
