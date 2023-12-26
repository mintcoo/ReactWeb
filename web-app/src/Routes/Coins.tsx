import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  // useQuery로 로딩상태와 데이터를 가져올수있음, 데이터타입하고 지정해주고 이름과 api함수 가져오면됨

  // const [coins, setCoins] = useState<ICoin[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const getCoins = async () => {
  //   const { data } = await axios("https://api.coinpaprika.com/v1/coins");
  //   // console.log(data.slice(0, 100), "z");
  //   setCoins(data.slice(0, 100));
  //   setLoading(false);
  // };

  useEffect(() => {
    // getCoins();
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>코인들</title>
      </Helmet> */}
      <div className="text-4xl">코인</div>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="text-2xl">
          {data?.map((coin) => {
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
