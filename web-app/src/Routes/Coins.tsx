import { Link, Outlet } from "react-router-dom";

function Coins() {
  const coins = [
    {
      id: "btc-bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      rank: 1,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "eth-ethereum",
      name: "Ethereum",
      symbol: "ETH",
      rank: 2,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "hex-hex",
      name: "HEX",
      symbol: "HEX",
      rank: 3,
      is_new: false,
      is_active: true,
      type: "token",
    },
  ];

  return (
    <>
      <div className="text-4xl">코인</div>
      <ul className="text-2xl">
        {coins.map((coin) => {
          return (
            <Link to={`${coin.id}`}>
              <li
                className="p-4 mb-4 bg-teal-300 rounded-lg hover:text-purple-600"
                key={coin.id}
              >
                {coin.name} →
              </li>
            </Link>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
}

export default Coins;
