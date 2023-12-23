import { Route, Routes } from "react-router-dom";
import Circle from "./Routes/Circle";
import Layout from "./Layout";
import Home from "./Routes/Home";
import NotFound from "./Screens/NotFound";
import Coin from "./Routes/Coin";
import Coins from "./Routes/Coins";
import CoinPrice from "./Routes/CoinPrice";
import CoinChart from "./Routes/CoinChart";

function Router() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />

        <Route path="/coins/:coinId" element={<Coin />}>
          <Route path="price" element={<CoinPrice />} />
          <Route path="chart" element={<CoinChart />} />
        </Route>
        <Route path="/circle" element={<Circle CircleColor={"Tomato"} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
