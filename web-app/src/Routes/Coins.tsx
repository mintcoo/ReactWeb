import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Loading from "../Components/Loading";

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getCoins = async () => {
    const { data } = await axios("https://api.coinpaprika.com/v1/coins");
    // console.log(data.slice(0, 100), "z");
    setCoins(data.slice(0, 100));
    setLoading(false);
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <>
      <div className="text-4xl">코인</div>
      {loading ? (
        <Loading />
      ) : (
        <ul className="text-2xl">
          {coins.map((coin) => {
            return (
              <Link to={`${coin.id}`} state={coin.name}>
                <li
                  className="flex items-center p-4 mb-4 bg-teal-300 rounded-lg hover:text-purple-600"
                  key={coin.id}
                >
                  <img
                    className="w-10 h-10"
                    src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                  />
                  <div className="pl-4">{coin.name} →</div>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Coins;
