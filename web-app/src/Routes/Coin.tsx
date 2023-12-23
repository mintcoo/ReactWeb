import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: Date;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;

  first_data_at: Date;
  last_data_at: Date;
}

interface IPriceData {
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_15m: number;
  percent_change_30m: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number;
  ath_date: Date;
  percent_from_price_ath: number;
}
// 데이터 받아오는 타입관련은 노션에 정리해두었으니 참조

function Coin() {
  const { coinId } = useParams();
  const location = useLocation();
  const name = location.state;

  const [infoData, setInfoData] = useState<IInfoData>();
  const [priceData, setPriceData] = useState<IPriceData>();

  const getCoinInfo = async () => {
    const { data: coinData } = await axios(
      `https://api.coinpaprika.com/v1/coins/${coinId}`
    );
    const {
      data: { quotes: coinPrice },
    } = await axios(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
    setInfoData(coinData);
    setPriceData(coinPrice);
  };
  useEffect(() => {
    getCoinInfo();
  }, []);

  return (
    <div className="text-2xl text-sky-700">
      여기는 {name || "코인"} 정보입니다
    </div>
  );
}

export default Coin;
