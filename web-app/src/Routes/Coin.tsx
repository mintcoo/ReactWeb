import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinPrice, fetchMapleOcid } from "../api";

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
  const urlMatch = location.pathname;

  // const [infoData, setInfoData] = useState<IInfoData>();
  // const [priceData, setPriceData] = useState<IPriceData>();
  // const [loading, setLoading] = useState<boolean>(true);
  // reqct-query 쓰기전 state들
  const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>(
    ["info", coinId],
    () =>
      // useQuery는 고유의 key가 필요한데 []로 관리하므로 ["info", coinId]로 고유성부여
      // useQuery를 여러개쓰면 변수가 겹치니까 이름을 바꿔줘야함 infoLoading, infoData
      fetchCoinInfo(coinId!)
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<IPriceData>(
    ["ticker", coinId],
    () => fetchCoinPrice(coinId!)
  );

  const { isLoading: mapleLoading, data: mapleOcidData } = useQuery<string>(
    "mapleOcid",
    fetchMapleOcid
  );
  // ========== 연습용 메이플 정보 ============

  const loading = infoLoading || priceLoading;
  // 로딩이 2개니까

  const [tap, setTap] = useState<string>("");

  useEffect(() => {
    if (urlMatch.includes("price")) {
      setTap("price");
    } else if (urlMatch.includes("chart")) {
      setTap("chart");
    }
  }, [coinId, urlMatch]);

  return (
    <>
      <div className="text-2xl text-sky-700">
        여기는 {name || infoData?.name} 정보입니다
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="p-8 rounded-lg bg-slate-300 dark:bg-slate-800">
            <ul className="text-xl font-bold text-purple-500">
              <li>Name : {infoData?.name}</li>
              <li>Rank : {infoData?.rank}</li>
              <li>Price : {priceData?.price}</li>
            </ul>
            <div className="w-96">{infoData?.description}</div>
          </div>
        </>
      )}
      <div className="flex text-xl font-bold text-white bg-pink-400 justify-evenly w-96 rounded-2xl">
        <Link
          className={`${tap == "price" ? "text-pink-700" : ""}`}
          to={`price`}
        >
          Price
        </Link>
        <div>|</div>
        <Link
          className={`${tap == "chart" ? "text-pink-700" : ""}`}
          to={`chart`}
        >
          Chart
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Coin;
